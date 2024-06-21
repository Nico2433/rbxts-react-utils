import { TweenService } from "@rbxts/services";
import type { AnyGuiObject, ResolveEventPropsType } from "../../../types";
import { PSEUDO_CLASS, type PropsBuilder } from "../../../utils";
import { eventCallback } from "../../core";

export const resolveHoverEvent = <T extends AnyGuiObject>(className: string, builder: PropsBuilder<T>) =>
	eventCallback<T, unknown>(className, builder, "Hover", (key, value) => {
		const guiInstance = builder.guiInstance;
		const initialValue = builder.finalProps[key];

		let tween = TweenService.Create(guiInstance, new TweenInfo(), { [key]: value } as never);
		let resetTween = TweenService.Create(guiInstance, new TweenInfo(), { [key]: initialValue } as never);

		const transitions = builder.buildProps.Tween;
		if (transitions && transitions.size() > 0) {
			const exists = transitions.find((transition) => transition.type === PSEUDO_CLASS.HOVER);
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
			} else {
				const existsAll = transitions.find((transition) => transition.type === PSEUDO_CLASS.ALL);
				if (existsAll) {
					tween = TweenService.Create(
						guiInstance,
						new TweenInfo(
							existsAll.time,
							existsAll.easingStyle,
							existsAll.easingDirection,
							existsAll.repeatCount,
							existsAll.reverses,
							existsAll.delayTime,
						),
						{ [key]: value } as never,
					);

					resetTween = TweenService.Create(
						guiInstance,
						new TweenInfo(
							existsAll.time,
							existsAll.easingStyle,
							existsAll.easingDirection,
							existsAll.repeatCount,
							existsAll.reverses,
							existsAll.delayTime,
						),
						{ [key]: initialValue } as never,
					);
				}
			}
		}

		const actualEvents = builder.finalProps.Event;

		const mouseEnter = actualEvents?.MouseEnter as ResolveEventPropsType<T> | undefined;
		const mouseLeave = actualEvents?.MouseLeave as ResolveEventPropsType<T> | undefined;

		const newEvents = {
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

		builder.setFinalProp("Event", newEvents);
	});
