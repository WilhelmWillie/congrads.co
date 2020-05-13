import styled from "styled-components";

import { Container } from "./Container";

const NavBar = () => {
  return (
    <Wrapper>
      <Container>
        congrads.co
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 24px 0;
`;

export default NavBar;