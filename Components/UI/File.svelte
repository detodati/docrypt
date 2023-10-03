<script>
  import Lang from "./Languages/Lang.svelte";
  import textToConverter from "Stores/TextToConverter";

  let files;

  $: if (files) {
    const file = files[0];
    const name = file.name;
    const type = file.type;
    const size = file.size;

    const reader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onloadend = () => {
      const base64 = reader.result;

      const obj = { name, type, size, base64 };

      textToConverter.set(JSON.stringify(obj));
    };
  }
</script>

<div>
  <label for="many"><Lang p="menu" w="chooseFiles" />:</label>
  <input bind:files id="many" type="file" />

  {#if files}
    <h2><Lang p="menu" w="selectedFile" />:</h2>
    {#each Array.from(files) as file}
      <p>{file.name} ({file.size} bytes)</p>
    {/each}
  {/if}
</div>
