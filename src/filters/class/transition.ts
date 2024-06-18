import {
	resolveTransitionClassName,
	resolveTransitionDurationClassName,
	resolveTransitionTimingClassName,
} from "../../resolvers/class";
import { match, transitionDurationPattern, transitionPattern, transitionTimingPattern } from "../../utils";

export const filterTransitionClassType = (className: string) => {
	if (match(className, transitionPattern)) return resolveTransitionClassName(className);

	if (match(className, transitionDurationPattern)) return resolveTransitionDurationClassName(className);

	if (match(className, transitionTimingPattern)) return resolveTransitionTimingClassName(className);
};
