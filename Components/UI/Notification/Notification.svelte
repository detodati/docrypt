<script lang="ts">
  import { flip } from "animate";
  import { fly } from "transition";

  import notifications from "./Notification";

  export let themes = {
    danger: "#E26D69",
    success: "#1f8c34",
    warning: "#f0ad4e",
    info: "#5bc0de",
    default: "#aaaaaa",
  };
</script>

<div class="notifications">
  {#each $notifications as notification (notification.id)}
    <div
      animate:flip
      class="toast"
      style="background: {themes[notification.msg.type]};"
      transition:fly={{ y: 128, duration: 500 }}
    >
      <div class="content">{notification.msg.message}</div>
    </div>
  {/each}
</div>

<style>
  .notifications {
    position: fixed;
    top: 64px;
    left: 0;
    right: 8px;
    margin: 0 auto;
    padding: 0;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    pointer-events: none;
  }

  .toast {
    flex: 1;
    margin-bottom: 10px;
    min-width: 240px;
    padding: 10px;
    text-align: center;
    border: 4px solid transparent;
    border-radius: 2px;
  }

  .content {
    padding: 10px;
    display: block;
    color: white;
    font-weight: 500;
  }
</style>
