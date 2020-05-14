import styled from "styled-components";
import { Container } from "./";

const MessageHero = ({ graduateName, tagline }) => {
  return (
    <Wrapper>
      <Container>
          <h1>Congrats {graduateName}!</h1>
          <h2>USC Class of 2020</h2>
          <p>{tagline}</p>
        </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 250px 0;
  background: #CB356B;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #BD3F32, #CB356B);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #BD3F32, #CB356B); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: #FFFFFF;
  text-align: center;

  p {
    font-size: 24px;
    margin-top: 24px;
  }
`;

export default MessageHero;