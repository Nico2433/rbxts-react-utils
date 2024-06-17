export const match = (text: string, patterns: string | string[], excludePatterns?: string | string[]) => {
	const matched = matchPattern(text, patterns);
	if (excludePatterns) {
		const excluded = matchPattern(text, excludePatterns);
		if (excluded) return;
	}

	return matched;
};

const matchPattern = (text: string, patterns: string | string[]) => {
	if (typeIs(patterns, "string")) {
		const matched = text.match(patterns)[0];
		if (typeIs(matched, "string")) return matched;
	} else {
		for (const pattern of patterns) {
			const matched = text.match(pattern)[0];
			if (typeIs(matched, "string")) return matched;
		}
	}
};
