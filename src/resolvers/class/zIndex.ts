import { BUILD_ENUM, type PropsBuilder } from "../../utils";
import { classValueCallback, resolveClassValue } from "../core";

export const resolveZIndexClass = (className: string, builder: PropsBuilder) => {
	builder.setKey("ZIndex");
	builder.setBuildType(BUILD_ENUM.IGNORE);

	const resolvedValues = resolveClassValue(className, { preventCalculate: true });

	classValueCallback(resolvedValues, ({ value }) => {
		builder.setBuildProp("ZIndex", value);
	});
};
