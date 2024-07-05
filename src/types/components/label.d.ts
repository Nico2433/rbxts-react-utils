import type { ReactComponent } from ".";
import type { PropsType } from "../props";

type ReactLabelType = TextLabel | ImageLabel;

interface ReactLabelComponent<T extends ReactLabelType> extends ReactComponent<T> {}

export interface ReactTextLabel extends ReactLabelComponent<TextLabel>, PropsType<TextLabel> {}

export interface ReactImageLabel extends ReactLabelComponent<ImageLabel>, PropsType<ImageLabel> {}
