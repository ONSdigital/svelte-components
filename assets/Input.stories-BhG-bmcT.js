import{ab as f,e as v,as as b,ae as s,a as c,ad as _,f as d,at as x,c as I}from"./iframe-BieOkgaL.js";import{c as y,w,i as D,d as k}from"./create-runtime-stories-CYy4gM-U.js";import{I as g}from"./Input-Rxh4pd57.js";import{s as C}from"./style-BeKZa6WD.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-C9k8Ok3D.js";import"./class-B3LrzTQO.js";import"./attributes-DayBpKoh.js";import"./input-tchtlQGS.js";const W=`A standard \`<input>\` element with Svelte bindings and events.\r
\r
## Basic Usage\r
\r
<!-- prettier-ignore -->\r
\`\`\`html\r
<script>\r
  import { Input } from "@onsvisual/svelte-components";\r
\r
  // Bind the <input> value to a variable (reactive)\r
  let value;\r
\r
  // Define your own function on change\r
  const handleChange = (e) => console.log(e);\r
<\/script>\r
\r
<Input bind:value on:change="{handleChange}" />\r
\`\`\`\r
\r
## Using with Autocomplete/Lookup Functions\r
\r
The Input component can be paired with a lookup function to provide autocomplete functionality or data enrichment. Here are common patterns:\r
\r
### Postcode Lookup Example\r
\r
Use the \`on:input\` or \`on:blur\` events to trigger async lookups (e.g., postcode validation/enrichment via postcodes.io):\r
\r
<!-- prettier-ignore -->\r
\`\`\`html\r
<script>\r
  import { Input } from "@onsvisual/svelte-components";\r
\r
  let postcode = "";\r
  let postcodeData = null;\r
  let isLoading = false;\r
\r
  // Function to lookup postcode data\r
  const lookupPostcode = async (inputValue) => {\r
    if (!inputValue || inputValue.length < 2) return;\r
    \r
    isLoading = true;\r
    try {\r
      const response = await fetch(\`https://api.postcodes.io/postcodes/\${encodeURIComponent(inputValue)}\`);\r
      const data = await response.json();\r
      \r
      if (data.result) {\r
        postcodeData = data.result;\r
      }\r
    } catch (error) {\r
      console.error("Postcode lookup failed:", error);\r
    } finally {\r
      isLoading = false;\r
    }\r
  };\r
\r
  // Trigger lookup on blur or after debounced input\r
  const handleChange = (e) => {\r
    lookupPostcode(e.detail.value);\r
  };\r
<\/script>\r
\r
<Input \r
  id="postcode"\r
  label="Enter postcode"\r
  bind:value={postcode}\r
  placeholder="e.g., SW1A 1AA"\r
  on:change={handleChange}\r
/>\r
\r
{#if isLoading}\r
  <p>Looking up postcode...</p>\r
{/if}\r
\r
{#if postcodeData}\r
  <div>\r
    <p><strong>Area:</strong> {postcodeData.admin_district}</p>\r
    <p><strong>Region:</strong> {postcodeData.region}</p>\r
    <p><strong>Country:</strong> {postcodeData.country}</p>\r
  </div>\r
{/if}\r
\`\`\`\r
\r
### Debounced Input with Autocomplete Suggestions\r
\r
For real-time autocomplete without overwhelming API calls, use a debounce function:\r
\r
<!-- prettier-ignore -->\r
\`\`\`html\r
<script>\r
  import { Input } from "@onsvisual/svelte-components";\r
\r
  let searchValue = "";\r
  let suggestions = [];\r
  let debounceTimer;\r
\r
  // Generic autocomplete lookup function\r
  const fetchSuggestions = async (query) => {\r
    if (!query || query.length < 2) {\r
      suggestions = [];\r
      return;\r
    }\r
\r
    try {\r
      const response = await fetch(\`/api/search?q=\${encodeURIComponent(query)}\`);\r
      const data = await response.json();\r
      suggestions = data.results || [];\r
    } catch (error) {\r
      console.error("Autocomplete fetch failed:", error);\r
    }\r
  };\r
\r
  // Debounced handler to avoid excessive API calls\r
  const handleInput = (e) => {\r
    clearTimeout(debounceTimer);\r
    debounceTimer = setTimeout(() => {\r
      fetchSuggestions(e.detail.value);\r
    }, 300); // Wait 300ms after user stops typing\r
  };\r
\r
  const selectSuggestion = (suggestion) => {\r
    searchValue = suggestion;\r
    suggestions = [];\r
  };\r
<\/script>\r
\r
<Input \r
  id="search"\r
  label="Search"\r
  bind:value={searchValue}\r
  placeholder="Start typing..."\r
  on:input={handleInput}\r
/>\r
\r
{#if suggestions.length > 0}\r
  <ul class="suggestions">\r
    {#each suggestions as item}\r
      <li>\r
        <button on:click={() => selectSuggestion(item.name)}>\r
          {item.name}\r
        </button>\r
      </li>\r
    {/each}\r
  </ul>\r
{/if}\r
\r
<style>\r
  .suggestions {\r
    list-style: none;\r
    padding: 0;\r
    border: 1px solid #ccc;\r
    margin: 4px 0;\r
  }\r
  \r
  .suggestions li button {\r
    width: 100%;\r
    padding: 8px;\r
    text-align: left;\r
    border: none;\r
    background: none;\r
    cursor: pointer;\r
  }\r
  \r
  .suggestions li button:hover {\r
    background-color: #f0f0f0;\r
  }\r
</style>\r
\`\`\`\r
\r
## Events\r
\r
The Input component dispatches three events:\r
\r
- **\`on:input\`** - Fired on each keystroke (useful for real-time feedback/autocomplete)\r
- **\`on:change\`** - Fired when the input loses focus (useful for validation or lookups)\r
- **\`on:blur\`** - Fired when the input loses focus\r
\r
Each event detail contains:\r
- \`value\` - The current input value\r
- \`e\` - The native DOM event\r
`,e=(a,i=b)=>{var n=L();C(n,"",{},{padding:"12px"});var o=I(n);g(o,x(i)),c(a,n)},E={title:"Form elements/Input",component:g,tags:["autodocs"],argTypes:{},parameters:w(W)},{Story:r}=k();var L=d("<div><!></div>"),T=d("<!> <!> <!> <!> <!>",1);function m(a,i){f(i,!1),D();var n=T(),o=v(n);r(o,{name:"Default",args:{id:"text",label:"Enter some text"},get template(){return e},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">\r
	<Input {...args} />\r
</div>`}}});var p=s(o,2);r(p,{name:"With hidden label",args:{id:"text",label:"Enter some text",hideLabel:!0},get template(){return e},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">\r
	<Input {...args} />\r
</div>`}}});var l=s(p,2);r(l,{name:"With description",args:{id:"text",label:"Enter some text",description:"This is a hint on what to enter"},get template(){return e},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">\r
	<Input {...args} />\r
</div>`}}});var u=s(l,2);r(u,{name:"Numeric with prefix",args:{id:"text",label:"Enter some text",prefix:"£",unitLabel:"British pounds sterling",numeric:!0,width:5,charLimit:8},get template(){return e},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">\r
	<Input {...args} />\r
</div>`}}});var h=s(u,2);r(h,{name:"Input error",args:{id:"text",label:"Enter some text",error:!0},get template(){return e},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">\r
	<Input {...args} />\r
</div>`}}}),c(a,n),_()}m.__docgen={data:[],name:"Input.stories.svelte"};const t=y(m,E),U=["Default","WithHiddenLabel","WithDescription","NumericWithPrefix","InputError"],R={...t.Default,tags:["svelte-csf-v5"]},B={...t.WithHiddenLabel,tags:["svelte-csf-v5"]},j={...t.WithDescription,tags:["svelte-csf-v5"]},M={...t.NumericWithPrefix,tags:["svelte-csf-v5"]},O={...t.InputError,tags:["svelte-csf-v5"]};export{R as Default,O as InputError,M as NumericWithPrefix,j as WithDescription,B as WithHiddenLabel,U as __namedExportsOrder,E as default};
