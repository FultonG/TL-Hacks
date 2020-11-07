import Card from "../Components/Card";
import Container from "../Components/Container";
import { Title, Text } from "../Components/Text";
import Team from '../svg/TL.svg';
import React from 'react';
import "regenerator-runtime/runtime";
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";
import { contains } from "jquery";
const Metrics = () => {
  
  async function renderChart() {
    const sdk = new ChartsEmbedSDK({
      baseUrl: "https://charts.mongodb.com/charts-tl-hacks-rbiuz"
    });
  
    const chart = sdk.createChart({
      chartId: "21e0df07-5172-43ef-801d-122c85b97a14"
    });
    await chart.render(document.getElementById("chart"));
  
  }
  renderChart().catch((e) => window.alert(e.message));
return (
 <Container align="center" justify="center" height="90%"></Container>
)
};
  export default Metrics;