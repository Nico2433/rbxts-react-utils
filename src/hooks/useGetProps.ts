import { useEffect, useState } from "@rbxts/react";
import { isNecessaryProp } from "../filters";
import { resolveClassName } from "../resolvers";
import { resolveBuildProp, resolveEvent } from "../resolvers/core";
import type { AllProps, AnyGuiObject, PropsObject } from "../types";

export const useGetProps = <T extends AnyGuiObject>(className: string, ref: React.RefObject<T>) => {
	const [props, setProps] = useState<AllProps>({});

	useEffect(() => {
		if (!ref.current) return;
		const classes = className.split(" ");

		const instanceProps: PropsObject = {
			lastProps: {}, // * All values to use
			buildProps: {}, // * Last cycle values
			tempBuildProps: {}, // * Last no event cycle values
		};

		for (const name of classes) {
			const resolvedClassName = resolveClassName(name, instanceProps);
			if (!resolvedClassName || !resolvedClassName.key) continue;
			const { key, classType, eventType } = resolvedClassName;
			const isEvent = typeIs(eventType, "number");

			const builded = resolveBuildProp(classType, instanceProps, isEvent);
			if (isNecessaryProp(key) && !isEvent && builded) instanceProps.lastProps[key] = builded;

			if (isEvent && builded)
				resolveEvent(key, builded, eventType, instanceProps, ref.current, instanceProps.lastProps[key]);
		}

		setProps(instanceProps.lastProps);
	}, [className]);

	return { props };
};
