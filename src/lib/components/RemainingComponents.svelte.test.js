import "@testing-library/jest-dom/vitest";
import { act, fireEvent, render, screen } from "@testing-library/svelte";
import { writable } from "svelte/store";
import { createRawSnippet } from "svelte";
import { expect, test, vi } from "vitest";
import Theme from "./Theme/Theme.svelte";
import Container from "./Container/Container.svelte";
import Main from "./Main/Main.svelte";
import Card from "./Card/Card.svelte";
import Tooltip from "./Tooltip/Tooltip.svelte";
import Hero from "./Hero/Hero.svelte";
import Highlight from "./Highlight/Highlight.svelte";
import Blockquote from "./Blockquote/Blockquote.svelte";
import Indent from "./Indent/Indent.svelte";
import List from "./List/List.svelte";
import Li from "./List/Li.svelte";
import Image from "./Image/Image.svelte";
import DescriptionList from "./DescriptionList/DescriptionList.svelte";
import AnnouncementBanner from "./AnnouncementBanner/AnnouncementBanner.svelte";
import PhaseBanner from "./PhaseBanner/PhaseBanner.svelte";
import ErrorSummary from "./ErrorSummary/ErrorSummary.svelte";
import ErrorPage from "./ErrorPage/ErrorPage.svelte";
import Breadcrumb from "./Breadcrumb/Breadcrumb.svelte";
import Contents from "./Contents/Contents.svelte";
import RelatedContent from "./RelatedContent/RelatedContent.svelte";
import SkipLink from "./SkipLink/SkipLink.svelte";

const popper = vi.hoisted(() => ({ update: vi.fn(), setOptions: vi.fn(), destroy: vi.fn() }));
const createPopper = vi.hoisted(() => {
	/** @type {import("vitest").Mock<(...args: unknown[]) => typeof popper>} */
	const mock = vi.fn(() => popper);
	return mock;
});
vi.mock("@popperjs/core", () => ({ createPopper }));

const children = createRawSnippet(() => ({ render: () => "<p>Wrapped content</p>" }));

test("Theme updates styles and retains children across wrapper modes", async () => {
	const { container, rerender } = render(Theme, {
		theme: "light",
		overrides: { "--ons-color-text": "#123456" },
		children
	});
	expect(container.querySelector(".ons-svelte-theme-wrapper")).toHaveStyle({
		"--ons-color-text": "#123456"
	});
	await rerender({
		theme: "dark",
		overrides: { "--ons-color-text": "#654321" },
		allowClientOverrides: true
	});
	expect(container.querySelector(".client-css-override")).toBeInTheDocument();
	expect(container.querySelector(".ons-svelte-theme-wrapper")).toHaveStyle({
		"--ons-color-text": "#654321"
	});
	await rerender({ theme: null });
	expect(screen.getByText("Wrapped content")).toBeInTheDocument();
	expect(container.querySelector(".ons-svelte-theme-wrapper")).toBeNull();
});

test("Container updates width and height without losing children", async () => {
	const { container, rerender } = render(Container, {
		width: "narrow",
		height: 200,
		id: "wrapper",
		children
	});
	expect(container.querySelector("#wrapper")).toHaveStyle({ height: "200px" });
	expect(container.querySelector(".ons-col-8\\@l")).toBeInTheDocument();
	await rerender({ width: "full", height: "full" });
	expect(container.querySelector("#wrapper")).not.toHaveClass("ons-container");
	expect(container.querySelector("#wrapper")).toHaveStyle({ height: "100vh" });
	expect(screen.getByText("Wrapped content")).toBeInTheDocument();
});

test("Main exposes its ID and children", () => {
	render(Main, { id: "article-main", children });
	expect(screen.getByRole("main")).toHaveAttribute("id", "article-main");
	expect(screen.getByText("Wrapped content")).toBeInTheDocument();
});

test("Card renders named snippets or fallback headings without losing children", async () => {
	const titleContent = createRawSnippet(() => ({ render: () => "<h3>Snippet title</h3>" }));
	const imageContent = createRawSnippet(() => ({ render: () => "<span>Snippet image</span>" }));
	const { rerender } = render(Card, {
		href: "#card",
		title: "Fallback",
		titleContent,
		imageContent,
		children
	});
	expect(screen.getByRole("link")).toHaveTextContent("Snippet title");
	expect(screen.getByText("Snippet image")).toBeInTheDocument();
	await rerender({ titleContent: undefined, imageContent: undefined, headingTag: "h3" });
	expect(screen.getByRole("heading", { name: "Fallback", level: 3 })).toBeInTheDocument();
	expect(screen.getByText("Wrapped content")).toBeInTheDocument();
});

test("Tooltip follows child focus, updates placement, and disposes Popper and listeners", async () => {
	const button = createRawSnippet(() => ({ render: () => "<button>Tooltip trigger</button>" }));
	const { container, rerender, unmount } = render(Tooltip, {
		text: "Help text",
		position: "bottom",
		width: 180,
		children: button
	});
	const reference = container.querySelector(".tooltip-wrapper");
	if (!reference) throw new Error("Tooltip wrapper missing");
	await fireEvent.focusIn(screen.getByRole("button"));
	expect(screen.getByRole("tooltip")).toHaveAttribute("data-show");
	await fireEvent.focusOut(screen.getByRole("button"));
	expect(screen.getByRole("tooltip", { hidden: true })).not.toHaveAttribute("data-show");
	await rerender({ position: "top" });
	expect(popper.destroy).toHaveBeenCalledOnce();
	expect(createPopper.mock.calls.at(-1)?.[2]).toMatchObject({ placement: "top" });
	unmount();
	expect(popper.destroy).toHaveBeenCalledTimes(2);
	popper.update.mockClear();
	await fireEvent.mouseEnter(reference);
	expect(popper.update).not.toHaveBeenCalled();
});

