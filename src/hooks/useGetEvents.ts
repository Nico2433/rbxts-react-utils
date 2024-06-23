import { useEffect, useState } from "@rbxts/react";
import type { AnyGuiObject, PropsType, ReactComponent } from "../types";

export interface CustomEvents<T extends AnyGuiObject> {
	onHover?: ReactComponent<T>["onHover"];
	onClick?: () => void;
}

export const useMergeEvents = <T extends AnyGuiObject>(
	props: PropsType<T> & CustomEvents<T>,
	events?: PropsType<T>["Event"],
) => {
	const { onHover, onClick } = props;
	const hasHover = onHover || (events && (events.MouseEnter || events.MouseLeave)) ? true : false;

	const [mergedEvents, setMergedEvents] = useState<PropsType<T>["Event"] | undefined>(undefined);

	useEffect(() => {
		setMergedEvents(() => ({
			...(hasHover && {
				MouseEnter: (rbx: unknown, x: number, y: number) => {
					onHover && onHover(true, rbx as T, x, y);
					events?.MouseEnter && events.MouseEnter(rbx as never, x, y);
				},
				MouseLeave: (rbx: unknown, x: number, y: number) => {
					onHover && onHover(false, rbx as T, x, y);
					events?.MouseLeave && events.MouseLeave(rbx as never, x, y);
				},
			}),
			...(onClick && { MouseButton1Click: onClick }),
		}));
	}, []);

	return { mergedEvents };
};
