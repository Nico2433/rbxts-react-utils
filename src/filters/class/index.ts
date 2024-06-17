import {
	CLASS_TYPE,
	anchorPattern,
	backgroundPattern,
	borderPattern,
	borderRadiusPattern,
	match,
	paddingPattern,
	positionPattern,
	sizeConstraintPattern,
	sizePattern,
	textPattern,
	transitionDurationPattern,
	transitionPatterns,
	transitionTimingPattern,
	zIndexPattern,
} from "../../utils";

export const filterClassType = (className: string) => {
	if (match(className, anchorPattern)) return CLASS_TYPE.ANCHOR;

	if (match(className, borderPattern)) return CLASS_TYPE.BORDER;
	if (match(className, borderRadiusPattern)) return CLASS_TYPE.BORDER;

	if (match(className, textPattern)) return CLASS_TYPE.TEXT;

	if (match(className, backgroundPattern)) return CLASS_TYPE.BACKGROUND;

	if (match(className, paddingPattern)) return CLASS_TYPE.PADDING;

	if (match(className, positionPattern)) return CLASS_TYPE.POSITION;

	if (match(className, sizePattern)) return CLASS_TYPE.SIZE;
	if (match(className, sizeConstraintPattern)) return CLASS_TYPE.SIZE;

	if (match(className, zIndexPattern)) return CLASS_TYPE.Z_INDEX;

	if (match(className, transitionPatterns)) return CLASS_TYPE.TRANSITION;
	if (match(className, transitionDurationPattern)) return CLASS_TYPE.TRANSITION;
	if (match(className, transitionTimingPattern)) return CLASS_TYPE.TRANSITION;
};
