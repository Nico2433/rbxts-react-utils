import React, { useRef } from "react";
import { useGetCssProps, useMergeEvents } from "../hooks";
import type { ReactTextLabel } from "../types";
import { deleteUnusedProps } from "../utils";
import { UiCorner, UiPadding, UiSizeConstraint } from "./ui";

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
		</textlabel>
	);
};

export default TextLabel;
