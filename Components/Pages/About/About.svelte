<script lang="ts">
  import { slide } from "transition";

  const VERSION = "[VI]Version: {version} - built on {date}[/VI]";
</script>

<section transition:slide>
  <h1>About</h1>

  <p>{VERSION}</p>

  <p>
    This is an experimental app for encrypting and decrypting messages and files
    from browsers.
  </p>

  <p>To create it I used these technologies:</p>

  <ul>
    <li>
      Interface: <a href="">Svelte</a> and
      <a href="">Rollup</a>
    </li>
    <li>
      Encrypt/Decrypt: <a href="">Stanford Javascript Crypto Library</a>
    </li>
    <li>
      Password Generator: <a href="">Micro Password Generator</a>
      by <a href="">Paul Miller</a>
    </li>
    <li>
      QR code/2d barcode generator: <a href="">node-qrcode </a>
      by <a href="">Ryan Day</a>
    </li>
    <li>
      QR Code Scanner: <a href="">QR Scanner </a>
      by <a href="">Nimiq Blockchain Ecosystem</a>
    </li>
    <li>
      MarkDown Interpreter: <a href="">Marked</a>
    </li>
    <li>
      MarkDownn Extended Tables: <a href="">Marked Tables</a>
    </li>
  </ul>

  <p>Other utilities:</p>

  <ul>
    <li>
      <a href="">blob-polyfill</a> by
      <a href="">Bjorn Stromberg</a>
      and <a href="">Eli Grey</a>
    </li>
    <li>
      <a href="">file-saver</a> by
      <a href="">Eli Grey</a>
    </li>
    <li>
      <a href="">js-base64</a> by
      <a href="">Dan Kogai</a>
    </li>
    <li>
      <a href="">match</a>
    </li>
    <li>
      <a href="">to-try</a>
    </li>
    <li>
      <a href="">IDB-Keyval</a> by
      <a href="">Jake Archibald</a>
    </li>
  </ul>

  <p>
    The source code is available on <a href="">GitHub</a>.
  </p>
</section>

<style lang="postcss">
  a,
  a:visited {
    color: var(--color-purple);
  }

  a:hover {
    background-color: var(--color-purple);
    color: var(--color-menu);
  }
  ul {
    list-style-type: disc;
    list-style-position: inside;
  }

  li::marker {
    color: var(--color-purple);
    content: "►";
  }
</style>
