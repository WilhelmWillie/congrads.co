import styled from 'styled-components';
import is from "styled-is";

const Button = styled.button`
  font-size: 16px;
  background: transparent;
  border-radius: 50px;
  border: 2px solid ${({theme}) => theme.colors.dark};
  padding: 18px 32px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  color: ${({theme}) => theme.colors.dark};

  ${is('primary')`
    background: ${({theme}) => theme.colors.primary};
    border: 2px solid transparent;
    color: #FFFFFF;
  `};

  ${is('large')`
    font-size: 24px;
    padding: 24px 40px;
  `};

  ${is('big')`
    font-size: 20px;
    padding: 20px 36px;
  `};

  &:hover {
    border-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.primary};

    ${is('primary')`
      background: transparent;
      border: 2px solid ${({theme}) => theme.colors.primary};
  `};
  }
`;

export default Button;