import React from "react";
import type { ChildProps } from "../../types";

const UiPadding: React.FC<
	Readonly<Pick<ChildProps, "PaddingTop" | "PaddingRight" | "PaddingBottom" | "PaddingLeft">>
> = ({ PaddingTop, PaddingRight, PaddingBottom, PaddingLeft }) => {
	if (PaddingTop || PaddingRight || PaddingBottom || PaddingLeft)
		return (
			<uipadding
				PaddingTop={PaddingTop}
				PaddingRight={PaddingRight}
				PaddingBottom={PaddingBottom}
				PaddingLeft={PaddingLeft}
			/>
		);
};

export default UiPadding;
