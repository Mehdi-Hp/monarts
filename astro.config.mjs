import { defineConfig } from 'astro/config';
import unocss from 'unocss/astro';
import netlify from '@astrojs/netlify/functions';
import alpinejs from "@astrojs/alpinejs";
import { unocssConfig } from './uno.config.js';


export default defineConfig({
	output: 'server',
	integrations: [
		unocss(unocssConfig),
		alpinejs()
	],
	vite: {},
	adapter: netlify()
});
