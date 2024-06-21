import { resolveSizeClass, resolveSizeConstraintClass } from "../../resolvers/class";
import type { PropsBuilder } from "../../utils";
import { match, sizeConstraintPattern, sizePattern } from "../../utils";

export const filterSizeClassType = (className: string, builder: PropsBuilder) => {
	if (match(className, sizePattern)) return resolveSizeClass(className, builder);

	if (match(className, sizeConstraintPattern)) return resolveSizeConstraintClass(className, builder);
};
