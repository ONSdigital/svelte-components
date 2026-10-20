/** @typedef {import("./details.js").default} AccordionDetails */

export default class Accordion {
	/** @param {HTMLButtonElement} button @param {AccordionDetails[]} detailsEls */
	constructor(button, detailsEls) {
		this.openDetailsEls = 0;

		this.button = button;
		const buttonInner = button.querySelector(".ons-accordion__toggle-all-inner");
		if (!buttonInner) throw new Error("Accordion is missing its show-all button content.");
		this.buttonInner = buttonInner;
		this.group = button.getAttribute("data-group");
		this.detailsEls = detailsEls.filter((details) => details.group === this.group);
		this.totalDetailsEls = this.detailsEls.length;
		const buttonOpenEl = this.buttonInner.querySelector(".ons-btn__text");
		if (!buttonOpenEl) throw new Error("Accordion is missing its show-all button label.");
		this.buttonOpenEl = buttonOpenEl;
		this.buttonOpen = this.buttonOpenEl.innerHTML.trim();
		this.closeButton = button.getAttribute("data-close-all") || "Hide all";
		this.open = this.detailsEls.find((details) => details.open === true);

		this.detailsEls.forEach((details) => {
			details.onOpen = this.onOpen.bind(this);
			details.onClose = this.onClose.bind(this);
		});

		if (this.open) {
			this.openDetailsEls = this.totalDetailsEls;
		}

		this.button.addEventListener("click", this.handleButtonClick.bind(this));
		this.setButton();
		this.button.classList.remove("ons-u-d-no");
	}

	/** @param {MouseEvent} event */
	handleButtonClick(event) {
		event.preventDefault();

		const open = !this.canClose();

		this.detailsEls.forEach((details) => {
			details.setOpen(open);
		});
	}

	onOpen() {
		this.openDetailsEls++;
		this.setButton();
	}

	onClose() {
		this.openDetailsEls--;
		this.setButton();
	}

	canClose() {
		return this.openDetailsEls === this.totalDetailsEls;
	}

	setButton() {
		if (this.canClose()) {
			this.buttonInner.innerHTML = this.closeButton;
			this.button.setAttribute("data-ga-label", this.buttonOpen);
			this.button.setAttribute("aria-expanded", "true");
		} else {
			this.buttonInner.innerHTML = this.buttonOpen;
			this.button.setAttribute("data-ga-label", this.closeButton);
			this.button.setAttribute("aria-expanded", "false");
		}
	}
}
