import type { BuildPropsKey, PropsKey } from "../types";

const unnecessaryProps: BuildPropsKey[] = ["Tween"];

export const isNecessaryProp = (key: PropsKey | BuildPropsKey): key is PropsKey => {
	return !unnecessaryProps.includes(key);
};
