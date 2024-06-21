export * from "./color";

export type ValueType = string | number;

export interface ClassNameValue {
	[key: ValueType]:
		| ValueType
		| {
				[key: ValueType]: ValueType;
		  };
}

export const getClassNameValues = <T extends keyof ClassNameValue>(
	key: ValueType,
	values: ClassNameValue,
	secondKey?: ValueType,
): ValueType | undefined => {
	let value: ClassNameValue[T] = values[key];

	if (secondKey) {
		const exists = values[secondKey];
		if (exists) value = exists;

		if (typeIs(value, "table")) {
			const numeric = tonumber(secondKey);
			if (numeric) {
				const exists = value[numeric];
				if (exists) value = exists;
			} else {
				value = values[secondKey];
			}
		}
	}

	if (typeIs(value, "string") || typeIs(value, "number")) return value;
};
