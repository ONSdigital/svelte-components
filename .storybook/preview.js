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
		},

		a11y: {
			// 'todo' - show a11y violations in the test UI only
			// 'error' - fail CI on a11y violations
			// 'off' - skip a11y checks entirely
			test: "todo"
		}
	}
};

export default preview;
