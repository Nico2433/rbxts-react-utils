import CssConfig from "../../../CssConfig";
import { BUILD_ENUM, type PropsBuilder } from "../../../utils";
import { classValueCallback, resolveClassValue } from "../../core";

export const resolveBorderWidthClassName = (className: string, builder: PropsBuilder) => {
	builder.setKey("BorderSizePixel");
	builder.setBuildType(BUILD_ENUM.IGNORE);

	const values = CssConfig.getValues("borderWidth");

	const resolvedValues = resolveClassValue(className, {
		defaultValue: values.default as number,
		providedValues: values,
	});

	classValueCallback(resolvedValues, ({ value }) => {
		return builder.setBuildProp("BorderSizePixel", value);
	});
};
