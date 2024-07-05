import {
	resolveAnchorClass,
	resolveFlexClassName,
	resolveGapClassName,
	resolveHiddenClassName,
	resolveItemsClassName,
	resolveJustifyClassName,
	resolvePaddingClass,
	resolvePositionClass,
	resolveZIndexClass,
} from "../../resolvers/class";
import type { PropsBuilder } from "../../utils";
import {
	anchorPattern,
	backgroundPattern,
	borderPatterns,
	flexPattern,
	gapPattern,
	hiddenPattern,
	imagePattern,
	itemsPattern,
	justifyPattern,
	match,
	paddingPattern,
	positionPattern,
	sizePatterns,
	textPattern,
	transitionPatterns,
	zIndexPattern,
} from "../../utils";
import { filterBackgroundClassType } from "./background";
import { filterBorderClassType } from "./border";
import { filterImageClassType } from "./image";
import { filterSizeClassType } from "./size";
import { filterTextClassType } from "./text";
import { filterTransitionClassType } from "./transition";

export const filterClass = (className: string, builder: PropsBuilder) => {
	// *------------------------- FILTERS -------------------------*//
	if (match(className, sizePatterns)) return filterSizeClassType(className, builder); //* Done

	if (match(className, textPattern)) return filterTextClassType(className, builder); //* Done

	if (match(className, backgroundPattern)) return filterBackgroundClassType(className, builder); //* Done

	if (match(className, borderPatterns)) return filterBorderClassType(className, builder); //* Done

	if (match(className, imagePattern)) return filterImageClassType(className, builder);

	if (match(className, transitionPatterns)) return filterTransitionClassType(className);

	// *------------------------- RESOLVERS -------------------------*//
	if (match(className, anchorPattern)) return resolveAnchorClass(className, builder); //* Done

	if (match(className, paddingPattern)) return resolvePaddingClass(className, builder); //* Done

	if (match(className, positionPattern)) return resolvePositionClass(className, builder); //* Done

	if (match(className, zIndexPattern)) return resolveZIndexClass(className, builder); //* Done

	if (match(className, flexPattern)) return resolveFlexClassName(className, builder);

	if (match(className, gapPattern)) return resolveGapClassName(className, builder);

	if (match(className, justifyPattern)) return resolveJustifyClassName(className, builder);

	if (match(className, itemsPattern)) return resolveItemsClassName(className, builder);

	if (match(className, hiddenPattern)) return resolveHiddenClassName(builder);
};
