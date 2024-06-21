import { resolveColorClass } from "../../resolvers";
import { colorPattern, match, type PropsBuilder } from "../../utils";

export const filterBackgroundClassType = (className: string, builder: PropsBuilder) => {
	if (match(className, colorPattern)) return resolveColorClass(className, builder);
};
