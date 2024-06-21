import React from "@rbxts/react";
import type { ChildProps } from "../../types";

const UiSizeConstraint: React.FC<Readonly<Pick<ChildProps, "MinSize" | "MaxSize">>> = ({ MinSize, MaxSize }) => {
	if (MinSize || MaxSize) return <uisizeconstraint MinSize={MinSize} MaxSize={MaxSize} />;
};

export default UiSizeConstraint;
