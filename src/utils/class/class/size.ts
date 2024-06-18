export const sizePattern = ["^size%-", "^[wh]%-"];
export const sizeConstraintPattern = ["^min%-[wh]", "^max%-[wh]"];

export const sizePatterns = [...sizePattern, ...sizeConstraintPattern];

export enum SIZE_TYPE {
	SIZE,
	SIZE_CONSTRAINT,
}
