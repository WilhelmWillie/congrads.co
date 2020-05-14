import styled from "styled-components";
import Link from "next/link";

import { Container, Button, FlexContainer, FlexItem} from "./";

import GraduationCapSVG from "../assets/grad_cap.svg";

const Hero = () => {
  return (
    <Wrapper>
      <Container>
        <FlexContainer justifyBetween>
          <FlexItem basis="52%">
            <HeroText>
              <h1>Send some love to your favorite graduate.</h1>
              <p>Send a personalized message to a graduate and/or add to their digital yearbook</p>
            </HeroText>

            <Link href="/msg/new" passHref>
              <ActionButton primary big as="a">♥ Send Love</ActionButton>
            </Link>
          </FlexItem>

          <FlexItem basis="40%">
            <GradCap src={GraduationCapSVG} />
          </FlexItem>
        </FlexContainer>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 120px 0 180px;
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
`;

const GradCap = styled.img`
  width: 100%;
`;

export default Hero;