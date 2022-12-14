import { defineConfig } from 'astro/config';
import unocss from 'unocss/astro';
import image from '@astrojs/image';
import netlify from '@astrojs/netlify/functions';
import { unocssConfig } from './uno.config.js';


export default defineConfig({
	output: 'server',
	integrations: [
		unocss(unocssConfig),
		image({
			serviceEntryPoint: '@astrojs/image/sharp'
		})
	],
	vite: {},
	adapter: netlify()
});
