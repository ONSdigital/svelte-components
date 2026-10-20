import { cpSync, existsSync, writeFileSync } from 'node:fs';

const storybookIndex = 'storybook-static/index.html';
const workbenchPage = 'build/workbench/index.html';

if (!existsSync(storybookIndex)) {
	throw new Error('Build Storybook before staging the component workbench.');
}

if (!existsSync(workbenchPage)) {
	throw new Error('Build the SvelteKit workbench before staging it.');
}

cpSync('build/workbench', 'storybook-static/workbench', { recursive: true });
cpSync('build/_app', 'storybook-static/_app', { recursive: true });
cpSync('build/favicon.png', 'storybook-static/favicon.png');
writeFileSync('storybook-static/.nojekyll', '');

console.log('Staged the component workbench alongside Storybook.');