import type { EVENT } from "../enums";
import { CLASS_TYPE } from "../enums";
import { filterClassNameType } from "../filters";
import { filterPseudoClassType } from "../filters/pseudoClass";
import type { BuildPropsKey, PropsObject } from "../types";
import { removePseudoClass } from "../utils";
import { resolveAnchorClassName } from "./anchor";

const resolveReturn = <T extends BuildPropsKey>(key: T, classType: CLASS_TYPE, eventType?: EVENT) => {
	return { key, classType, eventType };
};

const useTemp = (eventType?: EVENT) => {
	return typeIs(eventType, "number");
};

export const resolveClassName = (className: string, props: PropsObject) => {
	const { pseudoType, value } = filterPseudoClassType(className) ?? {};

	const extracted = removePseudoClass(className);
	const classType = filterClassNameType(extracted);

	switch (classType) {
		case CLASS_TYPE.ANCHOR: {
			resolveAnchorClassName(className, props, useTemp(eventType));
			return resolveReturn("AnchorPoint", classType, eventType);
		}
	}
};
