import type { AllProps, AllPropsKey, AnyGuiObject, BuildProps, BuildPropsKey, Vector2Props } from "../types";

export enum BUILD_ENUM {
	NO_NEED,
	VECTOR_2,
}

type ResolveBuildTypes<T, K extends BUILD_ENUM> = K extends BUILD_ENUM.VECTOR_2 ? Vector2Props : T;

export class PropsBuilder<T extends AnyGuiObject = AnyGuiObject> {
	finalProps: AllProps = {};
	buildProps: BuildProps = {};
	pseudoProps: BuildProps = {};

	guiObject: T;
	key: AllPropsKey | undefined;
	hasPseudoClass: boolean | undefined;
	buildType: BUILD_ENUM | undefined;

	constructor(guiObject: T) {
		this.guiObject = guiObject;
	}

	setKey = (value: AllPropsKey) => (this.key = value);

	clearKey = () => (this.key = undefined);

	setHasPseudoClass = (value: boolean) => (this.hasPseudoClass = value);

	clearHasPseudoClass = () => (this.hasPseudoClass = false);

	setBuildType = (buildType: BUILD_ENUM) => (this.buildType = buildType);

	clearBuildType = () => (this.buildType = undefined);

	setFinalProp = <T extends AllPropsKey>(key: T, value: NonNullable<AllProps[T]>) => (this.finalProps[key] = value);

	setBuildProp = <T extends BuildPropsKey>(key: T, value: NonNullable<BuildProps[T]>) =>
		(this.buildProps[key] = value);

	setPseudoProp = <T extends BuildPropsKey>(key: T, value: NonNullable<BuildProps[T]>) =>
		(this.pseudoProps[key] = value);

	build = <T, K extends BUILD_ENUM = BUILD_ENUM>(buildType: K, value: ResolveBuildTypes<T, K>): T | undefined => {
		let builded;

		switch (buildType) {
			case BUILD_ENUM.NO_NEED:
				{
					builded = value;
				}
				break;

			case BUILD_ENUM.VECTOR_2:
				{
					const typed = value as Vector2Props;
					builded = new Vector2(typed.x, typed.y);
				}
				break;
		}

		return builded as T;
	};
}
