import { BUILD_ENUM, CssConfig, type PropsBuilder } from "../../utils";
import { classValueCallback, resolveClassValue } from "../core";

export const resolveColorClass = (className: string, builder: PropsBuilder, apply?: "text" | "image") => {
	builder.setBuildType(BUILD_ENUM.COLOR_3);

	const resolvedValues = resolveClassValue(className, {
		providedValues: CssConfig.values.colors,
	});

	classValueCallback(
		resolvedValues,
		({ value }) => {
			const props = builder.getProps();

			switch (apply) {
				case "text": {
					builder.setKey("TextColor3");
					return (props.TextColor3 = value);
				}

				case "image": {
					builder.setKey("ImageColor3");
					return (props.ImageColor3 = value);
				}

				default: {
					builder.setKey("BackgroundColor3");
					return (props.BackgroundColor3 = value);
				}
			}
		},
		true,
	);
};
