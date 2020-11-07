import Container from "../Components/Container";
import React, { createRef, useEffect } from "react";
import "regenerator-runtime/runtime";
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";
import { card } from "react-bootstrap";
const Metrics = () => {
  const ChartsId = [
    { csId: "21e0df07-5172-43ef-801d-122c85b97a14" },
    { caloriesId: "e5a71d2b-5ae8-48bd-b2fe-86af7073a78a" },
    { waterIntakeId: "25b64a0c-963b-4168-9205-2b25e4203abe" },
    { numOfBreaksId: "b0be9ef2-a2ad-43cf-af28-1863a4506136" },
    { lenOfBreaksId: "f3046b36-3f35-45ce-8a9c-1d656596a4dd" },
    { sleepId: "c5111e24-b6fb-46b2-8216-fd2b553eca4a" },
    { gpmId: "05c0d4cc-1dc1-41fc-b4e4-cfde6593be33" },
    { kdaId: "801ea7e1-2dab-47bd-b7f7-59a0dadfdb07" },
    { vsId: "ffaf082b-19c4-4e80-8e90-943a4ccf4505" },
    { soloKillsId: "28e7377b-614b-4e59-b2ad-242fdc5ab309" },
    { teamKillsId: "9483e76a-46da-4f26-b9d4-ba09a1df4b2d" },
  ];

  let chartRef = createRef();
  useEffect(() => {
    renderChart(chartRef).catch((e) => window.alert(e.message));
  });
  async function renderChart(chartRef) {
    const sdk = new ChartsEmbedSDK({
      baseUrl: "https://charts.mongodb.com/charts-tl-hacks-rbiuz",
    });

    const Chart = sdk.createChart({
      chartId: listItems.values,
    });
    await Chart.render(chartRef.current);
  }
  return (
    <Container
      align="center"
      justify="center"
      height="90%"
      ref={chartRef}
    ></Container>
  );
};
export default Metrics;
