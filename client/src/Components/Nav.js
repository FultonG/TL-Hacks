import Container from './Container';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none; /* no underline */
  &.active {
    text-decoration: underline;
  }
`;
const Nav = () => {
  return (
    <Container height="10%" justify="space-evenly" align="center">
      {NavLinks.map(link => (
        <StyledNavLink to={link.link} exact activeClassName="active">{link.title}</StyledNavLink>
      ))}
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