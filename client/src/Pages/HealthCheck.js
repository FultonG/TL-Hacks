import { Title, Text } from "../Components/Text";
import Container from '../Components/Container';
import Card from '../Components/Card';
import Input from "../Components/Input";
import Button from "../Components/Button";
import { useHistory, useParams } from 'react-router-dom';
import { useState } from "react";
import { useAppState } from "../Context/AppContext";
import API from "../API";
const initialData = {
  waterDrank: "",
  hungry: "",
  sleepy: "",
  mentalHealthScore: "",
  notes: ""
}

const HealthCheck = () => {
  let { id } = useParams();
  let {user} = useAppState();
  let history = useHistory();
  const [data, setData] = useState(initialData);
  const handleDataChange = (val, attr) => {
    setData(prev => ({ ...prev, [attr]: val }))
  }
  const handleSubmit = async e => {
    var isTrueSet = (val) => (val === 'true');
    e.preventDefault();
    let checkResults = {
      uId: id,
      waterDrank: parseInt(data.waterDrank),
      hungry: isTrueSet(data.hungry),
      sleepy: isTrueSet(data.sleepy),
      mentalHealthScore: parseInt(data.mentalHealthScore),
      notes: data.notes,
      summonerName: user.summonerName
    }
    console.log(checkResults);
    try {
      let res = API.addHealthCheck(checkResults, user.token);
      console.log(res.data);
      history.push('/account');
    } catch(e) {
      console.log(e.message);
    }
  }
  return (
    <Container height="90%" overflow justify="center" align="center">
      <Card width="75%" height="95%" direction="row" background="#000B1D" margin="10px" padding="40px">
        <Title>Health Check</Title>
        <Container as="form" direction="column" width="75%" height="80%" justify="space-evenly" onSubmit={handleSubmit}>
          <Input as="select" value={data.waterDrank} onChange={(e) => handleDataChange(e.target.value, 'waterDrank')}>
            <Text as="option" value="" disabled>How much water have you had today?</Text>
            {Array.from({ length: 36 }, (_, i) => i + 1).map(num => <Text as="option" id={num} value={num}>{num} Oz</Text>)}
          </Input>
          <Input as="select" value={data.hungry} onChange={(e) => handleDataChange(e.target.value, 'hungry')}>
            <Text as="option" value="" disabled>Are you hungry?</Text>
            <Text as="option" value={true}>Yes</Text>
            <Text as="option" value={false}>No</Text>
          </Input>
          <Input as="select" value={data.sleepy} onChange={(e) => handleDataChange(e.target.value, 'sleepy')}>
            <Text as="option" value="" disabled selected>Are you sleepy?</Text>
            <Text as="option" value={true}>Yes</Text>
            <Text as="option" value={false}>No</Text>
          </Input>
          <Input as="select" value={data.mentalHealthScore} onChange={(e) => handleDataChange(e.target.value, 'mentalHealthScore')}>
            <Text as="option" value="" disabled selected>On a Scale from 1 to 10, How are you feeling today?</Text>
            {Array.from({ length: 10 }, (_, i) => i + 1).map(num => <Text as="option" id={num} value={num}>{num}</Text>)}
          </Input>
          <Input as="textarea" style={{ resize: 'none' }} placeholder="Notes" value={data.notes} onChange={(e) => handleDataChange(e.target.value, 'notes')}></Input>
          <div style={{ textAlign: 'center' }}>
            <Button type="submit">Submit</Button>
          </div>
        </Container>
      </Card>
    </Container>
  )
}

export default HealthCheck;