import type { ReactButtonComponent, ReactComponent, ReactInputComponent } from "../types";

type CustomProps = ReactComponent & ReactInputComponent & ReactButtonComponent;
type DeleteProps = keyof CustomProps;

export const deleteUnusedProps = (props: { [key: string]: unknown }) => {
	const deleteProps: DeleteProps[] = ["className", "forwardRef", "onHover", "onChange", "onClick"];

	for (const key of deleteProps) {
		if (!typeIs(props[key], "nil")) delete props[key];
	}
};
