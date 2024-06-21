import type { AllPropsKey, AnyGuiObject, CssClassName } from "../../types";
import type { PropsBuilder } from "../../utils";
import { parsePercentage } from "../../utils";
import type { ValueType } from "../../values";
import type { CssClassNameValueReturnType } from "./values";

type CallbackFC<T extends CssClassName, K extends ValueType = ValueType> = (
	values: CssClassNameValueReturnType<T, K>,
	isPercent: boolean,
) => void;

interface CssClassNameCallbackFC {
	<T extends CssClassName>(
		values: CssClassNameValueReturnType<T>,
		callback: CallbackFC<T, number>,
		expectString?: false,
	): void;

	<T extends CssClassName>(
		values: CssClassNameValueReturnType<T>,
		callback: CallbackFC<T, string>,
		expectString: true,
	): void;
}

export const classValueCallback: CssClassNameCallbackFC = ({ pos1, pos2, pos3, value }, callback, expectString) => {
	try {
		let newValue = value;
		let isPercent = false;

		if (expectString) {
			if (!typeIs(newValue, "string")) throw `Expected value: [string] got [${typeOf(value)}]`;
		} else {
			if (typeIs(newValue, "string")) {
				const percentage = parsePercentage(newValue);
				if (percentage) {
					newValue = percentage;
					isPercent = true;
				}
			}
			if (!typeIs(newValue, "number")) throw `Expected value: [number] got [${typeOf(value)}]`;
		}

		callback({ pos1, pos2, pos3, value: newValue } as never, isPercent);
	} catch (err) {
		let className = `${pos1}`;

		if (pos2) className = `${className}-${pos2}`;
		if (pos3) className = `${className}-${pos3}`;

		warn(`[${className}]: ${err}`);
	}
};

export const eventCallback = <T extends AnyGuiObject, K>(
	className: string,
	builder: PropsBuilder<T>,
	eventName: string,
	callback: (key: AllPropsKey, value: K) => void,
) => {
	try {
		const key = builder.key;
		if (!key) throw `Key not found for className: ${className}`;

		const value = builder.buildedValue;
		if (!value) throw `Builded value not found for className: ${className}`;

		callback(key, value as K);
	} catch (err) {
		warn(`[${eventName}]: ${err}`);
	}
};
