import type { PaddingClassName } from "../../types";
import { BUILD_ENUM, type PropsBuilder } from "../../utils";
import { classValueCallback, resolveClassValue } from "../core";

export const resolvePaddingClass = (className: string, builder: PropsBuilder) => {
	builder.setBuildType(BUILD_ENUM.UDIM);

	const resolvedValues = resolveClassValue<PaddingClassName>(className);

	classValueCallback(resolvedValues, ({ pos1, value }) => {
		switch (pos1) {
			case "px":
				{
					builder.setChildKey(["PaddingLeft", "PaddingRight"]);
					builder.setChildBuildProp("PaddingLeft", { offset: value });
					builder.setChildBuildProp("PaddingRight", { offset: value });
				}
				break;

			case "py":
				{
					builder.setChildKey(["PaddingTop", "PaddingBottom"]);
					builder.setChildBuildProp("PaddingTop", { offset: value });
					builder.setChildBuildProp("PaddingBottom", { offset: value });
				}
				break;

			case "pt": {
				builder.setChildKey("PaddingTop");
				return builder.setChildBuildProp("PaddingTop", { offset: value });
			}

			case "pl": {
				builder.setChildKey("PaddingLeft");
				return builder.setChildBuildProp("PaddingLeft", { offset: value });
			}

			case "pb": {
				builder.setChildKey("PaddingBottom");
				return builder.setChildBuildProp("PaddingBottom", { offset: value });
			}

			case "pr": {
				builder.setChildKey("PaddingRight");
				return builder.setChildBuildProp("PaddingRight", { offset: value });
			}

			default: {
				builder.setChildKey(["PaddingTop", "PaddingLeft", "PaddingBottom", "PaddingRight"]);
				builder.setChildBuildProp("PaddingTop", { offset: value });
				builder.setChildBuildProp("PaddingLeft", { offset: value });
				builder.setChildBuildProp("PaddingBottom", { offset: value });
				builder.setChildBuildProp("PaddingRight", { offset: value });
			}
		}
	});
};
