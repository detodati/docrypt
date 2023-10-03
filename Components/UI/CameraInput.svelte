<script lang="ts">
  import Lang from "./Languages/Lang.svelte";
  import textToConverter from "Stores/TextToConverter";

  let files;
  let image;

  const getBase64StringFromDataURL = (dataURL) => dataURL;
</script>

<div>
  <label for="cameraFileInput">
    <span class="button-action"><Lang p="menu" w="useNativeCamera" /></span>
    <input
      bind:files
      id="cameraFileInput"
      type="file"
      accept="image/*"
      capture="environment"
    />
  </label>

  {#if files}
    <img
      bind:this={image}
      class="pictureFromCamera"
      src={globalThis.URL.createObjectURL(files[0])}
      alt="camera"
    />
    <button
      on:click={() => {
        fetch(image.src)
          .then((res) => res.blob())
          .then((blob) => {
            const reader = new FileReader();
            reader.onloadend = () => {
              console.log(reader.result);
              const base64 = getBase64StringFromDataURL(reader.result);
              console.log(base64);
              textToConverter.set(base64);
            };
            reader.readAsDataURL(blob);
          });
      }}>Convert to base64</button
    >
  {/if}
</div>

<style>
  #cameraFileInput {
    display: none;
  }

  .pictureFromCamera {
    width: 100%;
    height: auto;
    margin-top: 16px;
  }
</style>
