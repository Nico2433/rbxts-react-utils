import type { PropsObject } from "../../types";
import { CLASS_TYPE } from "../../utils";

export const resolveBuildProp = (classType: CLASS_TYPE, props: PropsObject, useTemp?: boolean) => {
	switch (classType) {
		case CLASS_TYPE.ANCHOR:
			{
				const anchorPoint = useTemp ? props.tempBuildProps.AnchorPoint : props.buildProps.AnchorPoint;
				if (anchorPoint) return new Vector2(anchorPoint.x, anchorPoint.y);
			}
			break;
	}
};
