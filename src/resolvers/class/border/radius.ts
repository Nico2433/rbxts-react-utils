import CssConfig from "../../../CssConfig";
import { BUILD_ENUM, type PropsBuilder } from "../../../utils";
import { classValueCallback, resolveClassValue } from "../../core";

export const resolveBorderRadiusClassName = (className: string, builder: PropsBuilder) => {
	builder.setChildKey("CornerRadius");
	builder.setBuildType(BUILD_ENUM.UDIM);

	const values = CssConfig.getValues("borderRadius");

	const resolvedValues = resolveClassValue(className, {
		defaultValue: values.default as number,
		providedValues: values,
	});

	classValueCallback(resolvedValues, ({ value }, isPercent) => {
		if (value === 1 && isPercent) return builder.setChildBuildProp("CornerRadius", { scale: value });
		return builder.setChildBuildProp("CornerRadius", { offset: value });
	});
};
