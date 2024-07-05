import React, { useRef } from "react";
import { useGetCssProps, useMergeEvents } from "../hooks";
import type { ReactScrollingFrame } from "../types";
import { deleteUnusedProps } from "../utils";
import { UiCorner, UiListLayout, UiPadding, UiSizeConstraint } from "./ui";

const ScrollingFrame: React.FC<Readonly<ReactScrollingFrame>> = (props) => {
	const className = props.className ?? "";
	const ref = props.forwardRef ?? useRef<ScrollingFrame>();

	const passedProps = table.clone(props);

	const { cssProps, childProps } = useGetCssProps<ScrollingFrame>(className, ref);
	const { mergedEvents } = useMergeEvents<ScrollingFrame>(props, cssProps.Event);
	deleteUnusedProps(passedProps);

	const totalEvents = {
		...mergedEvents,
		...passedProps.Event,
	};

	return (
		<scrollingframe ref={ref} {...cssProps} {...passedProps} Event={totalEvents}>
			{passedProps.children}
			<UiSizeConstraint MinSize={childProps.MinSize} MaxSize={childProps.MaxSize} />
			<UiCorner CornerRadius={childProps.CornerRadius} />
			<UiPadding
				PaddingTop={childProps.PaddingTop}
				PaddingLeft={childProps.PaddingLeft}
				PaddingBottom={childProps.PaddingBottom}
				PaddingRight={childProps.PaddingRight}
			/>
			<UiListLayout
				FillDirection={childProps.FillDirection}
				Padding={childProps.Padding}
				HorizontalAlignment={childProps.HorizontalAlignment}
				VerticalAlignment={childProps.VerticalAlignment}
			/>
		</scrollingframe>
	);
};

export default ScrollingFrame;
