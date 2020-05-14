import { css } from 'styled-components';

const Typography = css`
  body {
    font-family: 'Jost', sans-serif;
    font-size: 16px;
    color: ${({theme}) => theme.colors.dark};
  }

  h1 {
    font-size: 48px;
    font-weight: 700;
    line-height: 64px;
  }

  h2 {
    font-size: 36px;
    font-weight: 700;
    line-height: 48px;
  }

  h3 {
    font-size: 28px;
    font-weight: 500;
    line-height: 36px;
  }

  h4 {
    font-size: 24px;
    font-weight: 400;
    line-height: 28x;
  }

  p {
    font-size: 16px;
    font-weight: 300;
    line-height: 20px;
  }

  a {
    color: ${({theme}) => theme.colors.primary};
  }
`;

export default Typography;