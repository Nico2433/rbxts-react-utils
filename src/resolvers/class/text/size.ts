import { BUILD_ENUM, type PropsBuilder } from "../../../utils";
import { classValueCallback, resolveClassValue } from "../../core";

export const resolveTextSizeClassName = (className: string, builder: PropsBuilder, auto?: boolean) => {
	builder.setBuildType(BUILD_ENUM.IGNORE);

	if (auto) {
		builder.setKey("TextScaled");
		builder.setBuildProp("TextScaled", true);
	} else {
		builder.setKey("TextSize");

		const resolvedValues = resolveClassValue(className);

		classValueCallback(resolvedValues, ({ value }) => builder.setBuildProp("TextSize", value));
	}
};
