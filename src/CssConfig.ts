import type { ClassNameValue } from "./values";
import { borderRadiusValues, borderWidthValues, colorsValues, sizeValues } from "./values";

interface Values {
	colors: ClassNameValue;
	size: ClassNameValue;
	borderRadius: ClassNameValue;
	borderWidth: ClassNameValue;
}

class CssConfig {
	constructor() {}

	private values: Values = {
		colors: colorsValues,
		size: sizeValues,
		borderRadius: borderRadiusValues,
		borderWidth: borderWidthValues,
	};

	getValues = (key: keyof Values) => {
		return this.values[key];
	};

	addValues = <T extends keyof Values>(key: T, value: ClassNameValue) => {
		const values = this.values;
		this.values[key] = { ...values[key], ...value };
	};

	setValues = <T extends keyof Values>(key: T, value: ClassNameValue) => {
		this.values[key] = value;
	};
}

export default new CssConfig() as CssConfig;
