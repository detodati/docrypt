<script lang="ts">
  import { slide } from "transition";
  import ChooseLanguage from ".../Main/Components/Choose/ChooseLanguage.svelte";
</script>

<section transition:slide>
  <ChooseLanguage />
</section>

<style lang="postcss">
  section {
    @apply flex flex-col w-full h-full;
  }
</style>
