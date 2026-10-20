// Tabs component JS

// The tab js is based on the GDS tabs component(https://design-system.service.gov.uk/components/tabs/)
// https://github.com/alphagov/govuk-frontend/blob/master/src/components/tabs/tabs.js

import { matchMedia } from "../../js/utils.js";

const classTab = "ons-tab";
const classTabTitle = "ons-tabs__title";
const classTabList = "ons-tabs__list";
const classTabListItems = "ons-tab__list-item";
const classTabsPanel = "ons-tabs__panel";
const matchMediaUtil = matchMedia;

/** @typedef {HTMLElement & { boundOnHashChange?: (event: HashChangeEvent) => void }} TabsRoot */

export default class Tabs {
	/** @param {TabsRoot} component */
	constructor(component) {
		this.boundTabClick = this.onTabClick.bind(this);
		this.boundTabKeydown = this.onTabKeydown.bind(this);

		this.component = component;
		this.tabsTitle = /** @type {HTMLElement} */ (component.querySelector(`.${classTabTitle}`));
		this.tabs = /** @type {HTMLAnchorElement[]} */ ([
			...component.getElementsByClassName(classTab)
		]);
		this.tabList = /** @type {HTMLUListElement[]} */ ([
			...component.getElementsByClassName(classTabList)
		]);
		this.tabListContainer = /** @type {HTMLElement} */ (this.tabList[0].parentElement);
		this.tabListItems = /** @type {HTMLLIElement[]} */ ([
			...component.getElementsByClassName(classTabListItems)
		]);
		this.tabPanels = /** @type {HTMLElement[]} */ ([
			...component.getElementsByClassName(classTabsPanel)
		]);

		this.jsHiddenClass = "ons-tabs__panel--hidden";
		this.jsTabListAsRowClass = "ons-tabs__list--row";
		this.jsTabItemAsRowClass = "ons-tab__list-item--row";
		this.jsTabAsListClass = "ons-tab--row";

		this.noInitialActiveTab = this.component.getAttribute("data-no-initial-active-tab");
		if (matchMediaUtil.hasMatchMedia()) {
			this.setupViewportChecks();
		} else {
			this.makeTabs();
		}
	}

	// Set up checks for responsive functionality
	// The tabs will display as tabs up until this.breakpoint is reached
	// Tabs will then display as a table of contents list and show full content for this.breakpoint viewports
	// Aria tags are added only in table of contents view
	setupViewportChecks() {
		const breakpoint = () => {
			let finalBreakpoint = 0;
			this.tabListItems.forEach((tab) => {
				finalBreakpoint += tab.offsetWidth;
			});
			if (finalBreakpoint < 450) {
				return (finalBreakpoint = 450);
			} else {
				return finalBreakpoint;
			}
		};
		this.viewport = matchMediaUtil(`(min-width: ${breakpoint()}px)`);
		if (!this.viewport) return;
		this.viewport.addListener(this.checkViewport.bind(this));
		this.checkViewport();
	}

	checkViewport() {
		if (!this.viewport) return;
		if (this.viewport.matches) {
			this.makeTabs();
		} else {
			this.makeList();
		}
	}

	makeTabs() {
		this.tabList[0].setAttribute("role", "tablist");
		this.tabList[0].classList.add(this.jsTabListAsRowClass);

		this.tabsTitle.classList.add("ons-u-vh");
		this.tabListContainer.classList.add("ons-tabs__container");
		this.tabPanels.forEach((panel) => {
			panel.setAttribute("tabindex", "0");
			const firstChild = panel.firstElementChild;
			if (panel.querySelector('[id*="content-title"]') && firstChild instanceof HTMLElement) {
				firstChild.classList.add("ons-u-vh");
			}
		});

		this.tabListItems.forEach((item) => {
			item.setAttribute("role", "presentation");
			item.classList.add(this.jsTabItemAsRowClass);
		});

		this.tabs.forEach((tab) => {
			this.setAttributes(tab);
			tab.classList.add(this.jsTabAsListClass);

			tab.addEventListener("click", this.boundTabClick, true);
			tab.addEventListener("keydown", this.boundTabKeydown, true);
			this.hideTab(tab);
		});

		const hashTab = this.getTab(window.location.hash);
		if (!this.noInitialActiveTab || !!hashTab) {
			const activeTab = hashTab || this.tabs[0];
			this.showTab(activeTab);
		}

		this.ensureTabIndexExists();

		const boundOnHashChange = this.onHashChange.bind(this);
		this.component.boundOnHashChange = boundOnHashChange;
		window.addEventListener("hashchange", boundOnHashChange, true);
	}

