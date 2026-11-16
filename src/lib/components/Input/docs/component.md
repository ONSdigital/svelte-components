A standard `<input>` element with Svelte bindings and events.

In Svelte 5, callbacks `onInput`, `onChange`, and `onBlur` receive `{ value, e }`, where `e` is the native event. Existing dispatched events remain available with the same object on `event.detail`.

```svelte
<script>
	import { Input } from "@onsvisual/svelte-components";

	let value = $state(null);
	const search = (query) => console.log(query);
</script>

<Input bind:value onInput={({ value }) => search(value)} />
```

## Basic Usage

<!-- prettier-ignore -->
```html
<script>
  import { Input } from "@onsvisual/svelte-components";

  // Bind the <input> value to a variable (start it as null, not undefined)
  let value = $state(null);

  // Define your own function on change
  const handleChange = ({ value }) => console.log(value);
</script>

<Input bind:value onChange={handleChange} />
```

## Using with Autocomplete/Lookup Functions

The Input component can be paired with a lookup function to provide autocomplete functionality or data enrichment. Here are common patterns:

### Postcode Lookup Example

Use the `onInput`, `onChange` or `onBlur` callbacks to trigger async lookups (e.g., postcode validation/enrichment via postcodes.io):

<!-- prettier-ignore -->
```html
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

  // Trigger lookup when the input changes (on blur)
  const handleChange = ({ value }) => {
    lookupPostcode(value);
  };
</script>

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
```

### Debounced Input with Autocomplete Suggestions

For real-time autocomplete without overwhelming API calls, use a debounce function:

<!-- prettier-ignore -->
```html
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
      const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
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
</script>

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
```

## Callbacks and events

The Input component has three callback props:

- **`onInput`** - Called on each keystroke (useful for real-time feedback/autocomplete)
- **`onChange`** - Called when the value has changed and the input loses focus (useful for validation or lookups)
- **`onBlur`** - Called when the input loses focus

Each callback receives an object containing:

- `value` - The current input value
- `e` - The native DOM event

The matching dispatched events (`on:input`, `on:change` and `on:blur`) are still supported for Svelte 4-style code, with the same object on `event.detail`.
