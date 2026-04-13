This banner is used to highlight important messages for all users of a service or website. The banner is only meant for critical short-term messages, and should be placed immediately below the website navigation header (and above the breadcrumb).

Based on [this design system component](https://service-manual.ons.gov.uk/design-system/components/announcement-banner).

<!-- prettier-ignore -->
```html
<script>
  import { AnnouncementBanner } from "@onsvisual/svelte-components";
</script>

<AnnouncementBanner
  title="Important service announcement"
  description="This is a website-wide service announcement"
  linkHref="https://example.com"
  linkText="More information"/>
```
