import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	{
		ignores: ["out/**/*"],
		plugins: {
			tseslint,
		},
		rules: {
			"@typescript-eslint/consistent-type-imports": "error",
			"@typescript-eslint/no-unused-vars": "warn",
		},
	},
];
