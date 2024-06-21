import type { AnyGuiObject, Udim2Props, Udim2Type, Vector2Props, Vector2Type } from ".";
import type { PSEUDO_CLASS } from "../utils";

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

export type AllPropsKey<T extends AnyGuiObject = AnyGuiObject> = keyof PropsType<T>;

// *----------------- BUILD PROPS

type ResolveBuildPropsType<T> = {
	[K in keyof T]: T[K] extends Vector2Type ? Vector2Props : T[K] extends Udim2Type ? Udim2Props : T[K];
};

export type BuildProps<T extends AnyGuiObject = AnyGuiObject> = ResolveBuildPropsType<PropsType<T>> & {
	Tween?: TweenProps[];
};

export type BuildPropsKey = keyof BuildProps;

// *----------------- CHILD PROPS

export interface ChildProps {
	MinSize?: Vector2;
	MaxSize?: Vector2;
}

export type ChildPropsKey = keyof ChildProps;

export type ChildBuildProps<T extends ChildProps = ChildProps> = ResolveBuildPropsType<T>;

export type ChildBuildPropsKey = keyof ChildBuildProps;

// *----------------- CUSTOM PROPS -----------------* //

export interface TweenProps {
	type?: PSEUDO_CLASS;
	time?: number;
	easingStyle?: Enum.EasingStyle;
	easingDirection?: Enum.EasingDirection;
	repeatCount?: number;
	reverses?: boolean;
	delayTime?: number;
}

// *------------ EVENT PROPS

export type ResolveEventPropsType<T extends GuiObject> = (rbx: T, x: number, y: number) => void;
