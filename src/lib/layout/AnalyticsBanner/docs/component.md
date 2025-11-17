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

`AnalyticsBanner` can also take props.

```
const analyticsProps = {
    contentTitle: "Weekly deaths dashboard",
    releaseDate: data.dates.current.replaceAll("-", ""),
    nextReleaseDate: data.dates.next.replaceAll("-", ""),
    outputSeries: "weeklyprovisionalfiguresondeathsregisteredinenglandandwales",
    contentType: "dashboard",
  };

<AnalyticsBanner {analyticsProps}/>
```

An example analytics events. See this [doc](https://officenationalstatistics.sharepoint.com/:w:/r/sites/digpub/_layouts/15/Doc.aspx?sourcedoc=%7BBA405554-4040-4B61-9559-851F5C55DA39%7D&file=Google%20Analytics%20-%20GTM%20requirements.docx&action=default&mobileredirect=true) for more details (need to be on network).

```javascript
analyticsEvent({
	event: "interaction",
	interactionType: "accordion",
	interactionValue: e?.detail?.open ? "open" : "close",
	label,
	sectionTitle,
	sectionNumber
});
```
