import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import API from "../API";
import { Title, Text } from "../Components/Text";
import Container from '../Components/Container';
import { useAppState, useAppReducer } from "../Context/AppContext";
import styled from 'styled-components';

const ProfileIcon = styled.img`
  border-radius: 10px;
`;
const Account = () => {
  let { user } = useAppState();
  let dispatch = useAppReducer();
  let history = useHistory();
  if (typeof user === 'undefined') {
    history.push('/signup');
  }
  useEffect(() => {
    if (user) {
      fetchSummonerInfo(user);
    }
  }, []);

  const fetchSummonerInfo = async (user) => {
    try {
      let res = await API.getSummonerInfo(user.summonerName, user.token);
      dispatch({ type: 'Update User', payload: { user: { ...user, ...res.data } } })
    } catch (e) {
      console.log(e.message);
    }

  }
  return (
    <Container height="90%">
      <Container align="center" direction="column" overflow padding="10px">
        {user?.profileIconId && <ProfileIcon src={`https://opgg-static.akamaized.net/images/profile_icons/profileIcon${user.profileIconId}.jpg`} />}
        <Title>{user?.summonerName}</Title>
        <Text>Level {user?.summonerLevel}</Text>
      </Container>
    </Container>
  )
}

export default Account;