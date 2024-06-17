import { TweenService } from "@rbxts/services";
import type { AllProps, AnyGuiObject, PropsKey, PropsObject, ResolveEventPropsType } from "../../types";
import { EVENT } from "../../utils";

export const resolveEvent = <T extends AnyGuiObject, K extends PropsKey>(
	key: K,
	value: AllProps[K],
	event: EVENT,
	props: PropsObject,
	guiInstance: T,
	initialValue?: AllProps[K],
) => {
	const transitions = props.buildProps.Tween;

	let tween = undefined;
	let resetTween = undefined;

	if (transitions) {
		const exists = transitions.find((transition) => transition.type === event);
		if (exists) {
			tween = TweenService.Create(
				guiInstance,
				new TweenInfo(
					exists.time,
					exists.easingStyle,
					exists.easingDirection,
					exists.repeatCount,
					exists.reverses,
					exists.delayTime,
				),
				{ [key]: value } as never,
			);

			resetTween = TweenService.Create(
				guiInstance,
				new TweenInfo(
					exists.time,
					exists.easingStyle,
					exists.easingDirection,
					exists.repeatCount,
					exists.reverses,
					exists.delayTime,
				),
				{ [key]: initialValue } as never,
			);
		}
	}
	if (!tween) tween = TweenService.Create(guiInstance, new TweenInfo(), { [key]: value } as never);
	if (!resetTween) resetTween = TweenService.Create(guiInstance, new TweenInfo(), { [key]: initialValue } as never);

	const actualEvents = props.lastProps.Event;

	switch (event) {
		case EVENT.HOVER: {
			const mouseEnter = actualEvents?.MouseEnter as ResolveEventPropsType<T>;
			const mouseLeave = actualEvents?.MouseLeave as ResolveEventPropsType<T>;

			props.lastProps.Event = {
				...actualEvents,
				MouseEnter: (rbx: unknown, x: number, y: number) => {
					mouseEnter && mouseEnter(rbx as T, x, y);
					tween.Play();
				},
				MouseLeave: (rbx: unknown, x: number, y: number) => {
					mouseLeave && mouseLeave(rbx as T, x, y);
					resetTween.Play();
				},
			};
		}
	}
};
