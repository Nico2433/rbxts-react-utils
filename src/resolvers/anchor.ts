import type { AnchorClassName, BuildProps, PropsObject } from "../types";
import { initializeOnKey } from "../utils";
import { resolveClassNameValues, resolveClassNameValuesCallback } from "./core";

export const resolveAnchorClassName = (className: string, props: PropsObject, useTemp?: boolean) => {
	const resolvedValues = resolveClassNameValues<AnchorClassName>(className, {
		calculate: {
			method: "/",
			value: 100,
		},
	});

	resolveClassNameValuesCallback(resolvedValues, ({ pos1, value }) => {
		if (useTemp) {
			const prop = initializeOnKey(props.tempBuildProps, "AnchorPoint", {});
			switchCase(prop, pos1, value);
		} else {
			const prop = initializeOnKey(props.buildProps, "AnchorPoint", {});
			switchCase(prop, pos1, value);
		}
	});
};

const switchCase = (AnchorPoint: BuildProps["AnchorPoint"], pos1: AnchorClassName["pos1"], value: number) => {
	switch (pos1) {
		case "ax":
			{
				AnchorPoint!.x = value;
			}
			break;

		case "ay":
			{
				AnchorPoint!.y = value;
			}
			break;

		default: {
			AnchorPoint!.x = value;
			AnchorPoint!.y = value;
		}
	}
};
