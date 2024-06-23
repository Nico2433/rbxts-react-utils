import { BUILD_ENUM, type PropsBuilder } from "../../utils";
import { classValueCallback, resolveClassValue } from "../core";

export const resolveOpacityClass = (
	className: string,
	builder: PropsBuilder,
	apply?: "text" | "image" | "background",
) => {
	builder.setBuildType(BUILD_ENUM.IGNORE);

	const resolvedValues = resolveClassValue(className, {
		calculate: {
			method: "/",
			value: 100,
		},
	});

	classValueCallback(resolvedValues, ({ value }) => {
		switch (apply) {
			case "text": {
				builder.setKey("TextTransparency");
				return builder.setBuildProp("TextTransparency", value);
			}

			case "image": {
				builder.setKey("ImageTransparency");
				return builder.setBuildProp("ImageTransparency", value);
			}

			case "background": {
				builder.setKey("BackgroundTransparency");
				return builder.setBuildProp("BackgroundTransparency", value);
			}

			default: {
				builder.setKey("Transparency");
				return builder.setBuildProp("Transparency", value);
			}
		}
	});
};
