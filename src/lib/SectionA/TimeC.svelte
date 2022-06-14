<script>
  import { Cell, InnerGrid } from "@smui/layout-grid";
  import Select, { Option } from "@smui/select";
  import Textfield from "@smui/textfield";
  import Tooltip, { Wrapper } from "@smui/tooltip";

  import config from "../../config";
  import { timeC, timeUnitC } from "./store";
  import { ageUnits } from "../../catalogs";

  let helperText = undefined;

  $: {
    switch ($timeUnitC?.id) {
      case 9:
        timeC.set(999);
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
    if ($timeC <= 1) {
      timeC.set(1);
    }

    if ($timeUnitC?.id === 5 && $timeC >= 120) {
      timeC.set(120);
    } else if ($timeUnitC?.id === 4 && $timeC >= 11) {
      timeC.set(11);
    } else if ($timeUnitC?.id === 3 && $timeC >= 29) {
      timeC.set(29);
    } else if ($timeUnitC?.id === 2 && $timeC >= 23) {
      timeC.set(23);
    } else if ($timeUnitC?.id === 1 && $timeC >= 59) {
      timeC.set(59);
    } else if ($timeUnitC?.id === 9 && $timeC !== 999) {
      timeC.set(999);
    }
  }
</script>

<InnerGrid>
  <Cell span={4}>
    <Wrapper>
      <Textfield
        style={config.fullWidth()}
        bind:value={$timeC}
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
          bind:value={$timeUnitC}
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
          bind:value={$timeUnitC}
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
