import Card from "../Components/Card";
import Container from "../Components/Container";
import { Title, Text } from "../Components/Text";
import Team from "../svg/TL.svg";
import What from "../svg/what.png";
import Who from "../svg/who.png";
import Why from "../svg/why.png";

const Home = () => {
  return (
    <Container align="center" direction="column" height="90%">
      <Container
        justify="center"
        align="center"
        direction="column"
        height="60%"
      >
        <Title>Esports Training Camp XD</Title>
        <Text>Train and Prepare Like a Olympian ???</Text>
      </Container>
      <Container justify="space-evenly" align="center" height="35%">
        <Container
          width="30%"
          direction="column"
          justify="center"
          align="center"
        >
          <Card
            height="80%"
            margin="10px"
            radius="25px"
            hover
            cursor="pointer"
            background={`url(${Who})  no-repeat`}
          ></Card>
          <Text>Who</Text>
        </Container>
        <Container
          width="30%"
          direction="column"
          justify="center"
          align="center"
        >
          <Card
            height="80%"
            margin="10px"
            radius="25px"
            background={`url(${What}) no-repeat`}
            hover
            cursor="pointer"
          ></Card>
          <Text>What</Text>
        </Container>
        <Container
          width="30%"
          direction="column"
          justify="center"
          align="center"
        >
          <Card
            height="80%"
            margin="10px"
            radius="25px"
            hover
            cursor="pointer"
            background={`url(${Why}) no-repeat`}
          ></Card>
          <Text>Why</Text>
        </Container>
      </Container>
    </Container>
  );
};

export default Home;