	makeList() {
		this.tabList[0].removeAttribute("role");
		this.tabList[0].classList.remove(this.jsTabListAsRowClass);
		this.tabListContainer.classList.remove("ons-tabs__container");
		this.tabsTitle.classList.remove("ons-u-vh");

		this.tabPanels.forEach((panel) => {
			panel.removeAttribute("tabindex");
			const firstChild = panel.firstElementChild;
			if (firstChild instanceof HTMLElement && firstChild.classList.contains("ons-u-vh")) {
				firstChild.classList.remove("ons-u-vh");
			}
		});

		this.tabListItems.forEach((item) => {
			item.removeAttribute("role");
			item.classList.remove(this.jsTabItemAsRowClass);
		});

		this.tabs.forEach((tab) => {
			tab.removeEventListener("click", this.boundTabClick, true);
			tab.removeEventListener("keydown", this.boundTabKeydown, true);
			tab.classList.remove(this.jsTabAsListClass);
			this.unsetAttributes(tab);
		});

		if (this.component.boundOnHashChange) {
			window.removeEventListener("hashchange", this.component.boundOnHashChange, true);
		}
	}

	// Handle haschange so that the browser can cycle through the tab history
	onHashChange() {
		const hash = window.location.hash;
		const tabWithHash = this.getTab(hash);
		if (!tabWithHash) {
			return;
		}

		if (this.changingHash) {
			this.changingHash = false;
			return;
		}

		const currentTab = this.getCurrentTab();
		if (currentTab) {
			this.hideTab(currentTab);
		}
		this.showTab(tabWithHash);
		tabWithHash.focus();
	}

	/** @param {HTMLAnchorElement} tab */
	hideTab(tab) {
		this.unhighlightTab(tab);
		this.hidePanel(tab);
	}

	/** @param {HTMLAnchorElement} tab */
	showTab(tab) {
		this.highlightTab(tab);
		this.showPanel(tab);
	}

	/** @param {string} hash @returns {HTMLAnchorElement | null} */
	getTab(hash) {
		return /** @type {HTMLAnchorElement | null} */ (
			this.component.querySelector('.ons-tab[href="' + hash + '"]')
		);
	}

	// Set aria tags
	/** @param {HTMLAnchorElement} tab */
	setAttributes(tab) {
		const panelId = this.getHref(tab).slice(1);
		tab.setAttribute("id", "tab_" + panelId);
		tab.setAttribute("role", "tab");
		tab.setAttribute("aria-controls", panelId);
		tab.setAttribute("tabindex", "-1");

		const panel = this.getPanel(tab);
		panel.setAttribute("role", "tabpanel");
		panel.setAttribute("aria-labelledby", tab.id);
		panel.classList.add(this.jsHiddenClass);
	}

	// Remove aria tags for table of contents view
	/** @param {HTMLAnchorElement} tab */
	unsetAttributes(tab) {
		tab.removeAttribute("id");
		tab.removeAttribute("role");
		tab.removeAttribute("aria-controls");
		tab.removeAttribute("tabindex");
		tab.removeAttribute("aria-selected");

		const panel = this.getPanel(tab);
		panel.removeAttribute("role");
		panel.removeAttribute("aria-labelledby");
		panel.classList.remove(this.jsHiddenClass);
	}

