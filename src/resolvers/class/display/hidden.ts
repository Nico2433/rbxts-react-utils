import type { PropsBuilder } from "../../../utils";
import { BUILD_ENUM } from "../../../utils";

export const resolveHiddenClassName = (builder: PropsBuilder) => {
	builder.setKey("Visible");
	builder.setBuildType(BUILD_ENUM.IGNORE);

	builder.setBuildProp("Visible", false);
};
