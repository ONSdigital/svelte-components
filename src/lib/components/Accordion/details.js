/** @typedef {{ id: string; open: boolean }} DetailsToggle */
/** @typedef {(data: DetailsToggle) => void} DetailsCallback */

export default class Details {
	/** @type {(() => void) | undefined} */
	onOpen;
	/** @type {(() => void) | undefined} */
	onClose;

	/** @param {HTMLElement} detailsElement @param {DetailsCallback | null} [callback=null] */
	constructor(detailsElement, callback = null) {
		this.saveState = detailsElement.getAttribute("data-save-state") === "true";
		this.open = detailsElement.getAttribute("data-open") === "true";
		this.group = detailsElement.getAttribute("data-group");

		// Elements
		this.details = detailsElement;
		const detailsHeader = this.details.querySelector(".ons-js-details-heading");
		const content = this.details.querySelector(".ons-js-details-content");
		if (!detailsHeader || !content) {
			throw new Error("Accordion item is missing its heading or content element.");
		}
		this.detailsHeader = /** @type {HTMLElement} */ (detailsHeader);
		this.content = /** @type {HTMLElement} */ (content);
		this.detailsTitle = this.details.querySelector(".ons-js-corrections-details-title");

		// Initialise
		this.detailsId = detailsElement.getAttribute("id") || "";
		this.callback = callback;

		this.details.setAttribute("role", "group");
		this.detailsHeader.setAttribute("role", "link");
		this.detailsHeader.setAttribute("aria-controls", this.detailsId);
		this.detailsHeader.setAttribute("tabindex", "0");
		/** @type {boolean} */
		this.isOpen = false;

		if (localStorage.getItem(this.detailsId) || this.open) {
			this.setOpen(true);
		} else {
			this.setOpen(false);
		}

		this.detailsHeader.addEventListener("click", this.toggle.bind(this));
		this.detailsHeader.addEventListener("keydown", this.keyboardInteraction.bind(this));
		this.details.classList.add("ons-details--initialised");
	}

	/** @param {Event} event */
	toggle(event) {
		event.preventDefault();
		this.setOpen(!this.isOpen);

		if (typeof this.callback === "function")
			this.callback({ id: this.detailsId, open: this.isOpen });
	}

	/** @param {boolean} open */
	setOpen(open) {
		if (open !== this.isOpen) {
			const action = open ? "Open" : "Close";
			const cls = open ? "add" : "remove";
			const openAttribute = open ? "set" : "remove";
			const setText = open ? "Close detail" : "Show detail";

			this.isOpen = open;
			this.details[`${openAttribute}Attribute`]("open", "");
			this.details.classList[cls]("ons-details--open");
			this.detailsHeader.setAttribute("aria-expanded", String(open));
			this.content.setAttribute("aria-hidden", String(!open));
			this.detailsHeader.setAttribute("data-ga-action", `${action} panel`);
			if (this.detailsTitle) {
				this.detailsTitle.textContent = setText;
			}

			if (this.onOpen && this.onClose) {
				if (open) {
					this.onOpen();
				} else {
					this.onClose();
				}
			}
		}

		if (this.saveState === true && open === true) {
			localStorage.setItem(this.details.getAttribute("id") || "", "true");
		} else {
			localStorage.removeItem(this.details.getAttribute("id") || "");
		}
	}

	/** @param {KeyboardEvent} event */
	keyboardInteraction(event) {
		const keyCode = event.which;
		switch (keyCode) {
			// Enter/Space
			case 13:
			case 32:
				event.preventDefault();
				event.stopPropagation();

				this.toggle(event);
				break;
		}
	}
}
