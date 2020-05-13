import styled from "styled-components";

import { Container } from "./Container";

const Hero = () => {
  return (
    <Wrapper>
      <Container>
        <h1>send some love to your favorite graduate</h1>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 240px 0;
  background: #6A82FB;
`;

export default Hero;