<script>
  import { Cell, InnerGrid } from "@smui/layout-grid";
  import Select, { Option } from "@smui/select";
  import Textfield from "@smui/textfield";
  import Tooltip, { Wrapper } from "@smui/tooltip";

  import config from "../../config";
  import { timeB, timeUnitB } from "./store";
  import { ageUnits } from "../../catalogs";

  let helperText = undefined;

  $: {
    switch ($timeUnitB?.id) {
      case 9:
        timeB.set(999);
        helperText = undefined;
        break;
      case 5:
        helperText = "Rango entre 1 y 120";
        break;
      case 4:
        helperText = "Rango entre 1 y 11";
        break;
      case 3:
        helperText = "Rango entre 1 y 29";
        break;
      case 2:
        helperText = "Rango entre 1 y 23";
        break;
      case 1:
        helperText = "Rango entre 1 y 59";
        break;
    }
  }

  $: {
    if ($timeB <= 1) {
      timeB.set(1);
    }

    if ($timeUnitB?.id === 5 && $timeB >= 120) {
      timeB.set(120);
    } else if ($timeUnitB?.id === 4 && $timeB >= 11) {
      timeB.set(11);
    } else if ($timeUnitB?.id === 3 && $timeB >= 29) {
      timeB.set(29);
    } else if ($timeUnitB?.id === 2 && $timeB >= 23) {
      timeB.set(23);
    } else if ($timeUnitB?.id === 1 && $timeB >= 59) {
      timeB.set(59);
    } else if ($timeUnitB?.id === 9 && $timeB !== 999) {
      timeB.set(999);
    }
  }
</script>

<InnerGrid>
  <Cell span={4}>
    <Wrapper>
      <Textfield
        style={config.fullWidth()}
        bind:value={$timeB}
        label="Tiempo"
        type="number"
      />
      {#if helperText !== undefined}
        <Tooltip>{helperText}</Tooltip>
      {/if}
    </Wrapper>
  </Cell>
  <Cell span={8}>
    <InnerGrid>
      <Cell span={2}>
        <Select
          bind:value={$timeUnitB}
          style={config.fullWidth()}
          label="Tiempo id"
          disabled
        >
          {#each ageUnits as item (item.id)}
            <Option value={item}>{item.id}</Option>
          {/each}
        </Select>
      </Cell>
      <Cell span={10}>
        <Select
          bind:value={$timeUnitB}
          label="Tiempo"
          style={config.fullWidth()}
          key={(item) => `${item?.id || ""}`}
        >
          {#each ageUnits as item (item.label)}
            <Option value={item}>{item.label}</Option>
          {/each}
        </Select>
      </Cell>
    </InnerGrid>
  </Cell>
</InnerGrid>
