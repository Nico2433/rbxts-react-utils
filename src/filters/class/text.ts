import { resolveColorClass, resolveOpacityClass } from "../../resolvers";
import { resolveTextAlignClassName, resolveTextSizeClassName } from "../../resolvers/class/text";
import type { PropsBuilder } from "../../utils";
import {
	autoPattern,
	colorPattern,
	isATextInstance,
	match,
	opacityPattern,
	textAlignPattern,
	textSizePattern,
} from "../../utils";

export const filterTextClassType = (className: string, builder: PropsBuilder) => {
	const instance = builder.guiInstance;

	try {
		if (!isATextInstance(instance))
			throw `[${className}] is applied to a not valid text instance: ${instance.ClassName}`;

		if (match(className, opacityPattern)) return resolveOpacityClass(className, builder, "text");

		if (match(className, textSizePattern)) return resolveTextSizeClassName(className, builder);

		if (match(className, autoPattern)) return resolveTextSizeClassName(className, builder, true);

		if (match(className, textAlignPattern)) return resolveTextAlignClassName(className, builder);

		if (match(className, colorPattern)) return resolveColorClass(className, builder, "text");
	} catch (err) {
		warn(err);
	}
};
