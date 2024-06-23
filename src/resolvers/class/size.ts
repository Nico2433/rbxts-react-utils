import CssConfig from "../../CssConfig";
import type { SizeClassName, SizeConstraintClassName } from "../../types";
import { BUILD_ENUM, type PropsBuilder } from "../../utils";
import { classValueCallback, resolveClassValue } from "../core";

export const resolveSizeClass = (className: string, builder: PropsBuilder, auto?: boolean) => {
	if (auto) {
		builder.setKey("AutomaticSize");
		builder.setBuildType(BUILD_ENUM.IGNORE);

		const resolvedValues = resolveClassValue<SizeClassName>(className);

		classValueCallback(resolvedValues, ({ pos1 }) => {
			switch (pos1) {
				case "w":
					return builder.setBuildProp("AutomaticSize", "X");

				case "h":
					return builder.setBuildProp("AutomaticSize", "Y");

				default:
					return builder.setBuildProp("AutomaticSize", "XY");
			}
		});
	} else {
		builder.setKey("Size");
		builder.setBuildType(BUILD_ENUM.UDIM_2);

		const resolvedValues = resolveClassValue<SizeClassName>(className, {
			providedValues: CssConfig.getValues("size"),
		});

		classValueCallback(resolvedValues, ({ pos1, value }, isPercent) => {
			const size = builder.initializeValues("Size", {
				xScale: 0,
				xOffset: 0,
				yScale: 0,
				yOffset: 0,
			});

			switch (pos1) {
				case "w":
					return isPercent ? (size.xScale = value) : (size.xOffset = value);

				case "h":
					return isPercent ? (size.yScale = value) : (size.yOffset = value);

				default: {
					if (isPercent) {
						size.xScale = value;
						size.yScale = value;
					} else {
						size.xOffset = value;
						size.yOffset = value;
					}
				}
			}
		});
	}
};

export const resolveSizeConstraintClass = (className: string, builder: PropsBuilder) => {
	builder.setBuildType(BUILD_ENUM.VECTOR_2);

	const resolvedValues = resolveClassValue<SizeConstraintClassName>(className, {
		providedValues: CssConfig.getValues("size"),
	});

	classValueCallback(resolvedValues, ({ pos1, pos2, value }) => {
		const props = builder.buildChildProps;

		switch (pos1) {
			case "min": {
				builder.setChildKey("MinSize");
				if (!props.MinSize) props.MinSize = {};
				return pos2 === "w" ? (props.MinSize.x = value) : (props.MinSize.y = value);
			}

			default: {
				builder.setChildKey("MaxSize");
				if (!props.MaxSize)
					props.MaxSize = {
						x: math.huge,
						y: math.huge,
					};
				return pos2 === "w" ? (props.MaxSize.x = value) : (props.MaxSize.y = value);
			}
		}
	});
};
