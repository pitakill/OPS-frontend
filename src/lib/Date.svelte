<script>
  export let value;
  export let label;

  import Textfield from "@smui/textfield";
</script>

<Textfield bind:value={$value} {label} type="date" style="width: 100%;" />
