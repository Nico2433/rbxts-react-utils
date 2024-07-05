export interface CssClassName<T extends string = string, K extends string = string, C extends string = string> {
	pos1: T;
	pos2?: K;
	pos3?: C;
}

export interface AnchorClassName extends CssClassName<"a" | "ax" | "ay"> {}

export interface SizeClassName extends CssClassName<"size" | "w" | "h"> {}
export interface SizeConstraintClassName extends CssClassName<"min" | "max"> {
	pos2: "w" | "h";
}

export interface PositionClassName extends CssClassName<"inset" | "top" | "right" | "bottom" | "left", "x" | "y"> {}

export interface TransitionTimingClassName extends CssClassName<"ease", "linear" | "in" | "out", "out"> {}

export interface TextAlignClassName extends CssClassName<"text"> {
	pos2: "left" | "center" | "right";
}

export interface PaddingClassName extends CssClassName<"p" | "px" | "py" | "pt" | "pr" | "pb" | "pl"> {}

export interface JustifyClassName extends CssClassName<"justify"> {
	pos2: "start" | "center" | "end";
}
