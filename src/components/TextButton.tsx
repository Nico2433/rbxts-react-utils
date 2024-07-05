import React, { useRef } from "react";
import { useGetCssProps, useMergeEvents } from "../hooks";
import type { ReactTextButton } from "../types";
import { deleteUnusedProps } from "../utils";
import { UiCorner, UiListLayout, UiPadding, UiSizeConstraint } from "./ui";

const TextButton: React.FC<Readonly<ReactTextButton>> = (props) => {
	const className = props.className ?? "";
	const ref = props.forwardRef ?? useRef<TextButton>();

	const passedProps = table.clone(props);

	const { cssProps, childProps } = useGetCssProps<TextButton>(className, ref);
	const { mergedEvents } = useMergeEvents<TextButton>(passedProps, cssProps.Event);
	deleteUnusedProps(passedProps);

	const totalEvents = {
		...mergedEvents,
		...passedProps.Event,
	};

	return (
		<textbutton ref={ref} {...cssProps} {...passedProps} Event={totalEvents}>
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
		</textbutton>
	);
};

export default TextButton;
