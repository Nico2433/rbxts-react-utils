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

export const resolveClassCallback: CssClassNameCallbackFC = ({ pos1, pos2, pos3, value }, callback, expectString) => {
	let newValue = value;
	let isPercent = false;

	if (expectString) {
		if (!typeIs(newValue, "string")) return;
	} else {
		if (typeIs(newValue, "string")) {
			const percentage = parsePercentage(newValue);
			if (percentage) {
				newValue = percentage as never;
				isPercent = true;
			}
		}
		if (!typeIs(newValue, "number")) return;
	}

	callback({ pos1, pos2, pos3, value: newValue } as never, isPercent);
};

export const resolveEventCallBack = <T extends AnyGuiObject, K>(
	className: string,
	builder: PropsBuilder<T>,
	eventName: string,
	callback: (key: AllPropsKey, value: K) => void,
) => {
	try {
		const key = builder.key;
		if (!key) throw `Key not found for className: ${className}`;
		const valueToBuild = builder.pseudoProps[key];
		if (!valueToBuild) throw `Value not found for className: ${className}`;

		const buildType = builder.buildType;
		if (!typeIs(buildType, "number")) throw `BuildType not found for className: ${className}`;
		const value = builder.build<Vector2>(buildType, valueToBuild as never);
		if (!value) throw `Cannot build value for className: ${className}`;

		callback(key, value as K);
	} catch (err) {
		warn(`[${eventName}]: ${err}`);
	}
};
