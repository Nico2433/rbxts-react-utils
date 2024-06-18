import type { CssClassName } from "../../types";
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

export const resolveClassNameCallback: CssClassNameCallbackFC = (
	{ pos1, pos2, pos3, value },
	callback,
	expectString,
) => {
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
