<script>
  import { Cell, InnerGrid } from "@smui/layout-grid";
  import Select, { Option } from "@smui/select";
  import Textfield from "@smui/textfield";
  import Tooltip, { Wrapper } from "@smui/tooltip";

  import config from "../../config";
  import { timeD, timeUnitD } from "./store";
  import { ageUnits } from "../../catalogs";

  let helperText = undefined;

  $: {
    switch ($timeUnitD?.id) {
      case 9:
        timeD.set(999);
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
    if ($timeD <= 1) {
      timeD.set(1);
    }

    if ($timeUnitD?.id === 5 && $timeD >= 120) {
      timeD.set(120);
    } else if ($timeUnitD?.id === 4 && $timeD >= 11) {
      timeD.set(11);
    } else if ($timeUnitD?.id === 3 && $timeD >= 29) {
      timeD.set(29);
    } else if ($timeUnitD?.id === 2 && $timeD >= 23) {
      timeD.set(23);
    } else if ($timeUnitD?.id === 1 && $timeD >= 59) {
      timeD.set(59);
    } else if ($timeUnitD?.id === 9 && $timeD !== 999) {
      timeD.set(999);
    }
  }
</script>

<InnerGrid>
  <Cell span={4}>
    <Wrapper>
      <Textfield
        style={config.fullWidth()}
        bind:value={$timeD}
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
          bind:value={$timeUnitD}
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
          bind:value={$timeUnitD}
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
