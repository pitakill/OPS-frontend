<script>
  import { Panel, Header, Content } from "@smui-extra/accordion";
  import { Cell, InnerGrid } from "@smui/layout-grid";
  import Select, { Option } from "@smui/select";
  import Textfield from "@smui/textfield";

  import {
    spanDevicesFiveColumn,
    spanDevicesSixColumn,
    spanDevicesSevenColumn,
  } from "../../styles";
  import config from "../../config";
  import { basicResponses } from "../../catalogs";
  import {
    surgery,
    surgeryDate,
    surgeryReason,
    autopsy,
    usedFoundings,
  } from "./store";
</script>

<Panel>
  <Header>Sección B: Otra información médica</Header>
  <Content>
    <InnerGrid>
      <Cell spanDevices={spanDevicesSixColumn}>
        <h4>¿Se practicó alguna cirugía en las últimas 4 semanas?</h4>
      </Cell>
      <Cell spanDevices={spanDevicesSixColumn}>
        <InnerGrid>
          <Cell span={2}>
            <Select bind:value={$surgery} style={config.fullWidth()} disabled>
              {#each basicResponses as item (item.id)}
                <Option value={item}>{item.id}</Option>
              {/each}
            </Select>
          </Cell>
          <Cell span={10}>
            <Select
              bind:value={$surgery}
              style={config.fullWidth()}
              key={(item) => `${item?.id || ""}`}
            >
              {#each basicResponses as item (item.label)}
                <Option value={item}>{item.label}</Option>
              {/each}
            </Select>
          </Cell>
        </InnerGrid>
      </Cell>
      <Cell spanDevices={spanDevicesSixColumn}>
        <h4>Si la respuesta es Sí, especifique la fecha de la cirugía</h4>
      </Cell>
      <Cell spanDevices={spanDevicesSixColumn}>
        <Textfield
          bind:value={$surgeryDate}
          style={config.fullWidth()}
          type="date"
          disabled={$surgery?.id !== 1}
        />
      </Cell>
      <Cell spanDevices={spanDevicesFiveColumn}>
        <h4>
          Si la respuesta es Sí, especifique el motivo de la cirugía (enfermedad
          o afección)
        </h4>
      </Cell>
      <Cell spanDevices={spanDevicesSevenColumn}>
        <Textfield
          bind:value={$surgeryReason}
          style={config.fullWidth()}
          disabled={$surgery?.id !== 1}
        />
      </Cell>
      <Cell spanDevices={spanDevicesSixColumn}>
        <h4>¿Se solicitó una autopsia?</h4>
      </Cell>
      <Cell spanDevices={spanDevicesSixColumn}>
        <InnerGrid>
          <Cell span={2}>
            <Select bind:value={$autopsy} style={config.fullWidth()} disabled>
              {#each basicResponses as item (item.id)}
                <Option value={item}>{item.id}</Option>
              {/each}
            </Select>
          </Cell>
          <Cell span={10}>
            <Select
              bind:value={$autopsy}
              style={config.fullWidth()}
              key={(item) => `${item?.id || ""}`}
            >
              {#each basicResponses as item (item.label)}
                <Option value={item}>{item.label}</Option>
              {/each}
            </Select>
          </Cell>
        </InnerGrid>
      </Cell>
      <Cell spanDevices={spanDevicesSixColumn}>
        <h4>
          Si la respuesta es Sí, ¿fueron los hallazgos utilizados en la
          certificación?
        </h4>
      </Cell>
      <Cell spanDevices={spanDevicesSixColumn}>
        <InnerGrid>
          <Cell span={2}>
            <Select
              bind:value={$usedFoundings}
              style={config.fullWidth()}
              disabled
            >
              {#each basicResponses as item (item.id)}
                <Option value={item}>{item.id}</Option>
              {/each}
            </Select>
          </Cell>
          <Cell span={10}>
            <Select
              bind:value={$usedFoundings}
              style={config.fullWidth()}
              key={(item) => `${item?.id || ""}`}
              disabled={$autopsy?.id !== 1}
            >
              {#each basicResponses as item (item.label)}
                <Option value={item}>{item.label}</Option>
              {/each}
            </Select>
          </Cell>
        </InnerGrid>
      </Cell>
    </InnerGrid>
  </Content>
</Panel>
