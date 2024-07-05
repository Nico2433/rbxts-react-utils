import React, { useRef } from "react";
import { useGetCssProps, useMergeEvents } from "../hooks";
import type { ReactImageLabel } from "../types";
import { deleteUnusedProps } from "../utils";
import { UiCorner, UiListLayout, UiPadding, UiSizeConstraint } from "./ui";

const ImageLabel: React.FC<Readonly<ReactImageLabel>> = (props) => {
	const className = props.className ?? "";
	const ref = props.forwardRef ?? useRef<ImageLabel>();

	const passedProps = table.clone(props);

	const { cssProps, childProps } = useGetCssProps<ImageLabel>(className, ref);
	const { mergedEvents } = useMergeEvents<ImageLabel>(passedProps, cssProps.Event);
	deleteUnusedProps(passedProps);

	const totalEvents = {
		...mergedEvents,
		...passedProps.Event,
	};

	return (
		<imagelabel ref={ref} {...cssProps} {...passedProps} Event={totalEvents}>
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
		</imagelabel>
	);
};

export default ImageLabel;
