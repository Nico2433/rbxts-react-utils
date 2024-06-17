export interface CssClassName<T extends string = string, K extends string = string, C extends string = string> {
	pos1: T;
	pos2?: K;
	pos3?: C;
}

export interface AnchorClassName extends CssClassName<"a" | "ax" | "ay"> {}

export interface TransitionTimingClassName extends CssClassName<"ease", "linear" | "in" | "out", "out"> {}
