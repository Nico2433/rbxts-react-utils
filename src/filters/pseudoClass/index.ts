import type { AnyGuiObject } from "../../types";
import type { PropsBuilder } from "../../utils";
import { eventsPatterns, match } from "../../utils";
import { filterEventClassType } from "./event";

export const filterPseudoClassType = <T extends AnyGuiObject>(className: string, builder: PropsBuilder<T>) => {
	if (match(className, eventsPatterns)) return filterEventClassType<T>(className, builder);
};
