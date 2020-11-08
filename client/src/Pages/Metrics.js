import Container from "../Components/Container";
import React, { createRef, useEffect } from "react";
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";
import Card from "../Components/Card";
const Metrics = () => {
  useEffect(() => {
    renderCharts().catch((e) => window.alert(e.message));
  }, []);
  async function renderCharts() {
    const sdk = new ChartsEmbedSDK({
      baseUrl: "https://charts.mongodb.com/charts-tl-hacks-rbiuz",
    });
    Charts.forEach(async (chart) => {
      const Chart = sdk.createChart({
        chartId: chart.id,
      });
      await Chart.render(chart.ref.current);
    });
  }
  return (
    <Container
      align="center"
      justify="center"
      height="90%"
      wrap="wrap"
      overflow
    >
      {Charts.map((chart) => (
        <Card id={chart.id} ref={chart.ref} height="50%"></Card>
      ))}
    </Container>
  );
};

const Charts = [
  { id: "21e0df07-5172-43ef-801d-122c85b97a14", ref: createRef() },
  { id: "e5a71d2b-5ae8-48bd-b2fe-86af7073a78a", ref: createRef() },
  { id: "25b64a0c-963b-4168-9205-2b25e4203abe", ref: createRef() },
  { id: "b0be9ef2-a2ad-43cf-af28-1863a4506136", ref: createRef() },
  { id: "f3046b36-3f35-45ce-8a9c-1d656596a4dd", ref: createRef() },
  { id: "c5111e24-b6fb-46b2-8216-fd2b553eca4a", ref: createRef() },
  { id: "05c0d4cc-1dc1-41fc-b4e4-cfde6593be33", ref: createRef() },
  { id: "801ea7e1-2dab-47bd-b7f7-59a0dadfdb07", ref: createRef() },
  { id: "ffaf082b-19c4-4e80-8e90-943a4ccf4505", ref: createRef() },
  { id: "28e7377b-614b-4e59-b2ad-242fdc5ab309", ref: createRef() },
  { id: "9483e76a-46da-4f26-b9d4-ba09a1df4b2d", ref: createRef() },
  { id: "1eddd769-220d-4663-a3f0-389c8e1f63ce", ref: createRef() },
  { id: "f36f7199-6d78-417e-ad28-b39a2a14f857", ref: createRef() },
];

export default Metrics;
