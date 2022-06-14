<script>
  import { Panel, Header, Content } from "@smui-extra/accordion";
  import LayoutGrid, { Cell, InnerGrid } from "@smui/layout-grid";
  import Textfield from "@smui/textfield";

  import Modal from "./Modal.svelte";
  import TimeA from "./TimeA.svelte";
  import TimeB from "./TimeB.svelte";
  import TimeC from "./TimeC.svelte";
  import TimeD from "./TimeD.svelte";
  import { a, b, c, d, part2, causeOfDeath, aditionalCode } from "./store";
  import config from "../../config";

  const phone = 12;

  const spanDevicesOneColumn = {
    phone,
    tablet: 1,
    desktop: 1,
  };

  const spanDevicesTwoColumn = {
    phone,
    tablet: 2,
    desktop: 2,
  };

  const spanDevicesFourColumn = {
    phone,
    tablet: 4,
    desktop: 4,
  };

  const spanDevicesFiveColumn = {
    phone,
    tablet: 5,
    desktop: 5,
  };

  const spanDevicesSixColumn = {
    phone,
    tablet: 6,
    desktop: 6,
  };
</script>

<Panel>
  <Header>Sección A Causas de defunción: Parte 1 y Parte 2</Header>
  <Content>
    <InnerGrid>
      <Cell spanDevices={spanDevicesOneColumn}>
        <h4>1</h4>
      </Cell>
      <Cell style={config.center()} spanDevices={spanDevicesFourColumn}
        >Causas de la defunción</Cell
      >
      <Cell style={config.center()} spanDevices={spanDevicesFourColumn}>
        Tiempo desde el inicio hasta la muerte
      </Cell>
      <Cell style={config.center()} spanDevices={spanDevicesOneColumn}
        >Códigos CIE-11</Cell
      >
      <Cell spanDevices={spanDevicesTwoColumn} />
      <Cell spanDevices={spanDevicesOneColumn}>
        <h4>
          Anote la enfermedad o condición que condujo directamente a la muerte
        </h4>
      </Cell>
      <Cell spanDevices={spanDevicesFourColumn}>
        <Textfield
          style={config.fullWidth()}
          bind:value={$a.selectedText}
          disabled
        />
      </Cell>
      <Cell spanDevices={spanDevicesFourColumn}>
        <TimeA />
      </Cell>
      <Cell spanDevices={spanDevicesOneColumn}>
        <Textfield style={config.fullWidth()} bind:value={$a.code} disabled />
      </Cell>
      <Cell spanDevices={spanDevicesTwoColumn}>
        <Modal id={0} />
      </Cell>
      <Cell spanDevices={spanDevicesOneColumn}>
        <h4>Informe la cadena de eventos</h4>
      </Cell>
      <Cell spanDevices={spanDevicesFourColumn}>
        <Textfield
          style={config.fullWidth()}
          bind:value={$b.selectedText}
          disabled
        />
      </Cell>
      <Cell spanDevices={spanDevicesFourColumn}>
        <TimeB />
      </Cell>
      <Cell spanDevices={spanDevicesOneColumn}>
        <Textfield style={config.fullWidth()} bind:value={$b.code} disabled />
      </Cell>
      <Cell spanDevices={spanDevicesTwoColumn}>
        <Modal id={1} />
      </Cell>
      <Cell spanDevices={spanDevicesOneColumn}>
        <h4>Informe la cadena de eventos</h4>
      </Cell>
      <Cell spanDevices={spanDevicesFourColumn}>
        <Textfield
          style={config.fullWidth()}
          bind:value={$c.selectedText}
          disabled
        />
      </Cell>
      <Cell spanDevices={spanDevicesFourColumn}>
        <TimeC />
      </Cell>
      <Cell spanDevices={spanDevicesOneColumn}>
        <Textfield style={config.fullWidth()} bind:value={$c.code} disabled />
      </Cell>
      <Cell spanDevices={spanDevicesTwoColumn}>
        <Modal id={2} />
      </Cell>
      <Cell spanDevices={spanDevicesOneColumn}>
        <h4>
          Anote la causa básica de defunción de la línea más baja utilizada
        </h4>
      </Cell>
      <Cell spanDevices={spanDevicesFourColumn}>
        <Textfield
          style={config.fullWidth()}
          bind:value={$d.selectedText}
          disabled
        />
      </Cell>
      <Cell spanDevices={spanDevicesFourColumn}>
        <TimeD />
      </Cell>
      <Cell spanDevices={spanDevicesOneColumn}>
        <Textfield style={config.fullWidth()} bind:value={$d.code} disabled />
      </Cell>
      <Cell spanDevices={spanDevicesTwoColumn}>
        <Modal id={3} />
      </Cell>
      <Cell spanDevices={spanDevicesFourColumn}>
        <h4>
          2 Otras condiciones importantes que contribuyen a la muerte (los
          tiempos pueden incluirse entre paréntesis después de cada afección)
        </h4>
      </Cell>
      <Cell spanDevices={spanDevicesFiveColumn}>
        <Textfield
          style={config.fullWidth()}
          bind:value={$part2.selectedText}
          disabled
        />
      </Cell>
      <Cell spanDevices={spanDevicesOneColumn}>
        <Textfield
          style={config.fullWidth()}
          bind:value={$part2.code}
          disabled
        />
      </Cell>
      <Cell spanDevices={spanDevicesTwoColumn}>
        <Modal id={4} />
      </Cell>
      <Cell spanDevices={spanDevicesSixColumn}>
        <Textfield
          style={config.fullWidth()}
          bind:value={$causeOfDeath}
          label="Causa básica de defunción"
        />
      </Cell>
      <Cell spanDevices={spanDevicesSixColumn}>
        <Textfield
          style={config.fullWidth()}
          bind:value={$aditionalCode}
          label="Código adicional"
        />
      </Cell>
    </InnerGrid>
  </Content>
</Panel>
