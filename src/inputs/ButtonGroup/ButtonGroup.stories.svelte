<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";
  import ButtonGroup from "./ButtonGroup.svelte";
  import ButtonGroupItem from "./ButtonGroupItem.svelte";
  import { withComponentDocs } from "../../js/withParams.js";

  let selectedValue;
</script>

<Meta
  title="Inputs/ButtonGroup"
  component="{ButtonGroup}"
  argTypes="{{}}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <ButtonGroup bind:value="{selectedValue}" {...args}>
    <ButtonGroupItem value="1" label="Option 1" />
    <ButtonGroupItem value="2" label="Option 2" />
    <ButtonGroupItem value="3" label="Option 3" />
  </ButtonGroup>
</Template>

<Story name="Default" args="{{ name: 'primary', legend: 'Choose an option' }}" />

<Story
  name="With initial value"
  args="{{ name: 'primary', legend: 'Choose an option', value: '2' }}"
/>

<Story name="With bound variable">
  <ButtonGroup bind:value="{selectedValue}" name="primary" legend="Choose an option">
    <ButtonGroupItem value="1" label="Option 1" />
    <ButtonGroupItem value="2" label="Option 2" />
    <ButtonGroupItem value="3" label="Option 3" />
  </ButtonGroup>
  <p>Selected value:{selectedValue}</p>
</Story>

<Story
  name="Visually hide legend"
  args="{{ name: 'primary', legend: 'Choose an option', visuallyHideLegend: true }}"
/>
