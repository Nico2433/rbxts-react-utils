import { useEffect, useReducer } from "@rbxts/react";
import { filterClass, filterPseudoClassType } from "../filters";
import type { AllProps, AnyGuiObject, ChildProps } from "../types";
import { PropsBuilder, removePseudoClass } from "../utils";

interface State {
	props: AllProps;
	childProps: ChildProps;
}

interface Action {
	type?: "ChildProps";
	payload: AllProps | ChildProps;
}

const initialState: State = {
	props: {},
	childProps: {},
};

const reducer = (state: State, action: Action) => {
	switch (action.type) {
		case "ChildProps":
			return { ...state, childProps: action.payload as ChildProps };

		default:
			return { ...state, props: action.payload as AllProps };
	}
};

export const useGetCssProps = <T extends AnyGuiObject>(className: string, ref: React.RefObject<T>) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		if (!ref.current) throw error("Not found guiObject ref");

		const classes = className.split(" ");
		const propsBuilder = new PropsBuilder<T>(ref.current);

		for (const name of classes) {
			const { newClassName, matchs } = removePseudoClass(name);
			if (matchs > 0) propsBuilder.setHasPseudoClass(true);

			filterClass(newClassName, propsBuilder);

			const { key, hasPseudoClass, buildType, childKey } = propsBuilder;
			const hasBuildType = typeIs(buildType, "number");

			if (hasBuildType) {
				if (childKey) {
					if (typeIs(childKey, "string")) {
						const build = propsBuilder.build(buildType, propsBuilder.buildChildProps[childKey]);
						if (!hasPseudoClass && build) propsBuilder.setFinalChildProp(childKey, build as never);
					} else {
						for (const key of childKey) {
							const build = propsBuilder.build(buildType, propsBuilder.buildChildProps[key]);
							if (!hasPseudoClass && build) propsBuilder.setFinalChildProp(key, build as never);
						}
					}
				} else if (key) {
					const props = propsBuilder.getProps();
					const build = propsBuilder.build(buildType, props[key]);

					filterPseudoClassType<T>(name, propsBuilder);

					if (!hasPseudoClass && build) propsBuilder.setFinalProp(key, build as never);
				}
			}

			propsBuilder.clearLast();
		}

		dispatch({ payload: { ...propsBuilder.finalProps } });
		dispatch({ type: "ChildProps", payload: propsBuilder.finalChildProps });
		propsBuilder.clearAll();
	}, [className]);

	return { cssProps: state.props, childProps: state.childProps };
};
