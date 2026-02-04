A component to display a linear record of past and future events.

Based on [this ONS Design System component](https://service-manual.ons.gov.uk/design-system/components/timeline).

<!-- prettier-ignore -->
```html
<script>
  import { Timeline } from "@onsvisual/svelte-components";

  const items = [
    {
      title: "November 2020",
      content: "ONS to provide you with content for magazines and publications"
    },
    {
      title: "January to March 2021",
      content: "ONS to provide a range of press releases for external use"
    },
    {
      title: "February to April 2021",
      content: "Promote your local Census Support Centres"
    }
  ];
</script>

<Timeline {items}>
```

## Examples

### Individually defined timeline items

In this example, the timeline items are defined explicitly.

<!-- prettier-ignore -->
```html
<script>
  import { Timeline, TimelineItem } from "@onsvisual/svelte-components";
</script>

<Timeline>
  <TimelineItem title="November 2020">
    <p>ONS to provide you with content for magazines and publications</p>
  </TimelineItem>
  <TimelineItem title="January to March 2021">
    <p>ONS to provide a range of press releases for external use</p>
  </TimelineItem>
  <TimelineItem title="February to April 2021">
    <p>Promote your local Census Support Centres</p>
  </TimelineItem>
</Timeline>
```
