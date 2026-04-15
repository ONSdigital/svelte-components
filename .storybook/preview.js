import "../src/lib/css/main.css";

/** @type { import('@storybook/sveltekit').Preview } */
const preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},
		options: {
			storySort: {
				order: [
					"Introduction",
					"Templates",
					"Wrappers",
					"Layout",
					"Navigation",
					"Form elements",
					"Information and media",
					"Decorators",
					"Charts",
					"*"
				]
			}
		}
	}
};

export default preview;
