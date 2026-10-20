import adapter from '@sveltejs/adapter-static';

const config = {
	kit: {
		adapter: adapter(),
		paths: { base: '/svelte-components' }
	}
};

export default config;
