<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";
  import Backlink from "./Back.svelte";
  import { withComponentDocs } from "../../js/withParams.js";
</script>

<Meta
  title="Layout/Backlink"
  component="{Backlink}"
  argTypes="{{}}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <div style:padding="12px">
    <Backlink {...args} />
  </div>
</Template>

<Story name="Default" args="{{ href: '#0' }}" />
