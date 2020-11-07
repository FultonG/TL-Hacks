import styled from 'styled-components';

export const Bold = styled.p`
  margin: 0;
  font-weight: 900;
  font-size: 20px;
`;

export const Text = styled.p`
font-weight: 500;
font-size: 24px;
line-height: 22px;
color: #FFFFFF;
margin: 0;
`;

export const Title = styled.h1`
  font-family: "Bebas Neue";
  font-size: 80px;
  letter-spacing: 3px;
  color: #FFFFFF;
  margin: 10px;
`;

export const Description = styled(Text)`
  font-family: "Bebas Neue";
  font-size: 16px;
  letter-spacing: 2px;
  font-weight: 200;
  text-align: left;
  width: 80%;
`;