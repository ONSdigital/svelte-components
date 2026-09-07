A standard `<input>` element with Svelte bindings and events.

## Basic Usage

<!-- prettier-ignore -->
```html
<script>
  import { Input } from "@onsvisual/svelte-components";

  // Bind the <input> value to a variable (reactive)
  let value;

  // Define your own function on change
  const handleChange = (e) => console.log(e);
</script>

<Input bind:value on:change="{handleChange}" />
```

## Using with Autocomplete/Lookup Functions

The Input component can be paired with a lookup function to provide autocomplete functionality or data enrichment. Here are common patterns:

### Postcode Lookup Example

Use the `on:input` or `on:blur` events to trigger async lookups (e.g., postcode validation/enrichment via postcodes.io):

<!-- prettier-ignore -->
```html
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
      const response = await fetch(`https://api.postcodes.io/postcodes/${encodeURIComponent(inputValue)}`);
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
</script>

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
```

### Debounced Input with Autocomplete Suggestions

For real-time autocomplete without overwhelming API calls, use a debounce function:

<!-- prettier-ignore -->
```html
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
      const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
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
</script>

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
```

## Events

The Input component dispatches three events:

- **`on:input`** - Fired on each keystroke (useful for real-time feedback/autocomplete)
- **`on:change`** - Fired when the input loses focus (useful for validation or lookups)
- **`on:blur`** - Fired when the input loses focus

Each event detail contains:
- `value` - The current input value
- `e` - The native DOM event
