<script>
  export let label;
  export let items;
  export let value;
  export let disabled = false;
  export let fixIds = false;

  import Select, { Option } from "@smui/select";
</script>

<Select
  bind:value={$value}
  {label}
  key={(item) => `${item?.id || ""}`}
  style="width: 100%;"
  {disabled}
>
  {#each items as item (item.label)}
    <Option value={item}
      >{`${fixIds ? item.id - 1 : item.id} -  ${item.label}`}</Option
    >
  {/each}
</Select>
