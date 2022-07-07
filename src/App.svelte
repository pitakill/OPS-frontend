<script>
  import { onMount } from "svelte";
  import moment from "moment";
  import Card, { Content } from "@smui/card";
  import LayoutGrid, { Cell } from "@smui/layout-grid";
  import Select, { Option } from "@smui/select";
  import Textfield from "@smui/textfield";
  import TopAppBar, { Row, Section, Title } from "@smui/top-app-bar";
  import "@material/typography/dist/mdc.typography.min.css";

  import AdministrativeData from "./lib/AdministrativeData/index.svelte";
  import SectionA from "./lib/SectionA/index.svelte";
  import SectionB from "./lib/SectionB/index.svelte";

  import "./styles.css";

  onMount(() => {
    moment.locale("es-mx");
  });
</script>

<TopAppBar variant="static">
  <Row>
    <Section>
      <Title>Certificado de defunción internacional</Title>
    </Section>
  </Row>
</TopAppBar>
<LayoutGrid align="center" fixedColumnWidth>
  <Cell spanDevices={{ phone: 12, tablet: 12, desktop: 6 }}>
    <Card>
      <Content>
        <AdministrativeData />
        <SectionA />
        <SectionB />
      </Content>
    </Card>
  </Cell>
</LayoutGrid>
