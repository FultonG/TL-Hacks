import Button from '../Components/Button';
import Card from '../Components/Card';
import Container from '../Components/Container';
import Input from '../Components/Input';
import { Title } from '../Components/Text';
import Background from '../svg/Signup-Background.svg';
const Signup = () => {
  return (
    <Container align="center" justify="center" height="90%">
      <Card height="75%" width="75%" background={`url(${Background})`} direction="column">
        <Title>Register</Title>
        <Container as="form" width="40%" height="40%" justify="space-evenly" align="center" direction="column">
          <Input placeholder="Username"></Input>
          <Input placeholder="Password"></Input>
          <Button border="1px solid white" background="#030F23">Sign up</Button>
        </Container>
      </Card>
    </Container>
  )
}

export default Signup;