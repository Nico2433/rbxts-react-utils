import { pseudoClassPattern } from "./class";

export const removePseudoClass = (className: string) => {
	const [newClassName, matchs] = className.gsub(pseudoClassPattern, "");
	return { newClassName, matchs };
};