test.each([
	{ name: "Highlight", mount: () => render(Highlight, { children }) },
	{ name: "Blockquote", mount: () => render(Blockquote, { children, attribution: "ONS" }) },
	{ name: "Indent", mount: () => render(Indent, { children }) },
	{ name: "List", mount: () => render(List, { children }) },
	{ name: "Li", mount: () => render(Li, { children }) },
	{ name: "ErrorSummary", mount: () => render(ErrorSummary, { children }) }
])("$name renders child snippets", ({ mount }) => {
	mount();
	expect(screen.getByText("Wrapped content")).toBeInTheDocument();
});

test("Hero renders before, children and after snippets and updates its title", async () => {
	const before = createRawSnippet(() => ({ render: () => "<p>Before Hero</p>" }));
	const after = createRawSnippet(() => ({ render: () => "<p>After Hero</p>" }));
	const { rerender } = render(Hero, { title: "First title", before, after, children });
	expect(screen.getByText("Before Hero")).toBeInTheDocument();
	expect(screen.getByText("After Hero")).toBeInTheDocument();
	await rerender({ title: "New title", lede: "New introduction" });
	expect(screen.getByRole("heading", { name: "New title", level: 1 })).toBeInTheDocument();
	expect(screen.getByText("Wrapped content")).toBeInTheDocument();
});

test("Image updates alt text and source", async () => {
	const { rerender } = render(Image, { src: "/first.png", alt: "First image", caption: "Caption" });
	await rerender({ src: "/second.png", alt: "Second image" });
	expect(screen.getByRole("img", { name: "Second image" })).toHaveAttribute("src", "/second.png");
	expect(screen.getByText("Caption")).toBeInTheDocument();
});

test("DescriptionList renders multi-value data and updates metadata", async () => {
	const { rerender } = render(DescriptionList, {
		items: [{ key: "Area", value: ["England", "Wales"] }]
	});
	expect(screen.getByText("England")).toBeInTheDocument();
	await rerender({ items: [{ key: "Release", value: "2026" }] });
	expect(screen.getByText("2026")).toBeInTheDocument();
	expect(screen.queryByText("England")).not.toBeInTheDocument();
	await rerender({ items: [{ key: "Count", value: 0 }] });
	expect(screen.getByText("0")).toBeInTheDocument();
});

test("AnnouncementBanner and PhaseBanner preserve their content and links", () => {
	render(AnnouncementBanner, {
		title: "Announcement",
		description: "Release details",
		linkHref: "#release",
		linkText: "Read release"
	});
	render(PhaseBanner, { phase: "Beta", href: "#feedback" });
	expect(screen.getByRole("link", { name: "Read release" })).toHaveAttribute("href", "#release");
	expect(screen.getByText("Beta")).toBeInTheDocument();
});

test("ErrorPage derives from changing page state while explicit props take precedence", async () => {
	const { rerender } = render(ErrorPage, { page: { status: 404 } });
	expect(screen.getByRole("heading", { name: "Page not found" })).toBeInTheDocument();
	await rerender({ page: { status: 500, error: { message: "Service unavailable" } } });
	expect(screen.getByRole("heading", { name: "Service unavailable" })).toBeInTheDocument();
	await rerender({ message: "Explicit message" });
	expect(screen.getByRole("heading", { name: "Explicit message" })).toBeInTheDocument();
});

test("RelatedContent updates inferred sections when links change", async () => {
	const { rerender } = render(RelatedContent, {
		title: "Related statistics",
		links: [{ title: "First link", href: "#first" }]
	});
	await rerender({
		title: "Updated statistics",
		links: [{ title: "Second link", href: "#second" }]
	});
	expect(screen.getByRole("heading", { name: "Updated statistics" })).toBeInTheDocument();
	expect(screen.getByRole("link", { name: "Second link" })).toHaveAttribute("href", "#second");
	expect(screen.queryByRole("link", { name: "First link" })).not.toBeInTheDocument();
});

test("Breadcrumb, Contents and SkipLink retain navigation destinations", () => {
	render(Breadcrumb, { links: [{ label: "Home", href: "#home" }, { label: "Current page" }] });
	render(Contents, { links: [{ label: "Section one", href: "#one" }], skipHref: "#article-main" });
	render(SkipLink, { href: "#article-main" });
	expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("href", "#home");
	expect(screen.getByRole("link", { name: "Skip to guide content" })).toHaveAttribute(
		"href",
		"#article-main"
	);
	expect(screen.getByRole("link", { name: "Section one" })).toHaveAttribute("href", "#one");
});

test("ErrorPage also follows its documented page-store input", async () => {
	const page = writable({ status: 404, error: { message: "Missing page" } });
	render(ErrorPage, { page });
	await act(() => page.set({ status: 500, error: { message: "Store updated" } }));
	expect(screen.getByRole("heading", { name: "Store updated" })).toBeInTheDocument();
});
