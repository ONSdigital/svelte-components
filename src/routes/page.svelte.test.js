import { describe, test, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/svelte';
import Page from './+page.svelte';

describe('/+page.svelte', () => {
	test('renders the library page heading', () => {
		render(Page);
		expect(screen.getByRole('heading', { level: 1, name: 'Welcome to the ONS Svelte components library.' })).toBeInTheDocument();
	});
});
