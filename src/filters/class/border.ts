import { resolveBorderRadiusClassName, resolveBorderWidthClassName, resolveColorClass } from "../../resolvers";
import { borderRadiusPattern, borderWidthPattern, colorPattern, match, type PropsBuilder } from "../../utils";

export const filterBorderClassType = (className: string, builder: PropsBuilder) => {
	if (match(className, borderRadiusPattern)) return resolveBorderRadiusClassName(className, builder);

	if (match(className, borderWidthPattern)) return resolveBorderWidthClassName(className, builder);

	if (match(className, colorPattern)) return resolveColorClass(className, builder, "border");
};
