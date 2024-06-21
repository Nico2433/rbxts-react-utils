import type { AnyGuiObject, BuildProps, BuildPropsKey, CssClassName } from "../../types";
import type { PropsBuilder } from "../../utils";
import { bracketsPattern, match, parseFraction } from "../../utils";
import type { ValueType } from "../../values";
import { getClassNameValues, type ClassNameValue } from "../../values";

interface OptParams {
	providedValues?: ClassNameValue;
	defaultValue?: number;
	calculate?: {
		method: "*" | "/";
		value: number;
	};
	preventCalculate?: boolean;
}

export type CssClassNameValueReturnType<T extends CssClassName, K extends ValueType = ValueType> = T & { value: K };

export const resolveClassValue = <T extends CssClassName, K extends ValueType = ValueType>(
	className: string,
	{ providedValues, defaultValue = 0, calculate, preventCalculate }: OptParams = {},
): CssClassNameValueReturnType<T, K> => {
	const [firstKey, secondKey, thirdKey] = className.split("-");

	// *-------- Value is always on last key
	let expectedValue = thirdKey ? thirdKey : secondKey;
	let value: ValueType = defaultValue;

	if (expectedValue) {
		// *-------- Removes Brackets
		expectedValue = expectedValue.gsub(bracketsPattern, "")[0];
		const matchedBars = match(expectedValue, "/") ? true : false;

		// *-------- Get provided values
		if (providedValues) {
			const exists = getClassNameValues(secondKey, providedValues, thirdKey);
			if (exists) value = exists;
		}

		if (value === defaultValue) {
			switch (true) {
				case expectedValue === "px":
					{
						value = 1;
					}
					break;

				case expectedValue === "full":
					{
						value = "1%";
					}
					break;

				case matchedBars:
					{
						const percentage = parseFraction(expectedValue);
						value = `${percentage}%`;
					}
					break;

				default: {
					const exists = tonumber(expectedValue);
					if (exists) value = exists;
				}
			}
		}
	}

	// *----------- Only apply to pixels
	if (typeIs(value, "number") && !preventCalculate) {
		if (calculate) {
			const { method, value: calcValue } = calculate;
			method === "*" ? (value *= calcValue) : (value /= calcValue);
		} else {
			value *= 4;
		}
	}

	return { pos1: firstKey, pos2: secondKey, pos3: thirdKey, value } as CssClassNameValueReturnType<T, K>;
};

export const initializeValues = <T extends AnyGuiObject, K extends BuildPropsKey>(
	key: K,
	initialize: NonNullable<BuildProps[K]>,
	builder: PropsBuilder<T>,
) => {
	let value = undefined;

	if (builder.hasPseudoClass) {
		if (!builder.pseudoProps[key]) {
			value = builder.setPseudoProp(key, initialize);
		} else {
			value = builder.pseudoProps[key];
		}
	} else {
		if (!builder.buildProps[key]) {
			value = builder.setBuildProp(key, initialize);
		} else {
			value = builder.buildProps[key];
		}
	}

	return value as NonNullable<BuildProps[K]>;
};

export const initializeOnKey = <T extends object, K extends keyof T>(obj: T, key: K, value: T[K]) => {
	if (!obj[key]) {
		return (obj[key] = value);
	} else {
		return obj[key];
	}
};
