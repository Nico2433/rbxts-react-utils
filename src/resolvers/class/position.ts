import type { PositionClassName } from "../../types";
import { BUILD_ENUM, type PropsBuilder } from "../../utils";
import { classValueCallback, resolveClassValue } from "../core";

export const resolvePositionClass = (className: string, builder: PropsBuilder) => {
	builder.setKey("Position");
	builder.setBuildType(BUILD_ENUM.UDIM_2);

	const resolvedValues = resolveClassValue<PositionClassName>(className);

	classValueCallback(resolvedValues, ({ pos1, pos2, value }, isPercent) => {
		const position = builder.initializeValues("Position", {
			xScale: 0,
			xOffset: 0,
			yScale: 0,
			yOffset: 0,
		});

		switch (pos1) {
			case "top":
				return isPercent
					? value === 1
						? (position.yScale = 0)
						: (position.yScale = value)
					: (position.yOffset = value);

			case "right":
				{
					if (isPercent) return value === 1 ? (position.xScale = 1) : (position.xScale = 1 - value);

					position.xScale = 1;
					position.xOffset = value * -1;
				}
				break;

			case "bottom":
				{
					if (isPercent) return value === 1 ? (position.yScale = 1) : (position.yScale = 1 - value);

					position.yScale = 1;
					position.yOffset = value * -1;
				}
				break;

			case "left":
				return isPercent
					? value === 1
						? (position.xScale = 0)
						: (position.xScale = value)
					: (position.xOffset = value);

			default: {
				if (pos2 === "x") return isPercent ? (position.xScale = value) : (position.xOffset = value);
				if (pos2 === "y") return isPercent ? (position.yScale = value) : (position.yOffset = value);

				if (isPercent) {
					position.xScale = value;
					position.yScale = value;
				} else {
					position.xOffset = value;
					position.yOffset = value;
				}
			}
		}
	});
};
