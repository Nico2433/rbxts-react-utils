import type { ClassNameValue } from "../values";
import { colorsValues } from "../values";

interface Values {
	colors: ClassNameValue;
}

class CssConfig {
	constructor() {}

	values: Values = {
		colors: colorsValues,
	};

	addValues = <T extends keyof Values>(key: T, value: ClassNameValue) => {
		const values = this.values;
		this.values[key] = { ...values[key], ...value };
	};

	setValues = <T extends keyof Values>(key: T, value: ClassNameValue) => {
		this.values[key] = value;
	};
}

export default new CssConfig();
