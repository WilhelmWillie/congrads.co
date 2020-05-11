import styled from 'styled-components';

const Button = styled.button`
  font-size: 16px;
  background: transparent;
  border-radius: 4px;
  border: 1px solid black;
  padding: 18px 32px;
  cursor: pointer;

  &:hover {
    border-color: red;
  }
`;

export default Button;