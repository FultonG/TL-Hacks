import Container from "../Components/Container";
import React, { createRef, useEffect } from 'react';
import "regenerator-runtime/runtime";
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";
const Metrics = () => {
  let chartRef = createRef();
  useEffect(() => {
    renderChart(chartRef).catch((e) => window.alert(e.message));
  })
  async function renderChart(chartRef) {
    const sdk = new ChartsEmbedSDK({
      baseUrl: "https://charts.mongodb.com/charts-tl-hacks-rbiuz"
    });

    const chart = sdk.createChart({
      chartId: "21e0df07-5172-43ef-801d-122c85b97a14"
    });

    await chart.render(chartRef.current);

  }
  return (
    <Container align="center" justify="center" height="90%" ref={chartRef}></Container>
  )
};
export default Metrics;