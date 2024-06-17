import React, { useRef } from "react";
import { useGetProps } from "../hooks";
import type { ReactFrame } from "../types";

const Frame: React.FC<ReactFrame> = (props) => {
	const ref = props.forwardRef ?? useRef<Frame>();
	const className = props.className ?? "";

	const { props: classProps } = useGetProps(className, ref);

	return <frame ref={ref} {...classProps} />;
};

export default Frame;
