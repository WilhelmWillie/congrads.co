import styled from "styled-components";
import Link from "next/link";

import { Container, FlexContainer, FlexItem } from "./";

const NavBar = () => {
  return (
    <Wrapper>
      <Container>
        <FlexContainer justifyBetween alignCenter>
          <FlexItem>
            <Logo>congrads</Logo>
          </FlexItem>

          <FlexItem>
            <FlexContainer>
              <MenuItem>
                <Link href="/featured">
                  featured
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="/msg/new">
                  send a message
                </Link>
              </MenuItem>
            </FlexContainer>
          </FlexItem>
        </FlexContainer>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 32px 0;
`;

const Logo = styled.a`
  font-size: 24px;
  font-weight: 500;
  color: #262626;
`;

const MenuItem = styled(FlexItem)`
  padding: 0 18px;

  a {
    font-weight: 300;
    text-decoration: none;
    color: #3C3C3C;
  }
`;

export default NavBar;