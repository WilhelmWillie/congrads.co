import styled from "styled-components";

import { Container } from "./";

const NavBar = () => {
  return (
    <Wrapper>
      <Container>
        congrads.co

        send love
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 32px 0;
`;

export default NavBar;