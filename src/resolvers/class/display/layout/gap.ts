import type { PropsBuilder } from "../../../../utils";
import { BUILD_ENUM } from "../../../../utils";
import { classValueCallback, resolveClassValue } from "../../../core";

export const resolveGapClassName = (className: string, builder: PropsBuilder) => {
	builder.setChildKey("Padding");
	builder.setBuildType(BUILD_ENUM.UDIM);

	const resolvedValues = resolveClassValue(className);

	classValueCallback(resolvedValues, ({ value }) => {
		builder.setChildBuildProp("Padding", { offset: value });
	});
};
