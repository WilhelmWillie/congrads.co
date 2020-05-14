import styled from "styled-components";
import Link from "next/link";

import { Container, FlexContainer, FlexItem, Button } from "./";

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <FlexContainer justifyBetween>
          <FlexItem>
            <p>&copy; Congrads.co - All rights reserved.</p>
          </FlexItem>

          <FlexItem>
            <p>Built by Wilhelm Willie.</p>
          </FlexItem>
        </FlexContainer>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: ${({theme}) => theme.colors.lightBg};
  padding: 80px 0 120px;
`;

export default Footer;