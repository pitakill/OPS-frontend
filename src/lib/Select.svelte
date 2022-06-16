<script>
  export let label;
  export let items;
  export let value;

  import Select, { Option } from "@smui/select";
</script>

<Select
  bind:value={$value}
  {label}
  key={(item) => `${item?.id || ""}`}
  style="width: 100%;"
>
  {#each items as item (item.label)}
    <Option value={item}>{item.label}</Option>
  {/each}
</Select>
