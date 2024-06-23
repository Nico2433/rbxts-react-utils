import { resolveSizeClass, resolveSizeConstraintClass } from "../../resolvers/class";
import type { PropsBuilder } from "../../utils";
import { autoPattern, match, sizeConstraintPattern, sizePattern } from "../../utils";

export const filterSizeClassType = (className: string, builder: PropsBuilder) => {
	if (match(className, autoPattern)) return resolveSizeClass(className, builder, true);

	if (match(className, sizePattern)) return resolveSizeClass(className, builder);

	if (match(className, sizeConstraintPattern)) return resolveSizeConstraintClass(className, builder);
};
