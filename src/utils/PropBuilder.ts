import type {
	AllProps,
	AllPropsKey,
	AnyGuiObject,
	BuildProps,
	BuildPropsKey,
	ChildBuildProps,
	ChildBuildPropsKey,
	ChildProps,
	ChildPropsKey,
	Udim2Props,
	Vector2Props,
} from "../types";

export enum BUILD_ENUM {
	IGNORE,
	VECTOR_2,
	UDIM_2,
	COLOR_3,
}

type ResolveBuildTypes<T, K extends BUILD_ENUM> = K extends BUILD_ENUM.VECTOR_2 ? Vector2Props : T;

export class PropsBuilder<T extends AnyGuiObject = AnyGuiObject> {
	guiInstance: T;

	buildType?: BUILD_ENUM;
	buildedValue: unknown;

	finalProps: AllProps = {};
	buildProps: BuildProps = {};
	pseudoProps: BuildProps = {};

	key?: AllPropsKey;
	hasPseudoClass?: boolean;

	finalChildProps: ChildProps = {};
	buildChildProps: ChildBuildProps = {};

	childKey?: ChildPropsKey;

	constructor(guiObject: T) {
		this.guiInstance = guiObject;
	}

	clearAll = () => {
		this.clearLast();
		this.finalProps = {};
		this.buildProps = {};
		this.pseudoProps = {};
		this.finalChildProps = {};
		this.buildChildProps = {};
	};

	clearLast = () => {
		this.key = undefined;
		this.childKey = undefined;
		this.hasPseudoClass = undefined;
		this.buildType = undefined;
		this.buildedValue = undefined;
	};

	setKey = (value: AllPropsKey) => (this.key = value);

	setHasPseudoClass = (value: boolean) => (this.hasPseudoClass = value);

	setBuildType = (buildType: BUILD_ENUM) => (this.buildType = buildType);

	setFinalProp = <T extends AllPropsKey>(key: T, value: NonNullable<AllProps[T]>) => (this.finalProps[key] = value);

	setBuildProp = <T extends BuildPropsKey>(key: T, value: NonNullable<BuildProps[T]>) => {
		this.pseudoProps[key] = value;
		return (this.buildProps[key] = value);
	};

	setPseudoProp = <T extends BuildPropsKey>(key: T, value: NonNullable<BuildProps[T]>) =>
		(this.pseudoProps[key] = value);

	setChildKey = (value: ChildPropsKey) => (this.childKey = value);

	setFinalChildProp = <T extends ChildPropsKey>(key: T, value: NonNullable<ChildProps[T]>) =>
		(this.finalChildProps[key] = value);

	setChildBuildProp = <T extends ChildBuildPropsKey>(key: T, value: NonNullable<ChildBuildProps[T]>) =>
		(this.buildChildProps[key] = value);

	build = <T, K extends BUILD_ENUM = BUILD_ENUM>(buildType: K, value: ResolveBuildTypes<T, K>): T => {
		let builded;

		switch (buildType) {
			case BUILD_ENUM.IGNORE:
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

			case BUILD_ENUM.UDIM_2:
				{
					const typed = value as Udim2Props;
					builded = new UDim2(typed.xScale, typed.xOffset, typed.yScale, typed.yOffset);
				}
				break;

			case BUILD_ENUM.COLOR_3: {
				const typed = value as string;
				builded = Color3.fromHex(typed);
			}
		}

		this.buildedValue = builded;
		return builded as T;
	};

	initializeValues = <T extends BuildPropsKey>(key: T, initialize: NonNullable<BuildProps[T]>) => {
		let value = undefined;

		if (this.hasPseudoClass) {
			if (!this.pseudoProps[key]) {
				value = this.setPseudoProp(key, initialize);
			} else {
				value = this.pseudoProps[key];
			}
		} else {
			if (!this.buildProps[key]) {
				value = this.setBuildProp(key, initialize);
			} else {
				value = this.buildProps[key];
			}
		}

		return value as NonNullable<BuildProps[T]>;
	};

	getProps = () => {
		if (this.hasPseudoClass) return this.pseudoProps;
		return this.buildProps;
	};
}
