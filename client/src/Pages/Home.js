import Card from "../Components/Card";
import Container from "../Components/Container";
import { Title, Text } from "../Components/Text";
import Team from '../svg/TL.svg';

const Home = () => {
  return (
    <Container align="center" direction="column">
      <Container justify="center" align="center" direction="column" height="60%">
        <Title>Esports Training Camp XD</Title>
        <Text>Insert Slogan Here ???</Text>
      </Container>
      <Container justify="space-evenly" align="center" height="40%">
        <Container width="30%" direction="column" justify="center" align="center">
          <Card height="80%" margin="10px" radius="25px" hover cursor="pointer"></Card>
          <Text>Placeholder</Text>
        </Container>
        <Container width="30%" direction="column" justify="center" align="center">
          <Card height="80%" margin="10px" radius="25px" background={`url(${Team}) no-repeat center center`} hover cursor="pointer"></Card>
          <Text>Placeholder</Text>
        </Container>
        <Container width="30%" direction="column" justify="center" align="center">
          <Card height="80%" margin="10px" radius="25px" hover cursor="pointer"></Card>
          <Text>Placeholder</Text>
        </Container>
      </Container>
    </Container>
  )
};

export default Home;