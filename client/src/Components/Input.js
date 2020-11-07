import styled from 'styled-components';

const Input = styled.input`
  border: none;
  border-radius: 7px;
  outline: none;
  width: 100%;
  height: 40px;
  padding: 10px;

  &::placeholder {
    color: #AEAEAE;
    font-family: 'BebasNeueRegular';
    font-size: 18px;
  }
`;

export default Input;