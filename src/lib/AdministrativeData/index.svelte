<script>
  import { Panel, Header, Content } from "@smui-extra/accordion";
  import LayoutGrid, { Cell, InnerGrid } from "@smui/layout-grid";
  import Textfield from "@smui/textfield";
  import HelperText from "@smui/textfield/helper-text";
  import Select, { Option } from "@smui/select";
  import Tooltip, { Wrapper } from "@smui/tooltip";
  import moment from "moment";

  import config from "../../config";
  import { genders, ageUnits } from "../../catalogs";

  import {
    id,
    gender,
    age,
    ageUnit,
    birthdate,
    deathdate,
    variable1,
    variable2,
  } from "./store";

  let open = true;
  let helperText = undefined;
  let invalid = true;

  const spanDevices = {
    phone: 12,
    tablet: 4,
  };

  $: {
    switch ($ageUnit?.id) {
      case 9:
        age.set(999);
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
    if ($birthdate !== null && $deathdate !== null) {
      const bd = moment($birthdate);
      const dd = moment($deathdate);

      invalid = bd.isAfter(dd);
    }
  }

  $: {
    if ($age <= 1) {
      age.set(1);
    }

    if ($ageUnit?.id === 5 && $age >= 120) {
      age.set(120);
    } else if ($ageUnit?.id === 4 && $age >= 11) {
      age.set(11);
    } else if ($ageUnit?.id === 3 && $age >= 29) {
      age.set(29);
    } else if ($ageUnit?.id === 2 && $age >= 23) {
      age.set(23);
    } else if ($ageUnit?.id === 1 && $age >= 59) {
      age.set(59);
    } else if ($ageUnit?.id === 9 && $age !== 999) {
      age.set(999);
    }
  }
</script>

<Panel bind:open>
  <Header>Datos Administrativos</Header>
  <Content>
    <InnerGrid>
      <Cell {spanDevices}>
        <Textfield style={config.fullWidth()} bind:value={$id} label="ID" />
      </Cell>
      <Cell {spanDevices}>
        <InnerGrid>
          <Cell span={2}>
            <Select
              bind:value={$gender}
              style={config.fullWidth()}
              label="Sexo id"
              disabled
            >
              {#each genders as item (item.id)}
                <Option value={item}>{item.id}</Option>
              {/each}
            </Select>
          </Cell>
          <Cell span={10}>
            <Select
              bind:value={$gender}
              label="Sexo"
              style={config.fullWidth()}
              key={(item) => `${item?.id || ""}`}
            >
              {#each genders as item (item.label)}
                <Option value={item}>{item.label}</Option>
              {/each}
            </Select>
          </Cell>
        </InnerGrid>
      </Cell>
      <Cell {spanDevices}>
        <InnerGrid>
          <Cell span={4}>
            <Wrapper>
              <Textfield
                style={config.fullWidth()}
                bind:value={$age}
                label="Edad"
                type="number"
                disabled={invalid}
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
                  bind:value={$ageUnit}
                  style={config.fullWidth()}
                  label="Edad id"
                  disabled
                >
                  {#each ageUnits as item (item.id)}
                    <Option value={item}>{item.id}</Option>
                  {/each}
                </Select>
              </Cell>
              <Cell span={10}>
                <Select
                  bind:value={$ageUnit}
                  label="Edad"
                  style={config.fullWidth()}
                  key={(item) => `${item?.id || ""}`}
                  disabled={invalid}
                >
                  {#each ageUnits as item (item.label)}
                    <Option value={item}>{item.label}</Option>
                  {/each}
                </Select>
              </Cell>
            </InnerGrid>
          </Cell>
        </InnerGrid>
      </Cell>
      <Cell span={6}>
        <Textfield
          bind:value={$birthdate}
          style={config.fullWidth()}
          label="Fecha de nacimiento"
          type="date"
        />
      </Cell>
      <Cell span={6}>
        <Textfield
          bind:value={$deathdate}
          style={config.fullWidth()}
          label="Fecha de defunción"
          type="date"
          disabled={$birthdate === null}
          {invalid}
        />
      </Cell>
      <Cell span={6}>
        <Textfield
          bind:value={$variable1}
          style={config.fullWidth()}
          label="Variable 1"
        />
      </Cell>
      <Cell span={6}>
        <Textfield
          bind:value={$variable2}
          style={config.fullWidth()}
          label="Variable 2"
        />
      </Cell>
    </InnerGrid>
  </Content>
</Panel>
