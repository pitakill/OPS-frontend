<script>
  export let label;
  export let items;
  export let value;

  import { Cell, InnerGrid } from "@smui/layout-grid";
  import Select, { Option } from "@smui/select";

  import config from "../config";
</script>

<InnerGrid>
  <Cell span={2}>
    <Select
      bind:value
      style={config.fullWidth()}
      label={`${label} id`}
      disabled
    >
      {#each items as item (item.id)}
        <Option value={item}>{item.id}</Option>
      {/each}
    </Select>
  </Cell>
  <Cell span={10}>
    <Select
      bind:value
      {label}
      style={config.fullWidth()}
      key={(item) => `${item?.id || ""}`}
    >
      {#each items as item (item.label)}
        <Option value={item}>{item.label}</Option>
      {/each}
    </Select>
  </Cell>
</InnerGrid>
