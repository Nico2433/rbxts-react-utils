import CssConfig from "../../CssConfig";
import { BUILD_ENUM, type PropsBuilder } from "../../utils";
import { classValueCallback, resolveClassValue } from "../core";

export const resolveColorClass = (className: string, builder: PropsBuilder, apply?: "text" | "image" | "border") => {
	builder.setBuildType(BUILD_ENUM.COLOR_3);

	const resolvedValues = resolveClassValue(className, {
		providedValues: CssConfig.getValues("colors"),
	});

	classValueCallback(
		resolvedValues,
		({ value }) => {
			switch (apply) {
				case "text": {
					builder.setKey("TextColor3");
					return builder.setBuildProp("TextColor3", value);
				}

				case "image": {
					builder.setKey("ImageColor3");
					return builder.setBuildProp("ImageColor3", value);
				}

				case "border": {
					builder.setKey("BorderColor3");
					return builder.setBuildProp("BorderColor3", value);
				}

				default: {
					builder.setKey("BackgroundColor3");
					return builder.setBuildProp("BackgroundColor3", value);
				}
			}
		},
		true,
	);
};
