module.exports = {
	space: false,
	semicolon: true,
	envs: ['browser', 'node'],
	settings: {
		'import/resolver': {
			typescript: {
				alwaysTryTypes: false,
				project: 'tsconfig.json'
			}
		},
		'import/internal-regex': '^#'
	},
	extends: [
		'plugin:compat/recommended',
		'plugin:unicorn/recommended',
		'plugin:sonarjs/recommended'
	],
	plugins: [
		'import',
		'unicorn',
		'sonarjs'
	],
	rules: {
		'indent': ['error', 'tab'],
		'node/prefer-global/process': 'off',
		'arrow-parens': ['error', 'always'],
		'comma-dangle': ['error', 'never'],
		'node/file-extension-in-import': 'off',
		'arrow-body-style': 'off',
		'object-curly-spacing': ['error', 'always'],
		'no-await-in-loop': 'off',
		'quote-props': ['error', 'consistent'],
		'spaced-comment': ['error', 'always'],
		'no-multiple-empty-lines': [
			'error',
			{
				max: 2,
				maxBOF: 0,
				maxEOF: 0
			}
		],
		'no-new': 'off',
		'no-warning-comments': 'off',
		'func-names': ['error', 'as-needed'],
		'import/extensions': ['error', 'always', {
			ignorePackages: true
		}],
		'import/no-unresolved': ['error', {
			commonjs: false,
			amd: false
		}],
		'import/no-useless-path-segments': ['error', {
			noUselessIndex: true
		}],
		'import/newline-after-import': ['error', { count: 2 }],
		'import/order': ['error', {
			groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
			pathGroups: [
				{
					pattern: 'node:**',
					group: 'builtin',
					position: 'before'
				},
				{
					pattern: 'astro',
					group: 'external',
					position: 'before'
				},
				{
					pattern: '#components/**',
					group: 'internal',
					position: 'after'
				},
				{
					pattern: '#*/**',
					group: 'internal',
					position: 'before'
				}
			],
			pathGroupsExcludedImportTypes: []
		}],
		'import/no-unassigned-import': ['error', {
			allow: [
				'virtual:*',
				'**/*.css',
				'**/*.postcss',
				'core-js'
			]
		}],
		'n/file-extension-in-import': 'off',
		'capitalized-comments': 'off',
		'unicorn/no-thenable': 'off',
		'unicorn/no-console-spaces': 'off',
		'unicorn/no-array-reduce': ['error', { allowSimpleOperations: true }],
		'unicorn/no-array-callback-reference': 'off',
		'import/no-cycle': 'off',
		'unicorn/prevent-abbreviations': [
			'error',
			{
				replacements: {
					ref: false,
					refs: false,
					prop: {
						property: false
					},
					props: {
						properties: false
					}
				},
				allowList: {
					'props': true,
					'prop-types': true,
					'prop-type': true,
					'PropTypes': true,
					'ref': true,
					'refs': true,
					'env': true
				}
			}
		],
		'unicorn/prefer-ternary': 'off',
		'sonarjs/cognitive-complexity': 'off',
		'sonarjs/no-duplicate-string': ['error', 5],
		'sonarjs/no-nested-template-literals': 'off',
		'jsx-quotes': ['error', 'prefer-double'],
		'unicorn/prefer-top-level-await': 'off'
	},
	overrides: [
		{
			files: ['**/*.astro'],
			plugins: ['astro'],
			envs: ['astro/astro'],
			Parser: 'astro-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.astro'],
				sourceType: 'module'
			},
			extends: [
				'plugin:astro/recommended',
				'plugin:astro/jsx-a11y-strict'
			],
			rules: {
				'unicorn/filename-case': ['error', { case: 'pascalCase' }],
				'astro/prefer-class-list-directive': ['error'],
				'astro/prefer-split-class-list': ['error', { 'splitLiteral': true }]
			}
		},
		{
			files: ['**/pages/*.astro'],
			rules: {
				'unicorn/filename-case': ['error', { case: 'kebabCase' }]
			}
		},
		{
			files: ['**/*.astro/*.js', '*.astro/*.js'],
			plugins: ['astro'],
			envs: ['browser', 'node', 'astro/astro'],
			parser: '@typescript-eslint/parser',
			rules: {
				'prettier/prettier': 'off'
			}
		},
		{
			files: ['**/*.cjs'],
			rules: {
				'unicorn/prefer-module': 'off',
				'unicorn/no-process-exit': 'off',
				'tree-shaking/no-side-effects-in-initialization': 'off'
			}
		},
		{
			files: ['uno.config.js'],
			rules: {
				'sonarjs/no-duplicate-string': 'off'
			}
		}
	]
};
