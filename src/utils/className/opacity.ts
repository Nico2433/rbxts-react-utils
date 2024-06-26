import { OpacityClassName } from "../../types";
import { ClassNameValues, getClassName, getClassNameProps, getClassNameValues } from "./core";

export const opacityClassNamePattern = ["^opacity%-", "^bg%-opacity%-"];

export const getOpacityValues = (className: string) => {
	const matches = getClassName(className, opacityClassNamePattern);
	if (matches.isEmpty()) return;

	const props: Props = {};

	matches.forEach((match) => {
		const validated = getClassNameValues<OpacityClassName | "bg">(match, {
			calculate: { method: "/", value: 100 },
		});
		getOpacityProps(validated, props);
	});

	return props;
};

interface Props {
	Transparency?: number;
	BackgroundTransparency?: number;
}

const getOpacityProps = (values: ClassNameValues<OpacityClassName | "bg">, props: Props) =>
	getClassNameProps(values, ({ pos1, value }) => {
		switch (pos1) {
			case "bg":
				{
					props.BackgroundTransparency = value;
				}
				break;

			default:
				{
					props.Transparency = value;
				}
				break;
		}
	});

const textOpacityClassNamePattern = "^text%-opacity%-";

export const getTextOpacityValues = (className: string) => {
	const matches = getClassName(className, textOpacityClassNamePattern);
	if (matches.isEmpty()) return;

	const props: TextProps = {};

	matches.forEach((match) => {
		const validated = getClassNameValues(match, {
			calculate: { method: "/", value: 100 },
		});
		getTextOpacityProps(validated, props);
	});

	return props;
};

interface TextProps {
	TextTransparency?: number;
}

const getTextOpacityProps = (values: ClassNameValues, props: TextProps) =>
	getClassNameProps(values, ({ value }) => {
		props.TextTransparency = value;
	});

const imageOpacityClassNamePattern = "^image%-opacity%-";

export const getImageOpacityValues = (className: string) => {
	const matches = getClassName(className, imageOpacityClassNamePattern);
	if (matches.isEmpty()) return;

	const props: ImageProps = {};

	matches.forEach((match) => {
		const validated = getClassNameValues(match, {
			calculate: { method: "/", value: 100 },
		});
		getImageOpacityProps(validated, props);
	});

	return props;
};

interface ImageProps {
	ImageTransparency?: number;
}

const getImageOpacityProps = (values: ClassNameValues, props: ImageProps) =>
	getClassNameProps(values, ({ value }) => {
		props.ImageTransparency = value;
	});
