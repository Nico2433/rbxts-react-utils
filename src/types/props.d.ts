import type { AnyGuiObject, Vector2Props, Vector2Type } from ".";
import type { EVENT } from "../enums";

export interface PropsObject {
	lastProps: AllProps;
	buildProps: BuildProps;
	tempBuildProps: BuildProps;
}

type AllProps = React.InstanceProps<Frame> &
	React.InstanceProps<ScrollingFrame> &
	React.InstanceProps<VideoFrame> &
	React.InstanceProps<ViewportFrame> &
	React.InstanceProps<TextLabel> &
	React.InstanceProps<TextBox> &
	React.InstanceProps<TextButton> &
	React.InstanceProps<ImageLabel> &
	React.InstanceProps<ImageButton>;

export type PropsType<T extends AnyGuiObject = AnyGuiObject> = T extends Frame
	? React.InstanceProps<Frame>
	: T extends ScrollingFrame
		? React.InstanceProps<ScrollingFrame>
		: T extends VideoFrame
			? React.InstanceProps<VideoFrame>
			: T extends ViewportFrame
				? React.InstanceProps<ViewportFrame>
				: T extends TextLabel
					? React.InstanceProps<TextLabel>
					: T extends TextBox
						? React.InstanceProps<TextBox>
						: T extends TextButton
							? React.InstanceProps<TextButton>
							: T extends ImageLabel
								? React.InstanceProps<ImageLabel>
								: T extends ImageButton
									? React.InstanceProps<ImageButton>
									: AllProps;

export type PropsKey<T extends AnyGuiObject = AnyGuiObject> = keyof PropsType<T>;

// *----------------- BUILD PROPS

type ResolveBuildPropsType<T extends PropsType> = {
	[K in keyof T]: T[K] extends Vector2Type ? Vector2Props : T[K];
};

export type BuildProps<T extends AnyGuiObject = AnyGuiObject> = ResolveBuildPropsType<PropsType<T>> & {
	Tween?: TweenProps[];
};

export type BuildPropsKey = keyof BuildProps;

// *----------------- CUSTOM PROPS -----------------* //

export interface TweenProps {
	type?: EVENT;
	time?: number;
	easingStyle?: Enum.EasingStyle;
	easingDirection?: Enum.EasingDirection;
	repeatCount?: number;
	reverses?: boolean;
	delayTime?: number;
}

// *------------ EVENT PROPS

export type ResolveEventPropsType<T extends GuiObject> = (rbx: T, x: number, y: number) => void;