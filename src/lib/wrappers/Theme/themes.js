const light = {
	// Text
	"--ons-color-text": "--ons-color-black",
	"--ons-color-text-light": "--ons-color-grey-75",
	"--ons-color-text-link": "--ons-color-ocean-blue",
	"--ons-color-text-link-hover": "--ons-color-night-blue",
	"--ons-color-text-link-active": "--ons-color-night-blue",
	"--ons-color-text-link-focus": "--ons-color-black",
	"--ons-color-text-inverse": "--ons-color-white",
	"--ons-color-text-inverse-link": "--ons-color-white",
	"--ons-color-text-inverse-link-hover": "--ons-color-grey-5",
	"--ons-color-text-banner-link": "--ons-color-grey-100",
	"--ons-color-text-banner-link-hover": "--ons-color-black",
	"--ons-color-text-metadata": "--ons-color-black",

	// Background
	"--ons-color-page-light": "--ons-color-white",
	"--ons-color-input-bg": "--ons-color-white",
	"--ons-color-hero-bg": "--ons-color-branded-tint",
	"--ons-color-hero-bg-dark": "--ons-color-branded",
	"--ons-color-banner-bg": "--ons-color-grey-5",
	"--ons-color-banner-bg-dark": "--ons-color-grey-15",
	"--ons-color-banner-browser-bg:": "--ons-color-black",

	// Other
	"--ons-color-focus": "--ons-color-sun-yellow",
	"--ons-color-focus-dark": "--ons-color-sun-yellow-dark",
	"--ons-color-highlight": "--ons-color-neon-yellow",
	"--ons-color-borders": "--ons-color-grey-35",
	"--ons-color-borders-indent": "--ons-color-grey-35",
	"--ons-color-borders-light": "--ons-color-grey-35"
};
const dark = {
	// Text
	"--ons-color-text": "--ons-color-white",
	"--ons-color-text-light": "--ons-color-grey-35",
	"--ons-color-text-link": "--ons-color-white",
	"--ons-color-text-link-hover": "--ons-color-grey-5",
	"--ons-color-text-link-active": "--ons-color-grey-5",
	"--ons-color-text-link-focus": "--ons-color-black",
	"--ons-color-text-inverse": "--ons-color-black",
	"--ons-color-text-inverse-link": "--ons-color-ocean-blue",
	"--ons-color-text-inverse-link-hover": "--ons-color-night-blue",
	"--ons-color-text-banner-link": "--ons-color-grey-5",
	"--ons-color-text-banner-link-hover": "--ons-color-white",
	"--ons-color-text-metadata": "--ons-color-white",

	// Background
	"--ons-color-page-light": "--ons-color-black",
	"--ons-color-input-bg": "--ons-color-white",
	"--ons-color-hero-bg": "--ons-color-branded-tint",
	"--ons-color-hero-bg-dark": "--ons-color-branded",
	"--ons-color-banner-bg": "--ons-color-grey-100",
	"--ons-color-banner-bg-dark": "--ons-color-grey-75",
	"--ons-color-banner-browser-bg:": "--ons-color-white",

	// Other
	"--ons-color-focus": "--ons-color-sun-yellow",
	"--ons-color-focus-dark": "--ons-color-sun-yellow-dark",
	"--ons-color-highlight": "--ons-color-neon-yellow",
	"--ons-color-borders": "--ons-color-grey-75",
	"--ons-color-borders-indent": "--ons-color-grey-75",
	"--ons-color-borders-light": "--ons-color-grey-75"
};
const paleblue = { ...light, "--ons-color-page-light": "--ons-color-ocean-blue-tint" };
const blue = { ...dark, "--ons-color-page-light": "--ons-color-ocean-blue" };
const navyblue = { ...dark, "--ons-color-page-light": "--ons-color-night-blue" };
const grey = { ...light, "--ons-color-page-light": "--ons-color-grey-5" };

export default { light, dark, paleblue, blue, navyblue, grey };