	/** @param {MouseEvent | KeyboardEvent} e */
	onTabClick(e) {
		e.preventDefault();
		const newTab = /** @type {HTMLAnchorElement} */ (e.target);
		const currentTab = this.getCurrentTab();

		if (currentTab) {
			this.hideTab(currentTab);
		}

		if (!this.noInitialActiveTab || newTab !== currentTab) {
			this.showTab(newTab);
			this.createHash(newTab);
		}

		this.ensureTabIndexExists();
	}

	ensureTabIndexExists() {
		// Ensure that at least the first tab has a tab index when all tabs are hidden.
		if (!this.tabs.find((tab) => tab.getAttribute("tabindex") === "0")) {
			this.tabs[0].setAttribute("tabindex", "0");
		}
	}

	/** @param {HTMLAnchorElement} tab */
	createHash(tab) {
		const panel = this.getPanel(tab);
		const id = panel.id;
		panel.id = "";
		this.changingHash = true;
		window.location.hash = this.getHref(tab).slice(1);
		panel.id = id;
	}

	/** @param {KeyboardEvent} event */
	onTabKeydown(event) {
		if (event.which === 37) {
			this.focusPreviousTab();
			event.preventDefault();
		} else if (event.which === 39) {
			this.focusNextTab();
			event.preventDefault();
		} else if (event.which === 32) {
			this.onTabClick(event);
		}
	}

	focusNextTab() {
		const focusedTab = this.getFocusedTab();
		const nextTabListItem = focusedTab?.parentElement?.nextElementSibling;
		const nextTab = nextTabListItem?.firstElementChild;
		if (nextTab instanceof HTMLElement) {
			nextTab.focus();
		}
	}

	focusPreviousTab() {
		const focusedTab = this.getFocusedTab();
		const previousTabListItem = focusedTab?.parentElement?.previousElementSibling;
		const previousTab = previousTabListItem?.firstElementChild;
		if (previousTab instanceof HTMLElement) {
			previousTab.focus();
		}
	}

	/** @param {HTMLAnchorElement} tab @returns {HTMLElement} */
	getPanel(tab) {
		const panelSelector = this.getHref(tab).replace(/\./g, "\\.");
		const panel = this.component.querySelector(panelSelector);
		if (!panel) throw new Error(`Tab panel not found for ${panelSelector}`);
		return /** @type {HTMLElement} */ (panel);
	}

	/** @param {HTMLAnchorElement} tab */
	showPanel(tab) {
		const panel = this.getPanel(tab);
		panel.classList.remove(this.jsHiddenClass);
	}

	/** @param {HTMLAnchorElement} tab */
	hidePanel(tab) {
		const panel = this.getPanel(tab);
		panel.classList.add(this.jsHiddenClass);
	}

	/** @param {HTMLAnchorElement} tab */
	unhighlightTab(tab) {
		tab.setAttribute("aria-selected", "false");
		tab.classList.remove("ons-tab--selected");
		tab.setAttribute("tabindex", "-1");
	}

	/** @param {HTMLAnchorElement} tab */
	highlightTab(tab) {
		tab.setAttribute("aria-selected", "true");
		tab.classList.add("ons-tab--selected");
		tab.setAttribute("tabindex", "0");
	}

	getFocusedTab() {
		const activeElement = document.activeElement;
		return activeElement instanceof HTMLElement ? activeElement : null;
	}

	getCurrentTab() {
		return /** @type {HTMLAnchorElement | null} */ (
			this.component.querySelector(".ons-tab--selected")
		);
	}

	/** @param {HTMLAnchorElement} tab @returns {string} */
	getHref(tab) {
		const href = tab.getAttribute("href") || "";
		const hash = href.slice(href.indexOf("#"), href.length);
		return hash;
	}
}
