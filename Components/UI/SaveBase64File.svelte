<script lang="ts">
  import textToConverter from "Stores/TextToConverter";
  import saveBase64FileAsText from "Functions/SaveBase64FileAsText";

  const saveFile = () => {
    console.log($textToConverter);
    saveBase64FileAsText({
      text: $textToConverter,
      fileName: "DoCrypt.txt",
      showSaveFilePickerSupported: false,
    });
  };
</script>

<button on:click={saveFile}>Save Base64 File</button>
