import Container from './Container';
import { NavLink, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../svg/TL-Logo.svg';
import Button from './Button';
import { useContext, useEffect } from 'react';
import { useAppReducer, useAppState, UserContext } from '../Context/AppContext';
import { Text } from './Text';
const StyledNavLink = styled(NavLink)`
  font-family: 'Open Sans', sans-serif;
  letter-spacing: 2px;
  font-weight:  600;
  color: white;
  text-decoration: none; /* no underline */
  &.active {
    text-decoration: underline;
  }
`;

const Brand = styled.img`
  width: 75px;
  height: 75px;
`;

const Nav = () => {
  let { user } = useAppState();
  let dispatch = useAppReducer();
  let history = useHistory();
  
  return (
    <Container align="center" height="10%" padding="15px 10px 0px 15px">
      <Brand src={Logo}></Brand>
      {/*but how gross are those padding percentages LOL */}
      <Container justify="space-evenly" align="center" width="70%" padding="0% 8% 0% 30%">
        {NavLinks.map(link => (
          <StyledNavLink to={link.link} exact activeClassName="active">{link.title}</StyledNavLink>
        ))}
      </Container>
      {user ?
        <Container width="25%" justify="space-evenly" align="center">
          <Text>{user.summonerName}</Text>
          <Button onClick={() => dispatch({type: 'Update User', payload: {user: undefined}})}>Log out</Button>
        </Container>
        :
        <Container width="25%" justify="space-evenly" align="center">
          <Button onClick={() => history.push('/login')} border="1px solid white" background="#030F23">Login</Button>
          <Button onClick={() => history.push('/signup')}>Sign up</Button>
        </Container>
      }
    </Container>
  )
}

const NavLinks = [
  {
    title: 'Home',
    link: '/'
  },
  {
    title: 'Events',
    link: '/events'
  },
  {
    title: 'Metrics',
    link: '/metrics'
  },
  {
    title: 'Account',
    link: '/account'
  }
];

export default Nav;