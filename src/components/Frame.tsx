import React, { useRef } from "react";
import { useGetProps } from "../hooks";
import type { ReactFrame } from "../types";
import { UiSizeConstraint } from "./ui";

const Frame: React.FC<ReactFrame> = (props) => {
	const ref = props.forwardRef ?? useRef<Frame>();
	const className = props.className ?? "";

	const { cssProps, childProps } = useGetProps(className, ref);

	return (
		<frame ref={ref} {...cssProps}>
			<UiSizeConstraint MinSize={childProps.MinSize} MaxSize={childProps.MaxSize} />
		</frame>
	);
};

export default Frame;
