export type Udim2Type = UDim2 | React.Binding<UDim2> | undefined;

export interface Udim2Props {
	xScale: number;
	xOffset: number;
	yScale: number;
	yOffset: number;
}

export type UdimType = UDim | React.Binding<UDim> | undefined;

export interface UdimProps {
	scale?: number;
	offset?: number;
}
