import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import API from "../API";
import { Title } from "../Components/Text";
import Container from '../Components/Container';
const { useAppState } = require("../Context/AppContext")

const Account = () => {
  let { user } = useAppState();
  let history = useHistory();
  if (typeof user === 'undefined') {
    history.push('/signup');
  }
  useEffect(() => {
    if(user){
      fetchSummonerInfo(user);
    }
  }, []);

  const fetchSummonerInfo = async (user) => {
    try{
      let res = await API.getSummonerInfo(user.summonerName, user.token);
      console.log(res.data);
    } catch(e){
      console.log(e.message);
    }
    
  }
  return (
    <Container height="90%">
      <Container align="center" direction="column" overflow>
        <Title>{user?.summonerName}</Title>
      </Container>
    </Container>
  )
}

export default Account;