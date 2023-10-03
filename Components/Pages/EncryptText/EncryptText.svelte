<script lang="ts">
  import { slide } from "transition";
  import { Base64 } from "js-base64";
  import sjcl from "sjcl";

  import password from "Password";

  import Button from "Button.svelte";
  import IconNext from "/ICO/IconNext.svelte";
  import IconBack from "/ICO/IconBack.svelte";
  import IconNewMessage from "/ICO/IconNewMessage.svelte";

  import MarkedText from "MarkedText.svelte";
  import InsertPassword from "InsertPassword.svelte";
  import EncryptedText from "EncryptedText.svelte";

  import Lang from "UI/Languages/Lang.svelte";
  const pageLang = "EncryptText";

  let status: "Input" | "Password" | "Show" = "Input";

  let text = ``;
  let objToEncrypt: {
    name: string;
    type: string;
    size: number;
    base64: string;
  } = { name: "", type: "", size: 0, base64: "" };

  $: {
    const name = "message.txt";
    const type = "text/plain";
    const size = text.length;
    const base64 = Base64.encode(text, true);

    objToEncrypt = { name, type, size, base64 };
  }

  $: encryptMessage = () => {
    const b64 = JSON.stringify(objToEncrypt);
    const ciphertextPlain = sjcl.encrypt($password, b64);
    const { iv, salt, ct } = JSON.parse(ciphertextPlain);

    const parsedMessage = JSON.stringify({ iv, salt, ct });
    const result = Base64.encode(parsedMessage, true);
    return result;
  };

  $: cipherText = encryptMessage();
</script>

<section transition:slide>
  {#if status === "Input"}
    <div transition:slide>
      <div class="title-section">
        <h1><Lang p={pageLang} w="Input" /></h1>
        <h3><Lang p={pageLang} w="Write here the text to be encrypted" /></h3>
      </div>
      <MarkedText bind:text />

      <div class="button-bar">
        <div class="item">
          <Button
            {pageLang}
            label="Next"
            subtitle="Insert password"
            RightIcon={IconNext}
            on:click={() => (status = "Password")}
          />
        </div>
      </div>
    </div>
  {:else if status === "Password"}
    <div transition:slide>
      <div class="title-section">
        <h1><Lang p={pageLang} w="Password" /></h1>
        <h3>
          <Lang p={pageLang} w="Password" />
        </h3>
      </div>

      <InsertPassword showInputPassword={false} />

      <div class="button-bar">
        <div class="item">
          <Button
            {pageLang}
            label="Back"
            subtitle="Insert Text"
            LeftIcon={IconBack}
            on:click={() => (status = "Input")}
          />
        </div>
        <div class="item">
          <Button
            {pageLang}
            label="Next"
            subtitle="Show Encrypted text"
            RightIcon={IconNext}
            on:click={() => (status = "Show")}
          />
        </div>
      </div>
    </div>
  {:else if status === "Show"}
    <div transition:slide>
      <div class="title-section">
        <h1><Lang p={pageLang} w="Encrypted Text" /></h1>
        <h3><Lang p={pageLang} w="Here is the encrypted text" /></h3>
      </div>
      <EncryptedText {cipherText} />

      <div class="button-bar">
        <div class="item">
          <Button
            {pageLang}
            label="Password"
            subtitle="Insert password"
            LeftIcon={IconBack}
            on:click={() => (status = "Password")}
          />
        </div>
        <div class="item">
          <Button
            {pageLang}
            label="New Message"
            subtitle="Encrypt a new message"
            RightIcon={IconNewMessage}
            on:click={() => {
              status = "Input";
              text = "";
            }}
          />
        </div>
      </div>
    </div>
  {/if}
</section>

<style lang="postcss">
  .title-section {
    border: 4px solid var(--color-menu);
    color: var(--color);
    padding: 10px;
    border-radius: 2px;
    margin: 0px;
    transition: all 0.5s ease-in-out;
  }
  .button-bar {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    border: 4px solid var(--color-menu);
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
