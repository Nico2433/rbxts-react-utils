import { resolveColorClass } from "../../resolvers";
import type { PropsBuilder } from "../../utils";
import { colorPattern, isATextInstance, match } from "../../utils";

export const filterTextClassType = (className: string, builder: PropsBuilder) => {
	const instance = builder.guiInstance;

	try {
		if (!isATextInstance(instance))
			throw `[${className}] is applied to a not valid text instance: ${instance.ClassName}`;

		if (match(className, colorPattern)) return resolveColorClass(className, builder, "text");
	} catch (err) {
		warn(err);
	}
};
