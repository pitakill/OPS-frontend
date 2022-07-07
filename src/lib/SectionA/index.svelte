<script>
  import Card, { Content } from "@smui/card";
  import { Cell, InnerGrid } from "@smui/layout-grid";
  import Textfield from "@smui/textfield";

  import Select from "../Select.svelte";
  import InputNumber from "../InputNumber.svelte";
  import Modal from "./Modal.svelte";
  import { ageUnits } from "../../catalogs";
  import {
    a,
    b,
    c,
    d,
    part2,
    causeOfDeath,
    aditionalCode,
    timeA,
    timeUnitA,
    timeB,
    timeUnitB,
    timeC,
    timeUnitC,
    timeD,
    timeUnitD,
  } from "./store";
</script>

<Card>
  <Content class="mdc-typography--body2">
    <InnerGrid>
      <Cell span={12}>
        <h2 class="mdc-typography--headline6" style="margin: 0;">
          Sección A Causas de defunción: Parte 1 y Parte 2
        </h2>
      </Cell>
      <Cell span={12}>
        <Card>
          <Content>
            <InnerGrid>
              <Cell span={12}>
                <h3 class="mdc-typography--headline6" style="margin: 0;">
                  Parte 1: Causa de la muerte
                </h3>
              </Cell>
              <Cell span={9}>
                <Textfield
                  style="width: 100%;"
                  bind:value={$a.selectedText}
                  label="Padecimiento directo"
                />
              </Cell>
              <Cell span={3}>
                <Textfield
                  style="width: 100%;"
                  bind:value={$a.code}
                  label="Código"
                  disabled
                />
              </Cell>
              <Cell span={3}>
                <InputNumber
                  label="Tiempo (número)"
                  value={timeA}
                  unit={timeUnitA}
                />
              </Cell>
              <Cell span={4}>
                <Select label="Tiempo" items={ageUnits} value={timeUnitA} />
              </Cell>
              <Cell span={12}>
                <Modal id={0} />
              </Cell>
              <Cell span={9}>
                <Textfield
                  style="width: 100%;"
                  bind:value={$b.selectedText}
                  label="Debido a"
                />
              </Cell>
              <Cell span={3}>
                <Textfield
                  style="width: 100%;"
                  bind:value={$b.code}
                  label="Código"
                  disabled
                />
              </Cell>
              <Cell span={3}>
                <InputNumber
                  label="Tiempo (número)"
                  value={timeB}
                  unit={timeUnitB}
                />
              </Cell>
              <Cell span={4}>
                <Select label="Tiempo" items={ageUnits} value={timeUnitB} />
              </Cell>
              <Cell span={12}>
                <Modal id={1} />
              </Cell>
              <Cell span={9}>
                <Textfield
                  style="width: 100%;"
                  bind:value={$c.selectedText}
                  label="Debido a"
                />
              </Cell>
              <Cell span={3}>
                <Textfield
                  style="width: 100%;"
                  bind:value={$c.code}
                  label="Código"
                  disabled
                />
              </Cell>
              <Cell span={3}>
                <InputNumber
                  label="Tiempo (número)"
                  value={timeC}
                  unit={timeUnitC}
                />
              </Cell>
              <Cell span={4}>
                <Select label="Tiempo" items={ageUnits} value={timeUnitC} />
              </Cell>
              <Cell span={12}>
                <Modal id={2} />
              </Cell>
              <Cell span={9}>
                <Textfield
                  style="width: 100%;"
                  bind:value={$d.selectedText}
                  label="Debido a"
                />
              </Cell>
              <Cell span={3}>
                <Textfield
                  style="width: 100%;"
                  bind:value={$d.code}
                  label="Código"
                  disabled
                />
              </Cell>
              <Cell span={3}>
                <InputNumber
                  label="Tiempo (número)"
                  value={timeD}
                  unit={timeUnitD}
                />
              </Cell>
              <Cell span={4}>
                <Select label="Tiempo" items={ageUnits} value={timeUnitD} />
              </Cell>
              <Cell span={12}>
                <Modal id={3} />
              </Cell>
            </InnerGrid>
          </Content>
        </Card>
      </Cell>
      <Cell span={12}>
        <Card>
          <Content>
            <InnerGrid>
              <Cell span={12}>
                <h3 class="mdc-typography--headline6" style="margin: 0;">
                  Parte 2
                </h3>
              </Cell>
              <Cell span={9}>
                <Textfield
                  style="width: 100%;"
                  bind:value={$causeOfDeath}
                  label="Causa básica de defunción"
                />
              </Cell>
              <Cell span={3}>
                <Textfield
                  style="width: 100%;"
                  bind:value={$aditionalCode}
                  label="Código"
                />
              </Cell>
            </InnerGrid>
          </Content>
        </Card>
      </Cell>
    </InnerGrid>
  </Content>
</Card>
