import {
	resolveAnchorClass,
	resolvePaddingClass,
	resolvePositionClass,
	resolveZIndexClass,
} from "../../resolvers/class";
import type { PropsBuilder } from "../../utils";
import {
	anchorPattern,
	backgroundPattern,
	borderPatterns,
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
import { filterSizeClassType } from "./size";
import { filterTextClassType } from "./text";
import { filterTransitionClassType } from "./transition";

export const filterClass = (className: string, builder: PropsBuilder) => {
	// *------------------------- FILTERS -------------------------*//
	if (match(className, sizePatterns)) return filterSizeClassType(className, builder); //* Done

	if (match(className, textPattern)) return filterTextClassType(className, builder); //* Done

	if (match(className, backgroundPattern)) return filterBackgroundClassType(className, builder); //* Done

	if (match(className, borderPatterns)) return filterBorderClassType(className, builder); //* Done

	if (match(className, transitionPatterns)) return filterTransitionClassType(className);

	// *------------------------- RESOLVERS -------------------------*//
	if (match(className, anchorPattern)) return resolveAnchorClass(className, builder); //* Done

	if (match(className, paddingPattern)) return resolvePaddingClass(className, builder);

	if (match(className, positionPattern)) return resolvePositionClass(className, builder); //* Done

	if (match(className, zIndexPattern)) return resolveZIndexClass(className);
};
