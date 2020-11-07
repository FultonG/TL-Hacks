import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import API from '../API';
import Button from '../Components/Button';
import Card from '../Components/Card';
import Container from '../Components/Container';
import Input from '../Components/Input';
import { Title } from '../Components/Text';
import { useAppReducer, useAppState } from '../Context/AppContext';
import Background from '../svg/Signup-Background.svg';

const defaultUser = {
  username: '',
  password: ''
};

const Login = () => {
  const [data, setData] = useState(defaultUser);
  const [error, setError] = useState(null);
  let history = useHistory();
  let {user} = useAppState();
  if(user){
    history.push('/account');
  }
  let dispatch = useAppReducer();
  const handleDataChange = (val, attr) => {
    if(error !== null){
      setError(null);
    }
    setData(prev => ({ ...prev, [attr]: val }));
  }
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      let res = await API.authenticateUser(data);
      dispatch({type: 'Update User', payload: {user: res.data}});
    } catch (e) {
      switch (e.response.status) {
        case 404:
        case 401:
          setError(e.response.data);
          break;
        default:
          console.log(e.message);
      }
    }

  }
  return (
    <Container align="center" justify="center" height="90%">
      <Card height="75%" width="75%" background={`url(${Background})`} direction="column">
        <Title>Login</Title>
        <Container as="form" width="40%" height="40%" justify="space-evenly" align="center" direction="column" onSubmit={handleRegister}>
          <Input placeholder="Username" value={data.username} onChange={(e) => handleDataChange(e.currentTarget.value, 'username')}></Input>
          <Input placeholder="Password" type="password" value={data.password} onChange={(e) => handleDataChange(e.currentTarget.value, 'password')}></Input>
          {error !== null && <p style={{color: 'red'}}>{error}</p>}
          <Button border="1px solid white" background="#030F23" type="submit">Log in</Button>
        </Container>
      </Card>
    </Container>
  )
}

export default Login;