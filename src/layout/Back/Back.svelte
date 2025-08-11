<script>
  /**
   * URL for previous page
   * @type {string}
   */
  export let href = "#0";
</script>

<nav class="ons-breadcrumb" aria-label="Back">
  <ol class="ons-breadcrumb__items ons-u-fs-s">
    <li class="ons-breadcrumb__item" id="breadcrumb-1">
      <a class="ons-breadcrumb__link" href="{href}" id="back">Back</a>
      <svg
        class="ons-svg-icon"
        viewBox="0 0 8 13"
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
        fill="currentColor"
      >
        <path
          d="M5.74,14.28l-.57-.56a.5.5,0,0,1,0-.71h0l5-5-5-5a.5.5,0,0,1,0-.71h0l.57-.56a.5.5,0,0,1,.71,0h0l5.93,5.93a.5.5,0,0,1,0,.7L6.45,14.28a.5.5,0,0,1-.71,0Z"
          transform="translate(-5.02 -1.59)"></path>
      </svg>
    </li>
  </ol>
</nav>

<style>
  .ons-svg-icon {
    color: currentColor;
    fill: currentColor;
  }
</style>
