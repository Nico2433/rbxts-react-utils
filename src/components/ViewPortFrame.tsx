import React, { useRef } from "react";
import { useGetCssProps, useMergeEvents } from "../hooks";
import type { ReactViewportFrame } from "../types";
import { deleteUnusedProps } from "../utils";
import { UiCorner, UiListLayout, UiPadding, UiSizeConstraint } from "./ui";

const VideoFrame: React.FC<Readonly<ReactViewportFrame>> = (props) => {
	const className = props.className ?? "";
	const ref = props.forwardRef ?? useRef<ViewportFrame>();

	const passedProps = table.clone(props);

	const { cssProps, childProps } = useGetCssProps<ViewportFrame>(className, ref);
	const { mergedEvents } = useMergeEvents<ViewportFrame>(props, cssProps.Event);
	deleteUnusedProps(passedProps);

	const totalEvents = {
		...mergedEvents,
		...passedProps.Event,
	};

	return (
		<viewportframe ref={ref} {...cssProps} {...passedProps} Event={totalEvents}>
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
		</viewportframe>
	);
};

export default VideoFrame;
