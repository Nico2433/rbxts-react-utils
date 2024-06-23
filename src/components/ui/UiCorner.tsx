import React from "react";
import type { ChildProps } from "../../types";

const UiCorner: React.FC<Readonly<Pick<ChildProps, "CornerRadius">>> = ({ CornerRadius }) => {
	if (CornerRadius) return <uicorner CornerRadius={CornerRadius} />;
};

export default UiCorner;
