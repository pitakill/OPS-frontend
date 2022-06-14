<script>
  import { onMount } from "svelte";
  import moment from "moment";
  import Accordion, { Panel } from "@smui-extra/accordion";
  import LayoutGrid, { Cell, InnerGrid } from "@smui/layout-grid";
  import Select, { Option } from "@smui/select";
  import Textfield from "@smui/textfield";

  import Title from "./lib/Title.svelte";
  import AdministrativeData from "./lib/AdministrativeData/index.svelte";
  import SectionA from "./lib/SectionA/index.svelte";

  onMount(() => {
    moment.locale("es-mx");
  });
</script>

<LayoutGrid>
  <Cell span={12}>
    <Title />
  </Cell>
  <Cell span={12}>
    <Accordion>
      <AdministrativeData />
      <SectionA />
    </Accordion>
  </Cell>
</LayoutGrid>
