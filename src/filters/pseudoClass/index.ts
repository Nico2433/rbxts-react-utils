import type { EVENT } from "../../utils";
import { PSEUDO_CLASS, eventsPatterns, match } from "../../utils";
import { filterEventClassType } from "./event";

type PseudoClassType = EVENT;

const handleReturn = (pseudoClassType: PSEUDO_CLASS, value: PseudoClassType | undefined) => {
	return { pseudoType: pseudoClassType, value };
};

export const filterPseudoClassType = (className: string) => {
	if (match(className, eventsPatterns)) return handleReturn(PSEUDO_CLASS.EVENT, filterEventClassType(className));
};
