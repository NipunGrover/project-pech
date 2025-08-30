import antfu from "@antfu/eslint-config";

export default antfu({
	react: true,
	nextjs: true,
	formatters: true,
	stylistic: {
		indent: "tab",
		semi: true,
		quotes: "double",
		overrides: {
		// Always use tabs
			"style/indent": ["error", "tab"],
			"style/no-tabs": "off",
			"style/no-mixed-spaces-and-tabs": "error",
			// Always double quotes
			"style/quotes": ["error", "double"],
			// Enforce braces
			"style/brace-style": ["error", "1tbs", { allowSingleLine: false }],
			// Prefer shorter variable names in small scopes
			"id-length": [
				"warn",
				{
					min: 1,
					max: 50,
					exceptions: ["i", "j", "k", "n", "x", "y", "z", "_", "e", "err"],
				},
			],
			// Enforce error handling patterns
			"no-throw-literal": "error",
			// Prefer early returns
			"no-else-return": ["error", { allowElseIf: false }],
			// Max function parameters
			"max-params": ["warn", 5],
			// Prefer const over let (immutability)
			"prefer-const": "error",
			// No var declarations
			"no-var": "error",
		},
	},
	ignores: ["CLAUDE.md"],
});
