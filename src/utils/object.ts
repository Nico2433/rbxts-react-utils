export const initializeOnKey = <T extends object, K extends keyof T>(object: T, key: K, value: T[K]) => {
	if (!object[key]) {
		return (object[key] = value);
	} else {
		return object[key];
	}
};
