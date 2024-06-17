import type { ReactComponent } from ".";
import type { PropsType } from "../props";

type ReactFrameType = Frame | ScrollingFrame | VideoFrame | ViewportFrame;

interface ReactFrameComponent<T extends ReactFrameType> extends ReactComponent<T> {}

export interface ReactFrame extends ReactFrameComponent<Frame>, PropsType<Frame> {}
