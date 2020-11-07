import { useState } from 'react';
import API from '../API';
import Button from '../Components/Button';
import Card from '../Components/Card';
import Container from '../Components/Container';
import Input from '../Components/Input';
import { Title, Text } from '../Components/Text';
import Background from '../svg/Signup-Background.svg';
import {Link, useHistory} from 'react-router-dom';
import {useAppReducer, useAppState} from '../Context/AppContext';

const defaultUser = {
  username: '',
  password: '',
  summonerName: ''
};

const Signup = () => {
  const [data, setData] = useState(defaultUser);
  const [error, setError] = useState(null);
  let history = useHistory();
  let {user} = useAppState();
  let dispatch = useAppReducer();
  if(user){
    history.push('/account');
  }
  const handleDataChange = (val, attr) => {
    if(error !== null){
      setError(null);
    }
    setData(prev => ({ ...prev, [attr]: val }));
  }
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await API.registerUser(data);
      let res = await API.authenticateUser(data);
      dispatch({type: 'Update User', payload: {user: res.data}});
    } catch (e) {
      switch (e.response.status) {
        case 409:
          setError(e.response.data);
          break;
        default:
          console.log(e.message);
      }
    }

  }
  return (
    <Container align="center" justify="center" height="90%">
      <Card height="90%" width="75%" background={`url(${Background})`} direction="column">
        <Title>Register</Title>
        <Container as="form" width="40%" height="40%" justify="space-evenly" align="center" direction="column" onSubmit={handleRegister}>
          <Input placeholder="Username" value={data.username} onChange={(e) => handleDataChange(e.currentTarget.value, 'username')}></Input>
          <Input placeholder="Password" type="password" value={data.password} onChange={(e) => handleDataChange(e.currentTarget.value, 'password')}></Input>
          <Input placeholder="Summoner Name"  value={data.summonerName} onChange={(e) => handleDataChange(e.currentTarget.value, 'summonerName')}></Input>
          <Text as={Link} to="/login">Already have an Account? Log in</Text>
          {error !== null && <p style={{color: 'red'}}>{error}</p>}
          <Button border="1px solid white" background="#030F23" type="submit">Sign up</Button>
        </Container>
      </Card>
    </Container>
  )
}

export default Signup;