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
					"Inputs",
					"Decorators",
					"Data visualisation",
					"*"
				]
			}
		}
	}
};

export default preview;
