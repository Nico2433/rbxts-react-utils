export const sizePattern = ["^size%-", "^[wh]%-"];
export const sizeConstraintPattern = ["^min%-[wh]", "^max%-[wh]"];

export const sizePatterns = [...sizePattern, ...sizeConstraintPattern];
