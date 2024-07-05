export const anchorPattern = "^a[xy]?";

export const paddingPattern = "^p[xy]?";

export const positionPattern = ["^inset", "^top", "^right", "^bottom", "^left"];

export const zIndexPattern = "^z";

// *---------- GENERAL CLASSES

export const colorPattern = ["^%a+%-%a+%-%w+", "^%a+%-white", "^%a+%-black"];

export const opacityPattern = ["^opacity", "^%a+%-opacity"];

export const autoPattern = "^%a+%-auto";

// *---------- FILTER CLASSES

export const textPattern = "^text";

export const imagePattern = "^image";

export const backgroundPattern = "^bg";

export const borderPattern = "^border";
export const borderRadiusPattern = "^rounded";
export const borderPatterns = [borderPattern, borderRadiusPattern];

export const sizePattern = ["^size", "^[wh]"];
export const sizeConstraintPattern = ["^min", "^max"];
export const sizePatterns = [...sizePattern, ...sizeConstraintPattern];

export const transitionPattern = "^transition";
export const transitionDurationPattern = "^duration";
export const transitionTimingPattern = "^ease";
export const transitionPatterns = [transitionPattern, transitionDurationPattern, transitionTimingPattern];

// *---------- TEXT CLASSES

export const textSizePattern = "^text%-[xlsmg%d]+";

export const textAlignPattern = ["^text%-left", "^text%-center", "^text%-right"];

// *---------- BORDER CLASSES

export const borderWidthPattern = ["^border$", "^border%-%d+"];

// *---------- DISPLAY CLASSES

export const hiddenPattern = "^hidden";

export const flexPattern = "^flex";

export const gapPattern = "^gap";

export const justifyPattern = "^justify";

export const itemsPattern = "^items";
