<script lang="ts">
  import { slide } from "transition";

  import page from "Page";

  import Choose from "Choose.svelte";
  import LogoEncryptText from "/LOGO/LogoEncryptText.svelte";
  import LogoDecryptText from "/LOGO/LogoDecryptText.svelte";
  import LogoSettings from "/LOGO/LogoSettings.svelte";
  import LogoPassword from "/LOGO/LogoPassword.svelte";
  import LogoAbout from "/LOGO/LogoAbout.svelte";

  const pageLang = "Home";
</script>

<section transition:slide>
  <div class="item yellow">
    <Choose
      logo={LogoEncryptText}
      {pageLang}
      title="Encrypt"
      subtitle="Encrypt your text"
      on:click={() => page.set("EncryptText")}
    />
  </div>
  <div class="item green">
    <Choose
      logo={LogoDecryptText}
      {pageLang}
      title="Decrypt"
      subtitle="Decrypt your text"
      on:click={() => {
        page.set("DecryptText");
      }}
    />
  </div>
  <div class="item red">
    <Choose
      logo={LogoPassword}
      {pageLang}
      title="Password"
      subtitle="Manage your password"
      on:click={() => {
        page.set("ManagePassword");
      }}
    />
  </div>
  <div class="item blue">
    <Choose
      logo={LogoSettings}
      {pageLang}
      title="Settings"
      subtitle="Language and other settings"
      on:click={() => {
        page.set("Settings");
      }}
    />
  </div>
  <div class="item purple">
    <Choose
      logo={LogoAbout}
      {pageLang}
      title="About"
      subtitle="About this app"
      on:click={() => {
        page.set("About");
      }}
    />
  </div>
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
