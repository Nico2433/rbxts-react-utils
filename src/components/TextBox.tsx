import React, { useEffect, useRef } from "react";
import { useGetCssProps, useMergeEvents } from "../hooks";
import type { ReactTextBox } from "../types";
import { deleteUnusedProps } from "../utils";
import { UiCorner, UiListLayout, UiPadding, UiSizeConstraint } from "./ui";

const TextLabel: React.FC<Readonly<ReactTextBox>> = (props) => {
	const className = props.className ?? "";
	const ref = props.forwardRef ?? useRef<TextBox>();

	const passedProps = table.clone(props);

	const { cssProps, childProps } = useGetCssProps<TextBox>(className, ref);
	const { mergedEvents } = useMergeEvents<TextBox>(passedProps, cssProps.Event);

	const onChange = props.onChange;
	if (onChange) {
		useEffect(() => {
			const reference = ref.current;
			if (!reference) return;

			ref.current.GetPropertyChangedSignal("Text").Connect(() => onChange(reference));
		}, []);
	}

	deleteUnusedProps(passedProps);

	const totalEvents = {
		...mergedEvents,
		...passedProps.Event,
	};

	return (
		<textbox ref={ref} {...cssProps} {...passedProps} Event={totalEvents}>
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
		</textbox>
	);
};

export default TextLabel;
