import styled from "styled-components";
import Link from "next/link";

import { Container, Button, FlexContainer, FlexItem} from "./";

const Hero = () => {
  return (
    <Wrapper>
      <Container>
        <FlexContainer>
          <FlexItem basis="60%">
            <HeroText>
              <h1>send some love to your favorite graduate.</h1>
              <p>send a personalized message to a graduate and add to their digital yearbook</p>
            </HeroText>

            <Link href="/msg/new" passHref>
              <ActionButton as="a">send love</ActionButton>
            </Link>
          </FlexItem>

          <FlexItem basis="39%">
          </FlexItem>
        </FlexContainer>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 100px 0;
`;

const HeroText = styled.div`
  h1 {
    margin-bottom: 24px;
  }

  p {
    font-size: 24px;
    line-height: 36px;
  }
`;

const ActionButton = styled(Button)`
  margin-top: 32px;
  color: #FFFFFF;
  background: #489FB5;
  border-radius: 50px;
  border: none;
  font-size: 20px;
`;

export default Hero;