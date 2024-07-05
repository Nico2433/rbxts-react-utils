import type { ReactComponent } from ".";
import type { PropsType } from "../props";

type ReactButtonType = TextButton | ImageButton;

interface ReactButtonComponent<T extends ReactButtonType = ReactButtonType> extends ReactComponent<T> {
	onClick?: (rbx: T) => void;
}

export interface ReactTextButton extends ReactButtonComponent<TextButton>, PropsType<TextButton> {}

export interface ReactImageButton extends ReactButtonComponent<ImageButton>, PropsType<ImageButton> {}
