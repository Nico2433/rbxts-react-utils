import type { PropsBuilder } from "../../../utils";
import { BUILD_ENUM } from "../../../utils";
import { classValueCallback, resolveClassValue } from "../../core";

export const resolveFlexClassName = (className: string, builder: PropsBuilder) => {
	builder.setChildKey("FillDirection");
	builder.setBuildType(BUILD_ENUM.IGNORE);

	const resolvedValues = resolveClassValue(className);

	classValueCallback(resolvedValues, ({ pos2 }) => {
		pos2
			? builder.setChildBuildProp("FillDirection", "Vertical")
			: builder.setChildBuildProp("FillDirection", "Horizontal");
	});
};
