import parse from "parse-color";

const randomString = () => {
	return Math.random().toString(16).slice(2, 8);
};

export const slugify = (str, suffix = false) =>
	typeof str === "string"
		? str
				.toString()
				.normalize("NFD")
				.replace(/[\u0300-\u036f]/g, "")
				.toLowerCase()
				.trim()
				.replace(/\s+/g, "-")
				.replace(/[^\w-]+/g, "")
				.replace(/--+/g, "-")
				.concat(suffix ? `-${randomString()}` : "")
		: randomString();

export const isNumeric = (val) => isFinite(val) && val !== null;

export const validDate = (str) => {
	if (!str) return false;
	const date = new Date(str);
	// @ts-ignore
	return !isNaN(date);
};

export const formatDate = (
	str,
	locale = "en-GB",
	opts = { year: "numeric", month: "long", day: "2-digit" }
) => {
	const date = new Date(str);
	// @ts-ignore
	return date.toLocaleDateString(locale, opts);
};

export const format = (val, dp = null) => {
	return Number.isInteger(dp)
		? val.toLocaleString("en-GB", {
				minimumFractionDigits: dp,
				maximumFractionDigits: dp
			})
		: val.toLocaleString("en-GB");
};

export const formatter = (dp = null) => {
	return Number.isInteger(dp)
		? new Intl.NumberFormat("en-GB", {
				minimumFractionDigits: dp,
				maximumFractionDigits: dp
			}).format
		: new Intl.NumberFormat("en-GB").format;
};

export const ascending = (a, b) =>
	a == null || b == null ? NaN : a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;

export const descending = (a, b) =>
	a == null || b == null ? NaN : b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;

export const sleep = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

export const contrastColor = (color) => {
	if (!color || typeof color !== "string") return "black";
	const rgb = parse(color).rgb;
	if (rgb) {
		const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
		return brightness > 125 ? "black" : "white";
	}
	return "black";
};

export const lipsum = (sentences = 4, offset = 0) => {
	const texts = [
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
		"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	];
	const passage = [];
	for (let i = 0; i < sentences; i++) {
		passage.push(texts[(i + offset) % 4]);
	}
	return passage.join(" ");
};

export const matchMedia = (query) => window.matchMedia(query);
matchMedia.hasMatchMedia = () => typeof window.matchMedia === "function";
