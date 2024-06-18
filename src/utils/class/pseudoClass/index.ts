export * from "./events";

export const pseudoClassPattern = "^.*:";

export enum PSEUDO_CLASS {
	ALL,
	HOVER,
}

export const removePseudoClass = (className: string) => {
	const [newClassName, matchs] = className.gsub(pseudoClassPattern, "");
	return { newClassName, matchs };
};
