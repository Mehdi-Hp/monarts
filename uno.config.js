import { defineConfig } from 'unocss';
import transformerDirective from '@unocss/transformer-directives';
import { variantParentMatcher } from '@unocss/preset-mini/utils';


function flexifyLayoutValue(value) {
	if (value === 'start' || value === 'end') {
		return `flex-${value}`;
	}

	if (value.endsWith('between') || value.endsWith('around')) {
		return `space-${value}`;
	}

	return value;
}


export const unocssConfig = defineConfig({
	presets: [],
	transformers: [
		transformerDirective({
			applyVariable: ['--apply']
		})
	],
	postprocess(t) {
		t.selector = t.selector.repeat(3);
		return t;
	},
	variants: [
		variantParentMatcher('@motionOK', '@media (prefers-reduced-motion: no-preference)'),
		variantParentMatcher('@motionNotOK', '@media (prefers-reduced-motion: reduce)'),
		variantParentMatcher('@opacityOK', '@media (prefers-reduced-transparency: no-preference)'),
		variantParentMatcher('@opacityNotOK', '@media (prefers-reduced-transparency: reduce)'),
		variantParentMatcher('@useDataOK', '@media (prefers-reduced-data: no-preference)'),
		variantParentMatcher('@useDataNotOK', '@media (prefers-reduced-data: reduce)'),
		variantParentMatcher('@OSdark', '@media (prefers-color-scheme: dark)'),
		variantParentMatcher('@OSlight', '@media (prefers-color-scheme: light)'),
		variantParentMatcher('@highContrast', '@media (prefers-contrast: more)'),
		variantParentMatcher('@lowContrast', '@media (prefers-contrast: less)'),
		variantParentMatcher('@portrait', '@media (orientation: portrait)'),
		variantParentMatcher('@landscape', '@media (orientation: landscape)'),
		variantParentMatcher('@HDcolor', '@media (dynamic-range: high)'),
		variantParentMatcher('@touch', '@media (hover: none) and (pointer: coarse)'),
		variantParentMatcher('@stylus', '@media (hover: none) and (pointer: fine)'),
		variantParentMatcher('@pointer', '@media (hover) and (pointer: coarse)'),
		variantParentMatcher('@mouse', '@media (hover) and (pointer: fine)'),

		variantParentMatcher('@xxs-n-below', '@media (width <= 360px)'),
		variantParentMatcher('@xxs', '@media (0 <= width <= 360px)'),
		variantParentMatcher('@xxs-n-above', '@media (width >= 360px)'),
		variantParentMatcher('@xs-n-below', '@media (width <= 480px)'),
		variantParentMatcher('@xs', '@media (240px <= width <= 480px)'),
		variantParentMatcher('@xs-n-above', '@media (width >= 480px)'),
		variantParentMatcher('@sm-n-below', '@media (width <= 768px)'),
		variantParentMatcher('@sm', '@media (480px <= width <= 768px)'),
		variantParentMatcher('@sm-n-above', '@media (width >= 768px)'),
		variantParentMatcher('@md-n-below', '@media (width <= 1024px)'),
		variantParentMatcher('@md', '@media (768px <= width <= 1024px)'),
		variantParentMatcher('@md-n-above', '@media (width >= 1024px)'),
		variantParentMatcher('@lg-n-below', '@media (width <= 1366px)'),
		variantParentMatcher('@lg', '@media (1024px <= width <= 1366px)'),
		variantParentMatcher('@lg-n-above', '@media (width >= 1366px)'),
		variantParentMatcher('@xl-n-below', '@media (width <= 1680px)'),
		variantParentMatcher('@xl', '@media (1366px <= width <= 1680px)'),
		variantParentMatcher('@xl-n-above', '@media (width >= 1680px)'),
		variantParentMatcher('@xxl-n-below', '@media (width <= 1920px)'),
		variantParentMatcher('@xxl', '@media (1680px <= width <= 1920px)'),
		variantParentMatcher('@xxl-n-above', '@media (width >= 1920px)')

	],
	rules: [
		[
			/^\/m:([\d.?-]+)$/,
			(match) => ({ 'margin': `${match[1] / 2}rem` })
		],
		[
			/^\/mt:([\d.?-]+)$/,
			(match) => ({ 'margin-top': `${match[1] / 2}rem` })
		],
		[
			/^\/mr:([\d.?-]+)$/,
			(match) => ({ 'margin-right': `${match[1] / 2}rem` })
		],
		[
			/^\/mb:([\d.?-]+)$/,
			(match) => ({ 'margin-bottom': `${match[1] / 2}rem` })
		],
		[
			/^\/ml:([\d.?-]+)$/,
			(match) => ({ 'margin-left': `${match[1] / 2}rem` })
		],
		[
			/^\/mx:([\d.?-]+)$/,
			(match) => ({ 'margin-left': `${match[1] / 2}rem`, 'margin-right': `${match[1] / 2}rem` })
		],
		[
			/^\/my:([\d.?-]+)$/,
			(match) => ({ 'margin-top': `${match[1] / 2}rem`, 'margin-bottom': `${match[1] / 2}rem` })
		],
		[
			/^\/p:([\d.?-]+)$/,
			(match) => ({ 'padding': `${match[1] / 2}rem` })
		],
		[
			/^\/pt:([\d.?-]+)$/,
			(match) => ({ 'padding-top': `${match[1] / 2}rem` })
		],
		[
			/^\/pr:([\d.?-]+)$/,
			(match) => ({ 'padding-right': `${match[1] / 2}rem` })
		],
		[
			/^\/pb:([\d.?-]+)$/,
			(match) => ({ 'padding-bottom': `${match[1] / 2}rem` })
		],
		[
			/^\/pl:([\d.?-]+)$/,
			(match) => ({ 'padding-left': `${match[1] / 2}rem` })
		],
		[
			/^\/px:([\d.?-]+)$/,
			(match) => ({ 'padding-left': `${match[1] / 2}rem`, 'padding-right': `${match[1] / 2}rem` })
		],
		[
			/^\/py:([\d.?-]+)$/,
			(match) => ({ 'padding-top': `${match[1] / 2}rem`, 'padding-bottom': `${match[1] / 2}rem` })
		],
		[
			/^\/t:([\d.?-]+)$/,
			(match) => ({ 'top': `${match[1] / 2}x` })
		],
		[
			/^\/r:([\d.?-]+)$/,
			(match) => ({ 'right': `${match[1] / 2}x` })
		],
		[
			/^\/b:([\d.?-]+)$/,
			(match) => ({ 'bottom': `${match[1] / 2}x` })
		],
		[
			/^\/l:([\d.?-]+)$/,
			(match) => ({ 'left': `${match[1] / 2}x` })
		],
		[
			/^\/w:([\d.]+)$/,
			(match) => ({ 'width': `${match[1] / 2}rem` })
		],
		[
			/^\/w:full$/,
			() => ({ 'width': '100%' })
		],
		[
			/^\/w:auto$/,
			() => ({ 'width': 'auto' })
		],
		[
			/^\/h:([\d.]+)$/,
			(match) => ({ 'height': `${match[1] / 2}rem` })
		],
		[
			/^\/h:full$/,
			() => ({ 'height': '100%' })
		],
		[
			/^\/h:auto$/,
			() => ({ 'height': 'auto' })
		],
		[
			/^\/color:([\w-]+)$/,
			(match) => ({ 'color': `var(--color-${match[1]})` })
		],
		[
			/^\/bgcolor:([\w-]+)$/,
			(match) => ({ 'background-color': `var(--color-${match[1]})` })
		],
		[
			/^\/op:([\d.]+)$/,
			(match) => ({ 'opacity': match[1] })
		],
		[
			/^\/pos:([\w-]+)$/,
			(match) => ({ 'position': match[1] })
		],
		[
			/^\/dis:([\w-]+)$/,
			(match) => ({ 'display': match[1] })
		],
		[
			/^\/flex:(?<direction>row|column)?\/?(x:(?<x>\w+))?\/?(y:(?<y>\w+))?/,
			(match) => {
				const classes = { 'display': 'flex' };
				if (match.groups.direction) {
					classes['flex-direction'] = match.groups.direction;
				}

				if (match.groups.x) {
					if (match.groups.direction === 'column') {
						classes['align-items'] = flexifyLayoutValue(match.groups.x);
					} else {
						classes['justify-content'] = flexifyLayoutValue(match.groups.x);
					}
				}

				if (match.groups.y) {
					if (match.groups.direction === 'column') {
						classes['justify-content'] = flexifyLayoutValue(match.groups.y);
					} else {
						classes['align-items'] = flexifyLayoutValue(match.groups.y);
					}
				}

				return classes;
			}
		],
		[
			/^\/grid:?(?<columns><([\s\w]+)>)X(?<rows><([\s\w]+)>)\/?(x:(?<x>\w+))?\/?(y:(?<y>\w+))?/,
			(match) => {
				const classes = {
					'display': 'grid',
					'grid-template-columns': match.groups.columns.replaceAll('_', ' ').replaceAll('<', '').replaceAll('>', ''),
					'grid-template-rows': match.groups.rows.replaceAll('_', ' ').replaceAll('<', '').replaceAll('>', '')
				};

				if (match.groups.x) {
					classes['justify-items'] = match.groups.x;
				}
				if (match.groups.y) {
					classes['align-items'] = match.groups.y;
				}
				return classes;
			}
		],
		[
			/^\/order:([\d.]+)/,
			(match) => ({ 'order': match[1] })
		],
		[
			/^\/shrink:([\d.]+)/,
			(match) => ({ 'flex-shrink': match[1] })
		],
		[
			/^\/grow:([\d.]+)/,
			(match) => ({ 'flex-grow': match[1] })
		],
		[
			/^\/gap:([\d.?-]+)$/,
			(match) => ({ 'gap': `${match[1] / 2}rem` })
		],
		[
			/^\/gap-x:([\d.?-]+)$/,
			(match) => ({ 'column-gap': `${match[1] / 2}rem` })
		],
		[
			/^\/gap-y:([\d.?-]+)$/,
			(match) => ({ 'row-gap': `${match[1] / 2}rem` })
		],
		[
			/^\/z:([\w-]+)$/,
			(match) => ({ 'z-index': `var(--zIndex-${match[1]})` })
		],
		[
			/^\/lh:([\d.]+)$/,
			(match) => ({ 'line-height': match[1] })
		],
		[
			/^\/rotate:(\d+)$/,
			(match) => ({
				'rotate': `${match[1]}deg`
			})
		],
		[
			/^\/translate:(<.+>)$/,
			(match) => ({
				'translate': match[1].replaceAll('<', '').replaceAll('>', '').replaceAll('_', ' ')
			})
		],
		[
			/^\/scale:([\d.?]+)$/,
			(match) => ({
				'scale': `${match[1]}`
			})
		],
		[
			/^\/ratio:(<.+>)$/,
			(match) => ({
				'aspect-ratio': match[1].replaceAll('<', '').replaceAll('>', '').replaceAll('X', '/')
			})
		],
		[
			'/type:uppercase', {
				'text-transform': 'uppercase'
			}
		],
		[
			'/type:lowercase', {
				'text-transform': 'lowercase'
			}
		],
		[
			'/type:center', {
				'text-align': 'center'
			}
		],
		[
			'/type:left', {
				'text-align': 'left'
			}
		],
		[
			'/type:right', {
				'text-align': 'right'
			}
		],
		[
			/^\/type:mono-header1-normal:?([\d.]+)?/,
			(match) => ({
				'font-family': 'var(--text-font-family-mono)',
				'font-size': 'calc(2.3rem + (4.2 - 2.3) * ((100vw - 22.5rem) / (120 - 22.5)))',
				'font-weight': '400',
				'line-height': match['1'] || '1',
				'letter-spacing': '-2px',
				'font-feature-settings': "'salt' on, 'ss01' on, 'ss05' on"
			})
		],
		[
			/^\/type:mono-header1-bold:?([\d.]+)?/,
			(match) => ({
				'font-family': 'var(--text-font-family-mono)',
				'font-size': 'calc(2.3rem + (4.2 - 2.3) * ((100vw - 22.5rem) / (120 - 22.5)))',
				'font-weight': '700',
				'line-height': match['1'] || '1',
				'letter-spacing': '-2px',
				'font-feature-settings': "'salt' on, 'ss01' on, 'ss05' on"
			})
		],
		[
			/^\/type:mono-header1-bold-italic:?([\d.]+)?/,
			(match) => ({
				'font-family': 'var(--text-font-family-mono)',
				'font-size': 'calc(2.3rem + (4.2 - 2.3) * ((100vw - 22.5rem) / (120 - 22.5)))',
				'font-weight': '700',
				'line-height': match['1'] || '1',
				'font-style': 'italic',
				'letter-spacing': '-2px',
				'font-feature-settings': "'salt' on, 'ss01' on, 'ss05' on"
			})
		],
		[
			/^\/type:mono-header2-normal:?([\d.]+)?/,
			(match) => ({
				'font-family': 'var(--text-font-family-mono)',
				'font-size': 'calc(1.7rem + (2.6 - 1.7) * ((100vw - 22.5rem) / (120 - 22.5)))',
				'font-weight': '400',
				'line-height': match['1'] || '1',
				'letter-spacing': '-1px',
				'font-feature-settings': "'salt' on, 'ss01' on, 'ss05' on"
			})
		],
		[
			/^\/type:mono-header2-bold:?([\d.]+)?/,
			(match) => ({
				'font-family': 'var(--text-font-family-mono)',
				'font-size': 'calc(1.7rem + (2.6 - 1.7) * ((100vw - 22.5rem) / (120 - 22.5)))',
				'font-weight': '700',
				'line-height': match['1'] || '1',
				'letter-spacing': '-1px',
				'font-feature-settings': "'salt' on, 'ss01' on, 'ss05' on"
			})
		],
		[
			/^\/type:mono-header2-bold-italic:?([\d.]+)?/,
			(match) => ({
				'font-family': 'var(--text-font-family-mono)',
				'font-size': 'calc(1.7rem + (2.6 - 1.7) * ((100vw - 22.5rem) / (120 - 22.5)))',
				'font-weight': '700',
				'line-height': match['1'] || '1',
				'font-style': 'italic',
				'letter-spacing': '-1px',
				'font-feature-settings': "'salt' on, 'ss01' on, 'ss05' on"
			})
		],
		[
			/^\/type:mono-header3-normal:?([\d.]+)?/,
			(match) => ({
				'font-family': 'var(--text-font-family-mono)',
				'font-size': 'calc(1.33rem + (1.6 - 1.33) * ((100vw - 22.5rem) / (120 - 22.5)))',
				'font-weight': '400',
				'line-height': match['1'] || '1',
				'letter-spacing': '-1px',
				'font-feature-settings': "'salt' on, 'ss01' on, 'ss05' on"
			})
		],
		[
			/^\/type:mono-header3-bold:?([\d.]+)?/,
			(match) => ({
				'font-family': 'var(--text-font-family-mono)',
				'font-size': 'calc(1.33rem + (1.6 - 1.33) * ((100vw - 22.5rem) / (120 - 22.5)))',
				'font-weight': '700',
				'line-height': match['1'] || '1',
				'letter-spacing': '-1px',
				'font-feature-settings': "'salt' on, 'ss01' on, 'ss05' on"
			})
		],
		[
			/^\/type:mono-header3-bold-italic:?([\d.]+)?/,
			(match) => ({
				'font-family': 'var(--text-font-family-mono)',
				'font-size': 'calc(1.33rem + (1.6 - 1.33) * ((100vw - 22.5rem) / (120 - 22.5)))',
				'font-weight': '700',
				'line-height': match['1'] || '1',
				'font-style': 'italic',
				'letter-spacing': '-1px',
				'font-feature-settings': "'salt' on, 'ss01' on, 'ss05' on"
			})
		],
		[
			/^\/type:mono-body-normal:?([\d.]+)?/,
			(match) => ({
				'font-family': 'var(--text-font-family-mono)',
				'font-size': '1rem',
				'font-weight': '400',
				'line-height': match['1'] || '1',
				'letter-spacing': '-0.5px',
				'font-feature-settings': "'salt' on, 'ss01' on, 'ss05' on"
			})
		],
		[
			/^\/type:mono-body-bold:?([\d.]+)?/,
			(match) => ({
				'font-family': 'var(--text-font-family-mono)',
				'font-size': '1rem',
				'font-weight': '700',
				'line-height': match['1'] || '1',
				'letter-spacing': '-0.5px',
				'font-feature-settings': "'salt' on, 'ss01' on, 'ss05' on"
			})
		],
		[
			/^\/type:mono-body-bold-italic:?([\d.]+)?/,
			(match) => ({
				'font-family': 'var(--text-font-family-mono)',
				'font-size': '1rem',
				'font-weight': '700',
				'line-height': match['1'] || '1',
				'font-style': 'italic',
				'letter-spacing': '-0.5px',
				'font-feature-settings': "'salt' on, 'ss01' on, 'ss05' on"
			})
		],
		[
			/^\/type:mono-body-heavy:?([\d.]+)?/,
			(match) => ({
				'font-family': 'var(--text-font-family-mono)',
				'font-size': '1rem',
				'font-weight': '900',
				'line-height': match['1'] || '1',
				'letter-spacing': '-0.5px',
				'font-feature-settings': "'salt' on, 'ss01' on, 'ss05' on"
			})
		],
		[
			/^\/type:mono-body-heavy-italic:?([\d.]+)?/,
			(match) => ({
				'font-family': 'var(--text-font-family-mono)',
				'font-size': '1rem',
				'font-weight': '900',
				'line-height': match['1'] || '1',
				'font-style': 'italic',
				'letter-spacing': '-0.5px',
				'font-feature-settings': "'salt' on, 'ss01' on, 'ss05' on"
			})
		],
		[
			/^\/type:mono-caption-normal:?([\d.]+)?/,
			(match) => ({
				'font-family': 'var(--text-font-family-mono)',
				'font-size': '0.9rem',
				'font-weight': '400',
				'line-height': match['1'] || '1',
				'letter-spacing': '-0.25px',
				'font-feature-settings': "'salt' on, 'ss01' on, 'ss05' on"
			})
		],
		[
			/^\/type:mono-caption-bold:?([\d.]+)?/,
			(match) => ({
				'font-family': 'var(--text-font-family-mono)',
				'font-size': '0.9rem',
				'font-weight': '700',
				'line-height': match['1'] || '1',
				'letter-spacing': '-0.25px',
				'font-feature-settings': "'salt' on, 'ss01' on, 'ss05' on"
			})
		],
		[
			/^\/type:mono-caption-bold-italic:?([\d.]+)?/,
			(match) => ({
				'font-family': 'var(--text-font-family-mono)',
				'font-size': '0.9rem',
				'font-weight': '700',
				'line-height': match['1'] || '1',
				'font-style': 'italic',
				'letter-spacing': '-0.25px',
				'font-feature-settings': "'salt' on, 'ss01' on, 'ss05' on"
			})
		],
		[
			/^\/type:mono-caption-heavy:?([\d.]+)?/,
			(match) => ({
				'font-family': 'var(--text-font-family-mono)',
				'font-size': '0.9rem',
				'font-weight': '900',
				'line-height': match['1'] || '1',
				'letter-spacing': '-0.25px',
				'font-feature-settings': "'salt' on, 'ss01' on, 'ss05' on"
			})
		],
		[
			/^\/type:mono-caption-heavy-italic:?([\d.]+)?/,
			(match) => ({
				'font-family': 'var(--text-font-family-mono)',
				'font-size': '0.9rem',
				'font-weight': '900',
				'line-height': match['1'] || '1',
				'font-style': 'italic',
				'letter-spacing': '-0.25px',
				'font-feature-settings': "'salt' on, 'ss01' on, 'ss05' on"
			})
		],
		[
			/^\/type:display-header1-normal:?([\d.]+)?/,
			(match) => ({
				'font-family': 'var(--text-font-family-display)',
				'font-size': 'calc(2.3rem + (4.2 - 2.3) * ((100vw - 22.5rem) / (120 - 22.5)))',
				'font-weight': '400',
				'line-height': match['1'] || '1'
			})
		],
		[
			/^\/type:display-header2-normal:?([\d.]+)?/,
			(match) => ({
				'font-family': 'var(--text-font-family-display)',
				'font-size': 'calc(1.7rem + (2.6 - 1.7) * ((100vw - 22.5rem) / (120 - 22.5)))',
				'font-weight': '400',
				'line-height': match['1'] || '1'
			})
		]
	]
});
