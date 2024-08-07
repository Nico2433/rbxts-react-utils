import React, { useRef } from "react";
import { useGetCssProps, useMergeEvents } from "../hooks";
import type { ReactTextLabel } from "../types";
import { deleteUnusedProps } from "../utils";
import { UiCorner, UiListLayout, UiPadding, UiSizeConstraint } from "./ui";

const TextLabel: React.FC<Readonly<ReactTextLabel>> = (props) => {
	const className = props.className ?? "";
	const ref = props.forwardRef ?? useRef<TextLabel>();

	const passedProps = table.clone(props);

	const { cssProps, childProps } = useGetCssProps<TextLabel>(className, ref);
	const { mergedEvents } = useMergeEvents<TextLabel>(passedProps, cssProps.Event);
	deleteUnusedProps(passedProps);

	const totalEvents = {
		...mergedEvents,
		...passedProps.Event,
	};

	return (
		<textlabel ref={ref} {...cssProps} {...passedProps} Event={totalEvents}>
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
		</textlabel>
	);
};

export default TextLabel;
