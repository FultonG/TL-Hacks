import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import API from "../API";
import { Title, Text } from "../Components/Text";
import Container from '../Components/Container';
import Card from '../Components/Card';
import { useAppState, useAppReducer } from "../Context/AppContext";
import styled from 'styled-components';
import Button from '../Components/Button';

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
  console.log(user);

  const fetchSummonerInfo = async (user) => {
    try {
      let res = await API.getSummonerInfo(user.summonerName, user.token);
      dispatch({ type: 'Update User', payload: { user: { ...user, ...res.data } } })
    } catch (e) {
      console.log(e.message);
    }
  }

  const handleMatchInfo = async (id) => {
    try {
      let res = await API.getMatchInfoById(id, user.token);
      console.log(res.data);
    } catch(e) {
      console.log(e.message);
    }
  }

  return (
    <Container height="90%">
      <Container align="center" direction="column" padding="10px">
        {user?.profileIconId && <ProfileIcon src={`https://opgg-static.akamaized.net/images/profile_icons/profileIcon${user.profileIconId}.jpg`} />}
        <Title>{user?.summonerName}</Title>
        <Text>Level {user?.summonerLevel}</Text>
        <Container direction="column" align="center" overflow>
          {user?.matches?.map(match => (
            <Card width="75%" height="60%" direction="row" justify="flex-start" background="#000B1D" margin="10px" padding="10px">
              <div>
                <img src={`http://ddragon.leagueoflegends.com/cdn/10.22.1/img/champion/${match.champion.image.full}`} />
                <Text style={{ width: '100%', textAlign: 'center' }}>{match.champion.name}</Text>
              </div>
              <div>
                <Text style={{ margin: '0px 10px' }}>{new Date(match.timestamp).toDateString()}</Text>
                <Text style={{ margin: '0px 10px' }}>{findPosition(match.lane, match.role)}</Text>
              </div>
              <Button onClick={(e) => handleMatchInfo(match.gameId)}>Match Info</Button>
            </Card>
          ))}
        </Container>
      </Container>
    </Container>
  )
}

function findPosition(lane, role) {
  return PositionMatrix[lane][role]
}

const PositionMatrix = {
  MID: {
    SOLO: "Middle",
    DUO: "Middle",
    DUO_CARRY: "Middle"
  },
  TOP: {
    SOLO: "Top"
  },
  JUNGLE: {
    NONE: "Jungle"
  },
  BOTTOM: {
    DUO_CARRY: "Bottom",
    DUO_SUPPORT: "Support",
    DUO: 'Bottom'
  },
  NONE: {
    DUO_SUPPORT: 'Support'
  }
}

export default Account;