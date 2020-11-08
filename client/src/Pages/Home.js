import Card from "../Components/Card";
import Container from "../Components/Container";
import { Title, Text } from "../Components/Text";
import Team from "../svg/TL.svg";
import Contract from "../svg/contract.svg"
import Trophy from "../svg/trophy.svg"
import Graph from "../svg/Graph.svg"



const Home = () => {
  return (
    <Container align="center" direction="column" height="90%">
      <Container
        justify="center"
        align="center"
        direction="column"
        height="60%"
      >
        <Title size="200px">E-volve</Title>
        <Text size="40px">Train like the pros, become the pro.</Text>
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
            width="70%"
            margin="10px"
            radius="25px" 
            background={`url(${Graph})  no-repeat`}
            shadow = "0 0 0 rgba(0,0,0,0)"
          ></Card>
          <Text>Hi! We're a group of people who want to raise your league performance to its pinnacle height.</Text>
        </Container>
        <Container
          width="30%"
          direction="column"
          justify="center"
          align="center"
        >
          <Card
            height="80%"
            width="50%"
            margin="20px"
            radius="25px"
            background={`url(${Trophy}) no-repeat`}
            shadow = "0 0 0 rgba(0,0,0,0)"
          >
          </Card>
          <Text>We have a three-fold approach:
Bring in metrics from gameplay, your lifestyle, and your mental state to help you achieve your goals and get ready for the big day.
</Text>
        </Container>
        <Container
          width="30%"
          direction="column"
          justify="center"
          align="center"
        >
          <Card
            height="80%"
            width="70%"
            margin="25px"
            radius="25px"
            background={`url(${Team}) no-repeat`}
            shadow = "0 0 0 rgba(0,0,0,0)"
          ></Card>
          <Text>Fight camps have been around for years to help fighters train for their big day. So why don't we apply their philosophy and apply to eSports? We believe our approach will help you achieve your goals faster, healthier and safer!</Text>
        </Container>
      </Container>
    </Container>
  );
};

export default Home;
