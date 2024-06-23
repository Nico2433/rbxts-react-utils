import type { TextAlignClassName } from "../../../types";
import { BUILD_ENUM, type PropsBuilder } from "../../../utils";
import { classValueCallback, resolveClassValue } from "../../core";

export const resolveTextAlignClassName = (className: string, builder: PropsBuilder) => {
	builder.setKey("TextXAlignment");
	builder.setBuildType(BUILD_ENUM.IGNORE);

	const resolvedValues = resolveClassValue<TextAlignClassName>(className);

	classValueCallback(resolvedValues, ({ pos2 }) => {
		switch (pos2) {
			case "center":
				return builder.setBuildProp("TextXAlignment", "Center");

			case "right":
				return builder.setBuildProp("TextXAlignment", "Right");

			default:
				return builder.setBuildProp("TextXAlignment", "Left");
		}
	});
};
