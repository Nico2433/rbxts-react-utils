import type { ReactComponent } from ".";
import type { PropsType } from "../props";

type ReactInputType = TextBox;

interface ReactInputComponent<T extends ReactInputType = ReactInputType> extends ReactComponent<T> {
	onChange?: (rbx: T) => void;
}

export interface ReactTextBox extends ReactInputComponent<TextBox>, PropsType<TextBox> {}
