<script lang="ts">
  import { slide } from "transition";

  import Choose from "Choose.svelte";
  import GenerateRandomPassword from "@svelte/GenerateRandomPassword.svelte";
  import ReadQRCodeFromPhoto from "@svelte/ReadQRCodeFromPhoto.svelte";
  import ReadQRCodeFromImage from "@svelte/ReadQRCodeFromImage.svelte";

  import LogoRandomPassword from "../SVG/LOGO/LogoRandomPassword.svelte";
  import LogoPasswordFromImage from "../SVG/LOGO/LogoPasswordFromImage.svelte";
  import LogoPasswordFromPhoto from "../SVG/LOGO/LogoPasswordFromPhoto.svelte";

  import ButtonBarPassword from "./ButtonBarPassword.svelte";

  let component = null;
  let value = 0;

  const pageLang = "ManagePassword";
</script>

<section transition:slide>
  {#if component == null}
    <div class="item yellow">
      <Choose
        logo={LogoRandomPassword}
        {pageLang}
        title="Random Password"
        subtitle="Generate Random Password"
        on:click={() => {
          component = GenerateRandomPassword;
        }}
      />
    </div>
    <div class="item green">
      <Choose
        logo={LogoPasswordFromPhoto}
        {pageLang}
        title="QR Code Photo"
        subtitle="Read a QR Code from a Photo"
        on:click={() => {
          component = ReadQRCodeFromPhoto;
        }}
      />
    </div>
    <div class="item orange">
      <Choose
        logo={LogoPasswordFromImage}
        {pageLang}
        title="QR Code Image"
        subtitle="Read a QR Code from an Image"
        on:click={() => {
          component = ReadQRCodeFromImage;
        }}
      />
    </div>
  {:else}
    <div>
      <div class="item">
        <ButtonBarPassword
          on:qr-code-image={async () => {
            component = ReadQRCodeFromImage;
            value += 1;
          }}
          on:qr-code-photo={async () => {
            component = ReadQRCodeFromPhoto;
            value += 1;
          }}
          on:random-password={async () => {
            component = GenerateRandomPassword;
            value += 1;
          }}
        />
      </div>
      <div class="item">
        {#key value}
          <svelte:component this={component} />
        {/key}
      </div>
    </div>
  {/if}
</section>

<style lang="postcss">
  section {
    display: flex;
    flex-wrap: wrap;
  }

  .item {
    flex: 1;
    min-width: 240px;
    padding: 10px;
    text-align: center;
    border: 4px solid var(--color-menu);
    border-radius: 2px;
    margin: 0px;
    cursor: pointer;

    transition: all 0.5s ease-in-out;
  }
</style>
