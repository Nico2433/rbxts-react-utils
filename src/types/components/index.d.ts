export * from "./button";
export * from "./frame";
export * from "./input";
export * from "./label";

export type AnyGuiObject =
	| Frame
	| ScrollingFrame
	| VideoFrame
	| ViewportFrame
	| TextLabel
	| TextBox
	| TextButton
	| ImageLabel
	| ImageButton;

export interface ReactComponent<T extends AnyGuiObject = AnyGuiObject> {
	children?: React.ReactNode;
	forwardRef?: React.RefObject<T>;
	className?: string;
	onHover?: (isHovering: boolean, rbx: T, x: number, y: number) => void;
}
