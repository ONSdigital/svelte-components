import{ad as v,h as f,n as b,ah as a,a as c,af as _,f as d,ax as I,c as x}from"./iframe-f67rGsxv.js";import{c as y,w,i as C,d as k}from"./create-runtime-stories-Ua86Psvv.js";import{I as g}from"./Input-BgNffEnL.js";import{s as D}from"./style-CYmCgZEu.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-jbjqwhbX.js";import"./class-8kYv-OY_.js";import"./attributes-DayBpKoh.js";import"./input-B9QQkB2o.js";const W=`A standard \`<input>\` element with Svelte bindings and events.

In Svelte 5, callbacks \`onInput\`, \`onChange\`, and \`onBlur\` receive \`{ value, e }\`, where \`e\` is the native event. Existing dispatched events remain available with the same object on \`event.detail\`.

\`\`\`svelte
<script>
	import { Input } from "@onsvisual/svelte-components";

	let value = $state(null);
	const search = (query) => console.log(query);
<\/script>

<Input bind:value onInput={({ value }) => search(value)} />
\`\`\`

## Basic Usage

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Input } from "@onsvisual/svelte-components";

  // Bind the <input> value to a variable (start it as null, not undefined)
  let value = $state(null);

  // Define your own function on change
  const handleChange = ({ value }) => console.log(value);
<\/script>

<Input bind:value onChange={handleChange} />
\`\`\`

## Using with Autocomplete/Lookup Functions

The Input component can be paired with a lookup function to provide autocomplete functionality or data enrichment. Here are common patterns:

### Postcode Lookup Example

Use the \`onInput\`, \`onChange\` or \`onBlur\` callbacks to trigger async lookups (e.g., postcode validation/enrichment via postcodes.io):

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Input } from "@onsvisual/svelte-components";

  let postcode = $state("");
  let postcodeData = $state(null);
  let isLoading = $state(false);

  // Function to lookup postcode data
  const lookupPostcode = async (inputValue) => {
    if (!inputValue || inputValue.length < 2) return;
    
    isLoading = true;
    try {
      const response = await fetch(\`https://api.postcodes.io/postcodes/\${encodeURIComponent(inputValue)}\`);
      const data = await response.json();
      
      if (data.result) {
        postcodeData = data.result;
      }
    } catch (error) {
      console.error("Postcode lookup failed:", error);
    } finally {
      isLoading = false;
    }
  };

  // Trigger lookup when the input changes (on blur)
  const handleChange = ({ value }) => {
    lookupPostcode(value);
  };
<\/script>

<Input 
  id="postcode"
  label="Enter postcode"
  bind:value={postcode}
  placeholder="e.g., SW1A 1AA"
  onChange={handleChange}
/>

{#if isLoading}
  <p>Looking up postcode...</p>
{/if}

{#if postcodeData}
  <div>
    <p><strong>Area:</strong> {postcodeData.admin_district}</p>
    <p><strong>Region:</strong> {postcodeData.region}</p>
    <p><strong>Country:</strong> {postcodeData.country}</p>
  </div>
{/if}
\`\`\`

### Debounced Input with Autocomplete Suggestions

For real-time autocomplete without overwhelming API calls, use a debounce function:

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Input } from "@onsvisual/svelte-components";

  let searchValue = $state("");
  let suggestions = $state([]);
  let debounceTimer;

  // Generic autocomplete lookup function
  const fetchSuggestions = async (query) => {
    if (!query || query.length < 2) {
      suggestions = [];
      return;
    }

    try {
      const response = await fetch(\`/api/search?q=\${encodeURIComponent(query)}\`);
      const data = await response.json();
      suggestions = data.results || [];
    } catch (error) {
      console.error("Autocomplete fetch failed:", error);
    }
  };

  // Debounced handler to avoid excessive API calls
  const handleInput = ({ value }) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      fetchSuggestions(value);
    }, 300); // Wait 300ms after user stops typing
  };

  const selectSuggestion = (suggestion) => {
    searchValue = suggestion;
    suggestions = [];
  };
<\/script>

<Input 
  id="search"
  label="Search"
  bind:value={searchValue}
  placeholder="Start typing..."
  onInput={handleInput}
/>

{#if suggestions.length > 0}
  <ul class="suggestions">
    {#each suggestions as item}
      <li>
        <button onclick={() => selectSuggestion(item.name)}>
          {item.name}
        </button>
      </li>
    {/each}
  </ul>
{/if}

<style>
  .suggestions {
    list-style: none;
    padding: 0;
    border: 1px solid #ccc;
    margin: 4px 0;
  }
  
  .suggestions li button {
    width: 100%;
    padding: 8px;
    text-align: left;
    border: none;
    background: none;
    cursor: pointer;
  }
  
  .suggestions li button:hover {
    background-color: #f0f0f0;
  }
</style>
\`\`\`

## Callbacks and events

The Input component has three callback props:

- **\`onInput\`** - Called on each keystroke (useful for real-time feedback/autocomplete)
- **\`onChange\`** - Called when the value has changed and the input loses focus (useful for validation or lookups)
- **\`onBlur\`** - Called when the input loses focus

Each callback receives an object containing:

- \`value\` - The current input value
- \`e\` - The native DOM event

The matching dispatched events (\`on:input\`, \`on:change\` and \`on:blur\`) are still supported for Svelte 4-style code, with the same object on \`event.detail\`.
`,e=(i,r=b)=>{var n=E();D(n,"",{},{padding:"12px"});var s=x(n);g(s,I(r)),c(i,n)},$={title:"Form elements/Input",component:g,tags:["autodocs"],argTypes:{},parameters:w(W)},{Story:t}=k();var E=d("<div><!></div>"),L=d("<!> <!> <!> <!> <!>",1);function h(i,r){v(r,!1),C();var n=L(),s=f(n);t(s,{name:"Default",args:{id:"text",label:"Enter some text"},get template(){return e},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<Input {...args} />
</div>`}}});var l=a(s,2);t(l,{name:"With hidden label",args:{id:"text",label:"Enter some text",hideLabel:!0},get template(){return e},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<Input {...args} />
</div>`}}});var u=a(l,2);t(u,{name:"With description",args:{id:"text",label:"Enter some text",description:"This is a hint on what to enter"},get template(){return e},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<Input {...args} />
</div>`}}});var p=a(u,2);t(p,{name:"Numeric with prefix",args:{id:"text",label:"Enter some text",prefix:"£",unitLabel:"British pounds sterling",numeric:!0,width:5,charLimit:8},get template(){return e},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<Input {...args} />
</div>`}}});var m=a(p,2);t(m,{name:"Input error",args:{id:"text",label:"Enter some text",error:!0},get template(){return e},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<Input {...args} />
</div>`}}}),c(i,n),_()}h.__docgen={data:[],name:"Input.stories.svelte"};const o=y(h,$),N=["Default","WithHiddenLabel","WithDescription","NumericWithPrefix","InputError"],U={...o.Default,tags:["svelte-csf-v5"]},F={...o.WithHiddenLabel,tags:["svelte-csf-v5"]},R={...o.WithDescription,tags:["svelte-csf-v5"]},M={...o.NumericWithPrefix,tags:["svelte-csf-v5"]},O={...o.InputError,tags:["svelte-csf-v5"]};export{U as Default,O as InputError,M as NumericWithPrefix,R as WithDescription,F as WithHiddenLabel,N as __namedExportsOrder,$ as default};
