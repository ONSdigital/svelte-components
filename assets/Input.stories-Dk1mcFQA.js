import{ab as f,e as v,as as b,ae as a,a as c,ad as _,f as d,at as x,c as I}from"./iframe-CPuOiLdi.js";import{c as y,w,i as D,d as k}from"./create-runtime-stories-DJNjQXz2.js";import{I as g}from"./Input-DHUSwGTh.js";import{s as C}from"./style-BoNWNBRN.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-BU72BVC0.js";import"./class-45mj1iA8.js";import"./attributes-DayBpKoh.js";import"./input-2HA_gpgH.js";const W=`A standard \`<input>\` element with Svelte bindings and events.

## Basic Usage

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Input } from "@onsvisual/svelte-components";

  // Bind the <input> value to a variable (reactive)
  let value;

  // Define your own function on change
  const handleChange = (e) => console.log(e);
<\/script>

<Input bind:value on:change="{handleChange}" />
\`\`\`

## Using with Autocomplete/Lookup Functions

The Input component can be paired with a lookup function to provide autocomplete functionality or data enrichment. Here are common patterns:

### Postcode Lookup Example

Use the \`on:input\` or \`on:blur\` events to trigger async lookups (e.g., postcode validation/enrichment via postcodes.io):

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Input } from "@onsvisual/svelte-components";

  let postcode = "";
  let postcodeData = null;
  let isLoading = false;

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

  // Trigger lookup on blur or after debounced input
  const handleChange = (e) => {
    lookupPostcode(e.detail.value);
  };
<\/script>

<Input 
  id="postcode"
  label="Enter postcode"
  bind:value={postcode}
  placeholder="e.g., SW1A 1AA"
  on:change={handleChange}
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

  let searchValue = "";
  let suggestions = [];
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
  const handleInput = (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      fetchSuggestions(e.detail.value);
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
  on:input={handleInput}
/>

{#if suggestions.length > 0}
  <ul class="suggestions">
    {#each suggestions as item}
      <li>
        <button on:click={() => selectSuggestion(item.name)}>
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

## Events

The Input component dispatches three events:

- **\`on:input\`** - Fired on each keystroke (useful for real-time feedback/autocomplete)
- **\`on:change\`** - Fired when the input loses focus (useful for validation or lookups)
- **\`on:blur\`** - Fired when the input loses focus

Each event detail contains:
- \`value\` - The current input value
- \`e\` - The native DOM event
`,e=(i,r=b)=>{var n=L();C(n,"",{},{padding:"12px"});var s=I(n);g(s,x(r)),c(i,n)},E={title:"Form elements/Input",component:g,tags:["autodocs"],argTypes:{},parameters:w(W)},{Story:t}=k();var L=d("<div><!></div>"),T=d("<!> <!> <!> <!> <!>",1);function m(i,r){f(r,!1),D();var n=T(),s=v(n);t(s,{name:"Default",args:{id:"text",label:"Enter some text"},get template(){return e},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<Input {...args} />
</div>`}}});var p=a(s,2);t(p,{name:"With hidden label",args:{id:"text",label:"Enter some text",hideLabel:!0},get template(){return e},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<Input {...args} />
</div>`}}});var l=a(p,2);t(l,{name:"With description",args:{id:"text",label:"Enter some text",description:"This is a hint on what to enter"},get template(){return e},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<Input {...args} />
</div>`}}});var u=a(l,2);t(u,{name:"Numeric with prefix",args:{id:"text",label:"Enter some text",prefix:"£",unitLabel:"British pounds sterling",numeric:!0,width:5,charLimit:8},get template(){return e},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<Input {...args} />
</div>`}}});var h=a(u,2);t(h,{name:"Input error",args:{id:"text",label:"Enter some text",error:!0},get template(){return e},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<Input {...args} />
</div>`}}}),c(i,n),_()}m.__docgen={data:[],name:"Input.stories.svelte"};const o=y(m,E),U=["Default","WithHiddenLabel","WithDescription","NumericWithPrefix","InputError"],R={...o.Default,tags:["svelte-csf-v5"]},B={...o.WithHiddenLabel,tags:["svelte-csf-v5"]},j={...o.WithDescription,tags:["svelte-csf-v5"]},M={...o.NumericWithPrefix,tags:["svelte-csf-v5"]},O={...o.InputError,tags:["svelte-csf-v5"]};export{R as Default,O as InputError,M as NumericWithPrefix,j as WithDescription,B as WithHiddenLabel,U as __namedExportsOrder,E as default};
