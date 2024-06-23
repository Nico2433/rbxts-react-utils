import { resolveColorClass, resolveOpacityClass } from "../../resolvers";
import { colorPattern, match, opacityPattern, type PropsBuilder } from "../../utils";

export const filterBackgroundClassType = (className: string, builder: PropsBuilder) => {
	if (match(className, opacityPattern)) return resolveOpacityClass(className, builder, "background");

	if (match(className, colorPattern)) return resolveColorClass(className, builder);
};
