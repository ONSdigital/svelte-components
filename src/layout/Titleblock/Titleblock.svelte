<script>
  import { contrastColor } from "../../js/utils";
  import Container from "../../wrappers/Container/Container.svelte";
  import Meta from "./Meta.svelte";

  /**
   * Sets the title/headline
   * @type {string}
   */
  export let title = "Page title";
  /**
   * Include "national statistic" badge
   * @type {boolean}
   */
  export let natStatBadge = false;
  /**
   * Include Census logo
   * @type {boolean}
   */
  export let censusLogo = false;
  /**
   * Array of {key, value} objects containing page metadata
   * @type {array}
   */
  export let meta = null;
  /**
   * Sets a predefined theme
   * @type {"light"|"dark"|"lightblue"}
   */
  export let theme = null;
  /**
   * Define additional props to override the base theme
   * @type {object}
   */
  export let themeOverrides = null;
  /**
   * Overrides the background CSS for the section
   * @type {string}
   */
  export let background = null;
  /**
   * Allows client imported CSS for embeddable content
   * @type {boolean}
   */
  export let allowClientOverrides = false;
  /**
   * Optional badge to show next to the title
   * @type {string}
   */
  export let titleBadge = null;
  /**
   * Aria-label for the optional badge to show next to the title
   * @type {string}
   */
  export let titleBadgeAriaLabel = null;
  /**
   * Set a colour for the title badge
   * @type {string}
   */
  export let titleBadgeColor = "#003C57";
  /**
   * Set a width for the container
   * @type {"narrow"|"medium"|"wide"|"wider"|"full"}
   */
  export let width = "wide";

  $: titleBadgeTextColor = contrastColor(titleBadgeColor);
</script>

<Container
  theme="{theme}"
  themeOverrides="{themeOverrides}"
  allowClientOverrides="{allowClientOverrides}"
  background="{background}"
  width="{width}"
>
  <section class="ons-u-mb-xl">
    <slot name="before" />
    <div class="ons-grid">
      <div class="ons-grid__col ons-col-10@m">
        <div class="title-container">
          <h1 class="ons-u-fs-xxxl ons-u-mt-s ons-u-mb-m ons-u-pb-no ons-u-pt-no">
            {#if titleBadge}
              <span style="margin-right: 6px">{@html title}</span>
              <span
                class="title-badge"
                aria-label="{titleBadgeAriaLabel ?? titleBadge}"
                style:background="{titleBadgeColor}"
                style:color="{titleBadgeTextColor}">{titleBadge}</span
              >
            {:else}
              {@html title}
            {/if}
          </h1>
        </div>
      </div>
      {#if natStatBadge}
        <div class="ons-grid__col ons-col-2@m">
          <div
            class="ons-grid--flex ons-grid--between@m ons-u-mt-s@m ons-u-mb-m@xxs ons-u-flex-jc-fe@m"
          >
            <a
              href="https://uksa.statisticsauthority.gov.uk/about-the-authority/uk-statistical-system/types-of-official-statistics/"
              class="national-statistics__link ons-u-fs-xxxl"
            >
              <img
                src="//cdn.ons.gov.uk/assets/images/ons-logo/kitemark/uksa-kitemark.svg"
                alt="UK Statistics Authority Kitemark"
                class="national-statistics__logo"
              />
            </a>
          </div>
        </div>
      {/if}
    </div>
    <slot />
    <slot name="brand" />
    {#if censusLogo}
      <div class="ons-grid ons-u-mb-m">
        <div class="ons-grid__col">
          <img
            src="https://cdn.ons.gov.uk/assets/images/census-logo/logo-census-2021-purple-landscape.svg"
            title="Census 2021"
            alt="Census 2021"
            class="header__svg-logo margin-right--1"
            width="167"
            height="32"
          />
        </div>
      </div>
    {/if}
    <Meta meta="{meta}" />
    <slot name="after" />
  </section>
</Container>

<style>
  /* :global(.ons-page__container) {
		overflow: auto;
	} */
  .ons-grid__col {
    vertical-align: bottom;
  }

  .title-badge {
    vertical-align: 6px;
    white-space: nowrap;
    font-size: 40%;
    font-weight: bold;
    color: white;
    padding: 2px 8px 4px 8px;
    border-radius: 4px;
  }
</style>
