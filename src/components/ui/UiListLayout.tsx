import React from "react";
import type { ChildProps } from "../../types";

const UiListLayout: React.FC<
	Readonly<Pick<ChildProps, "FillDirection" | "Padding" | "HorizontalAlignment" | "VerticalAlignment">>
> = ({ FillDirection, Padding, HorizontalAlignment, VerticalAlignment }) => {
	if (FillDirection)
		return (
			<uilistlayout
				FillDirection={FillDirection}
				Padding={Padding}
				HorizontalAlignment={HorizontalAlignment}
				VerticalAlignment={VerticalAlignment}
			/>
		);
};

export default UiListLayout;
