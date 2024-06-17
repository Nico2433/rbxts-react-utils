import pluginJs from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import tseslint from "typescript-eslint";

export default [
	pluginJs.configs.recommended,
	eslintPluginPrettierRecommended,
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
