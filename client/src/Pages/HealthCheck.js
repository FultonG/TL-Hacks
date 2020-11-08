import { Title } from "../Components/Text";
import Container from '../Components/Container';
import Card from '../Components/Card';
import Input from "../Components/Input";
import Button from "../Components/Button";
import {useParams} from 'react-router-dom';
const HealthCheck = () => {
  let {id} = useParams();
  return (
    <Container height="90%" overflow justify="center" align="center">
      <Card width="75%" height="95%" direction="row" background="#000B1D" margin="10px" padding="40px">
        <Title>Health Check</Title>
        <Container as="form" direction="column" width="75%" height="80%" justify="space-evenly">
          <Input placeholder="How much water have you had today?"></Input>
          <Input placeholder="Are you hungry?"></Input>
          <Input placeholder="Are you sleepy ?"></Input>
          <Input placeholder="On a scale from 1 to 10 how are you feeling today ?"></Input>
          <Input as="textarea" style={{resize: 'none'}} placeholder="Notes"></Input>
          <div style={{textAlign: 'center'}}>
            <Button>Submit</Button>
          </div>
        </Container>
      </Card>
    </Container>
  )
}

export default HealthCheck;