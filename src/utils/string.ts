import { pseudoClassPattern } from "./class";

export const removePseudoClass = (className: string) => {
	return className.gsub(pseudoClassPattern, "")[0];
};
