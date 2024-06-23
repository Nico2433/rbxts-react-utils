import React, { useRef } from "react";
import { useGetCssProps, useMergeEvents } from "../hooks";
import type { ReactFrame } from "../types";
import { deleteUnusedProps } from "../utils";
import { UiCorner, UiPadding, UiSizeConstraint } from "./ui";

const Frame: React.FC<Readonly<ReactFrame>> = (props) => {
	const className = props.className ?? "";
	const ref = props.forwardRef ?? useRef<Frame>();

	const passedProps = table.clone(props);

	const { cssProps, childProps } = useGetCssProps<Frame>(className, ref);
	const { mergedEvents } = useMergeEvents<Frame>(props, cssProps.Event);
	deleteUnusedProps(passedProps);

	const totalEvents = {
		...mergedEvents,
		...passedProps.Event,
	};

	return (
		<frame ref={ref} {...cssProps} {...passedProps} Event={totalEvents}>
			{passedProps.children}
			<UiSizeConstraint MinSize={childProps.MinSize} MaxSize={childProps.MaxSize} />
			<UiCorner CornerRadius={childProps.CornerRadius} />
			<UiPadding
				PaddingTop={childProps.PaddingTop}
				PaddingLeft={childProps.PaddingLeft}
				PaddingBottom={childProps.PaddingBottom}
				PaddingRight={childProps.PaddingRight}
			/>
		</frame>
	);
};

export default Frame;
