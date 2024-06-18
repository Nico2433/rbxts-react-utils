import { useEffect, useState } from "@rbxts/react";
import { filterClass, filterPseudoClassType } from "../filters";
import type { AllProps, AnyGuiObject } from "../types";
import { PropsBuilder, removePseudoClass } from "../utils";

export const useGetProps = <T extends AnyGuiObject>(className: string, ref: React.RefObject<T>) => {
	const [props, setProps] = useState<AllProps>({});

	useEffect(() => {
		if (!ref.current) return;

		const classes = className.split(" ");
		const propsBuilder = new PropsBuilder<T>(ref.current);

		for (const name of classes) {
			const { newClassName, matchs } = removePseudoClass(name);
			if (matchs > 0) propsBuilder.setHasPseudoClass(true);

			filterClass<T>(newClassName, propsBuilder);

			const key = propsBuilder.key;
			const hasPseudoClass = propsBuilder.hasPseudoClass;
			const buildType = propsBuilder.buildType;
			const hasBuildType = typeIs(buildType, "number");

			if (key && hasBuildType) {
				const build = propsBuilder.build(buildType, propsBuilder.buildProps[key as never]);
				filterPseudoClassType<T>(name, propsBuilder);

				if (!hasPseudoClass && build) propsBuilder.setFinalProp(key, build as never);
			}

			propsBuilder.clearKey();
			propsBuilder.clearHasPseudoClass();
			propsBuilder.clearBuildType();
		}

		setProps(propsBuilder.finalProps);
	}, [className]);

	return { props };
};
