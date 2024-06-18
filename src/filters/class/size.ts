import { resolveSizeClass, resolveSizeConstraintClass } from "../../resolvers/class";
import { match, sizeConstraintPattern, sizePattern } from "../../utils";

export const filterSizeClassType = (className: string) => {
	if (match(className, sizePattern)) return resolveSizeClass(className);

	if (match(className, sizeConstraintPattern)) return resolveSizeConstraintClass(className);
};
