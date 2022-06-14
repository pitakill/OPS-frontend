<script>
  import { Cell, InnerGrid } from "@smui/layout-grid";
  import Select, { Option } from "@smui/select";
  import Textfield from "@smui/textfield";
  import Tooltip, { Wrapper } from "@smui/tooltip";

  import config from "../../config";
  import { timeA, timeUnitA } from "./store";
  import { ageUnits } from "../../catalogs";

  let helperText = undefined;

  $: {
    switch ($timeUnitA?.id) {
      case 9:
        timeA.set(999);
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
    if ($timeA <= 1) {
      timeA.set(1);
    }

    if ($timeUnitA?.id === 5 && $timeA >= 120) {
      timeA.set(120);
    } else if ($timeUnitA?.id === 4 && $timeA >= 11) {
      timeA.set(11);
    } else if ($timeUnitA?.id === 3 && $timeA >= 29) {
      timeA.set(29);
    } else if ($timeUnitA?.id === 2 && $timeA >= 23) {
      timeA.set(23);
    } else if ($timeUnitA?.id === 1 && $timeA >= 59) {
      timeA.set(59);
    } else if ($timeUnitA?.id === 9 && $timeA !== 999) {
      timeA.set(999);
    }
  }
</script>

<InnerGrid>
  <Cell span={4}>
    <Wrapper>
      <Textfield
        style={config.fullWidth()}
        bind:value={$timeA}
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
          bind:value={$timeUnitA}
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
          bind:value={$timeUnitA}
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
