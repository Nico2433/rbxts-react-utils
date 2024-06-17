import { EVENT, hoverPattern, match } from "../../utils";

export const filterEventClassType = (className: string) => {
	if (match(className, hoverPattern)) return EVENT.HOVER;
};
