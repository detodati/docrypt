<script lang="ts">
  import Lang from "@svelte/Lang.svelte";
  import lang from "@svelte/Lang";
  import { translation } from "Languages";

  let selected = $lang;
</script>

<div class="select-value">
  <label for="changeLanguage"><Lang p="menu" w="changeLanguage" /></label>
  <select
    bind:value={selected}
    on:change={() => lang.set(selected)}
    id="changeLanguage"
  >
    {#each translation as l}
      <option value={l.id}>
        {l.name}
      </option>
    {/each}
  </select>
</div>

<style lang="postcss">
  select:focus {
    border-color: var(--color-blue);
  }
</style>
