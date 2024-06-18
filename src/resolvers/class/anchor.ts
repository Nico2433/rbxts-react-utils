import type { AnchorClassName, AnyGuiObject } from "../../types";
import { BUILD_ENUM, type PropsBuilder } from "../../utils";
import { resolveClassCallback, resolveClassNameValues } from "../core";

export const resolveAnchorClass = <T extends AnyGuiObject>(className: string, builder: PropsBuilder<T>) => {
	builder.setKey("AnchorPoint");
	builder.setBuildType(BUILD_ENUM.VECTOR_2);

	const resolvedValues = resolveClassNameValues<AnchorClassName>(className, {
		calculate: {
			method: "/",
			value: 100,
		},
	});

	resolveClassCallback(resolvedValues, ({ pos1, value }) => {
		let anchorPoint;

		if (builder.hasPseudoClass) {
			if (!builder.pseudoProps.AnchorPoint) {
				anchorPoint = builder.setPseudoProp("AnchorPoint", {});
			} else {
				anchorPoint = builder.pseudoProps.AnchorPoint;
			}
		} else {
			if (!builder.buildProps.AnchorPoint) {
				anchorPoint = builder.setBuildProp("AnchorPoint", {});
			} else {
				anchorPoint = builder.buildProps.AnchorPoint;
			}
		}

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
