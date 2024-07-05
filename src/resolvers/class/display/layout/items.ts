import type { JustifyClassName } from "../../../../types";
import type { PropsBuilder } from "../../../../utils";
import { BUILD_ENUM } from "../../../../utils";
import { classValueCallback, resolveClassValue } from "../../../core";

export const resolveItemsClassName = (className: string, builder: PropsBuilder) => {
	builder.setBuildType(BUILD_ENUM.IGNORE);

	const resolvedValues = resolveClassValue<JustifyClassName>(className);

	classValueCallback(resolvedValues, ({ pos2 }) => {
		const isRow = builder.buildChildProps.FillDirection === "Horizontal";

		if (isRow) {
			builder.setChildKey("VerticalAlignment");
			if (pos2 === "start") return builder.setChildBuildProp("VerticalAlignment", "Top");
			if (pos2 === "center") return builder.setChildBuildProp("VerticalAlignment", "Center");
			if (pos2 === "end") return builder.setChildBuildProp("VerticalAlignment", "Bottom");
		} else {
			builder.setChildKey("HorizontalAlignment");
			if (pos2 === "start") return builder.setChildBuildProp("HorizontalAlignment", "Left");
			if (pos2 === "center") return builder.setChildBuildProp("HorizontalAlignment", "Center");
			if (pos2 === "end") return builder.setChildBuildProp("HorizontalAlignment", "Right");
		}
	});
};
