import { resolveColorClass, resolveOpacityClass } from "../../resolvers";
import { colorPattern, isAImageInstance, match, opacityPattern, type PropsBuilder } from "../../utils";

export const filterImageClassType = (className: string, builder: PropsBuilder) => {
	const instance = builder.guiInstance;

	try {
		if (!isAImageInstance(instance))
			throw `[${className}] is applied to a not valid image instance: ${instance.ClassName}`;

		if (match(className, opacityPattern)) return resolveOpacityClass(className, builder, "image");

		if (match(className, colorPattern)) return resolveColorClass(className, builder, "image");
	} catch (err) {
		warn(err);
	}
};
