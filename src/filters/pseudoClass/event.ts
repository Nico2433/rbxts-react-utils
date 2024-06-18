import { resolveHoverEvent } from "../../resolvers/pseudoClass";
import type { AnyGuiObject } from "../../types";
import type { PropsBuilder } from "../../utils";
import { hoverPattern, match } from "../../utils";

export const filterEventClassType = <T extends AnyGuiObject>(className: string, builder: PropsBuilder<T>) => {
	if (match(className, hoverPattern)) return resolveHoverEvent<T>(className, builder);
};
