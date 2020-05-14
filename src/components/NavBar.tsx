import styled from "styled-components";
import Link from "next/link";

import { Container, FlexContainer, FlexItem, Button } from "./";

const NavBar = () => {
  return (
    <Wrapper>
      <Container>
        <FlexContainer justifyBetween alignCenter>
          <FlexItem>
            <Link href="/" passHref>
              <Logo>Congrads</Logo>
            </Link>
          </FlexItem>

          <FlexItem>
            <FlexContainer alignCenter>
              <MenuItem>
                <Link href="/msg/new" passHref>
                  <Button as="a">Send a message</Button>
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
  font-weight: 900;
  border-bottom: 4px solid ${({theme}) => theme.colors.primary};
  padding-bottom: 4px;
  text-decoration: none;
  color: ${({theme}) => theme.colors.dark};
`;

const MenuItem = styled(FlexItem)`
  padding: 0 18px;

  a {
    font-weight: 400;
    text-decoration: none;
    color: ${({theme}) => theme.colors.dark};
    transition: 0.1s all;
    
    &:hover {
      color: ${({theme}) => theme.colors.primary};
    }
  }
`;

export default NavBar;