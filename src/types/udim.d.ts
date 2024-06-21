export type Udim2Type = UDim2 | React.Binding<UDim2> | undefined;

export interface Udim2Props {
	xScale: number;
	xOffset: number;
	yScale: number;
	yOffset: number;
}

export interface UdimParams {
	scale?: number;
	offset?: number;
}
