import styled from 'styled-components';

const Button = styled.button`
  ${({margin}) => margin && `margin: ${margin};`}
  color: white;
  ${({background}) => background ? `background: ${background};` : 'background: #152345;'}
  border-radius: 5px;
  padding: 0px 25px 0px 25px;
  margin: 0px 10px 0px 0px;
  height: 25px;
  ${({border}) => border ? `border: ${border};` : 'border: 0;'}
  font-size: 14px;
  &:hover {
    cursor: pointer;
  }
  &:disabled {
    background: #012e3b4a;
  }
`;

export default Button;