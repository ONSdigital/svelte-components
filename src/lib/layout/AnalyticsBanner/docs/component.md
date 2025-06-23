This component will display a cookie banner and export a function that allows you to push events to the Google Analytics dataLayer array.

<!-- prettier-ignore -->
```html
<script>
  import { AnalyticsBanner, AnalyticsEvent } from "@onsvisual/svelte-components";

  // Example of an analytics event triggered by another event "e"
  function doAnalyticsEvent(e) {
    // Assumes that e.detail is in the form {key1: "value1", key2: "value2", etc}
    AnalyticsEvent({event: "eventName", ...e.detail});
  }
</script>

<AnalyticsBanner analyticsId="{id_string}" />
<!-- Rest of page content -->
```
