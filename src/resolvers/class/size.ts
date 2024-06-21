import type { SizeClassName, SizeConstraintClassName } from "../../types";
import { BUILD_ENUM, type PropsBuilder } from "../../utils";
import { classValueCallback, initializeValues, resolveClassValue } from "../core";

export const resolveSizeClass = (className: string, builder: PropsBuilder) => {
	builder.setKey("Size");
	builder.setBuildType(BUILD_ENUM.UDIM_2);

	const resolvedValues = resolveClassValue<SizeClassName>(className);

	classValueCallback(resolvedValues, ({ pos1, value }, isPercent) => {
		const size = initializeValues(
			"Size",
			{
				xScale: 0,
				xOffset: 0,
				yScale: 0,
				yOffset: 0,
			},
			builder,
		);

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
};

export const resolveSizeConstraintClass = (className: string, builder: PropsBuilder) => {
	builder.setBuildType(BUILD_ENUM.VECTOR_2);

	const resolvedValues = resolveClassValue<SizeConstraintClassName>(className);

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
