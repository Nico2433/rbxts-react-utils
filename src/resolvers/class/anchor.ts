import type { AnchorClassName, AnyGuiObject } from "../../types";
import { BUILD_ENUM, type PropsBuilder } from "../../utils";
import { classValueCallback, resolveClassValue } from "../core";

export const resolveAnchorClass = <T extends AnyGuiObject>(className: string, builder: PropsBuilder<T>) => {
	builder.setKey("AnchorPoint");
	builder.setBuildType(BUILD_ENUM.VECTOR_2);

	const resolvedValues = resolveClassValue<AnchorClassName>(className, {
		calculate: {
			method: "/",
			value: 100,
		},
	});

	classValueCallback(resolvedValues, ({ pos1, value }) => {
		const anchorPoint = builder.initializeValues("AnchorPoint", {});

		switch (pos1) {
			case "ax":
				return (anchorPoint.x = value);

			case "ay":
				return (anchorPoint.y = value);

			default: {
				anchorPoint.x = value;
				anchorPoint.y = value;
			}
		}
	});
};
