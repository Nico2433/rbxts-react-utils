import type { ReactComponent } from "../types";

type CustomProps = ReactComponent;
type DeleteProps = keyof CustomProps;

export const deleteUnusedProps = (props: { [key: string]: unknown }) => {
	const deleteProps: DeleteProps[] = ["className", "forwardRef", "onHover"];

	for (const key of deleteProps) {
		if (!typeIs(props[key], "nil")) delete props[key];
	}
};
