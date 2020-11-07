import { useState } from 'react';
import API from '../API';
import Button from '../Components/Button';
import Card from '../Components/Card';
import Container from '../Components/Container';
import Input from '../Components/Input';
import { Title } from '../Components/Text';
import Background from '../svg/Signup-Background.svg';

const defaultUser = {
  username: '',
  password: ''
};

const Login = () => {
  const [user, setUser] = useState(defaultUser);
  const [error, setError] = useState(null);
  const handleUserChange = (val, attr) => {
    if(error !== null){
      setError(null);
    }
    setUser(prev => ({ ...prev, [attr]: val }));
  }
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      let res = await API.authenticateUser(user);
      console.log(res.data);
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
          <Input placeholder="Username" value={user.username} onChange={(e) => handleUserChange(e.currentTarget.value, 'username')}></Input>
          <Input placeholder="Password" type="password" value={user.password} onChange={(e) => handleUserChange(e.currentTarget.value, 'password')}></Input>
          {error !== null && <p style={{color: 'red'}}>{error}</p>}
          <Button border="1px solid white" background="#030F23" type="submit">Log in</Button>
        </Container>
      </Card>
    </Container>
  )
}

export default Login;