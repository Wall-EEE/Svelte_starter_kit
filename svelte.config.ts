import sveltePreprocess from 'svelte-preprocess'
import vercel from '@sveltejs/adapter-vercel';
// import node from '@sveltejs/adapter-node'
// import adapterStatic from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
export default {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		sveltePreprocess({
			defaults: {
				style: 'postcss'
			},
			postcss: true
		})
	],
	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
        adapter: vercel(),
		// adapter: adapterStatic({
        //     pages: 'build',
        //     assets: 'build',
        //     fallback: null
        // }),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
	}
};