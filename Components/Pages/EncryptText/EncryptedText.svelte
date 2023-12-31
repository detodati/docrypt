<script lang="ts">
  export let cipherText = "";
  import { slide } from "transition";
  import Button from "/Button.svelte";

  import saveBase64FileAsText from "/SaveBase64FileAsText";
  import createBlobFromText from "/CreateBlobFromText";

  import IconDownload from "/ICO/IconDownload.svelte";
  import IconSend from "/ICO/IconSend.svelte";
  import IconSendDocument from "/ICO/IconSendDocument.svelte";
  import IconLink from "/ICO/IconLink.svelte";
  import IconCopy from "/ICO/IconCopy.svelte";

  import notifications from "/Notification";

  const pageLang = "EncryptedText";

  const copyText = () => {
    navigator.clipboard.writeText(cipherText);
    notifications.send({
      message: "Copied to clipboard",
      type: "success",
      timeout: 1500,
    });
  };

  const shareText = () => {
    navigator.share({ text: cipherText } as ShareData);
  };

  const shareLink = () => {
    navigator.share({
      text: "",
      url: `https://docrypt.org?message=${cipherText}`,
    } as ShareData);
  };

  const saveFile = () => {
    saveBase64FileAsText({
      text: cipherText,
      fileName: "message.txt",
      showSaveFilePickerSupported: false,
    });
  };

  const shareFile = () => {
    const blob = createBlobFromText(cipherText);
    const file = new File([blob], "message.txt", { type: "text/plain" });
    navigator.share({ text: "", files: [file] } as ShareData);
  };
</script>

<section>
  <div class="button-bar" transition:slide>
    <div class="item button-icon-yellow">
      <Button
        {pageLang}
        label="Copy Encrypted Text"
        LeftIcon={IconCopy}
        on:click={copyText}
      />
    </div>
    <div class="item button-icon-yellow">
      <Button
        {pageLang}
        label="Share Encrypted Text"
        LeftIcon={IconSend}
        on:click={shareText}
      />
    </div>
    <div class="item button-icon-yellow">
      <Button
        {pageLang}
        label="Share Encrypted Link"
        LeftIcon={IconLink}
        on:click={shareLink}
      />
    </div>
    <div class="item button-icon-yellow">
      <Button
        {pageLang}
        label="Share Encrypted File"
        LeftIcon={IconSendDocument}
        on:click={shareFile}
      />
    </div>
    <div class="item button-icon-yellow">
      <Button
        {pageLang}
        label="Save Encrypted File"
        LeftIcon={IconDownload}
        on:click={saveFile}
      />
    </div>
  </div>

  <div class="ciphertext" transition:slide>
    {cipherText}
  </div>
</section>

<style lang="postcss">
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
    padding: 1rem;
    box-sizing: border-box;
    border: 4px solid var(--color-menu);
    border-radius: 2px;
    margin: 0px;
    transition: all 0.5s ease-in-out;
  }
  .ciphertext {
    background-color: #ccc;
    color: var(--color-menu);
    border: 2px solid var(--color);
    border-radius: 2px;
    padding: 0.25em;
    margin: 0.5em;
    transition: all 0.5s ease-in-out;
    overflow-wrap: break-word;
  }

  .button-bar {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    /* border: 4px solid var(--color-menu); */
  }

  .button-bar .item {
    flex: 1;
    min-width: 240px;
    padding: 10px;
    text-align: center;
    border: 4px solid transparent;
    border-radius: 2px;
    margin: 0px;
    cursor: pointer;

    transition: all 0.5s ease-in-out;
  }
</style>
