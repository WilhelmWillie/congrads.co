import styled from "styled-components";
import { Container, FlexContainer, FlexItem } from "./";

const MessageBody = ({ body, senderName }) => {
  return (
    <Wrapper>
    <Container>
        <h2>Message from {senderName}</h2>
        <MessageCard>
          <p>{body}</p>
          <From>- {senderName}</From>
        </MessageCard>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 200px 0;
  background: #FAF3ED;

  h2 {
    text-align: center;
    margin-bottom: 64px;
    font-size: 80px;
  }
`;

const MessageCard = styled.div`
  background: #FFFFFF;
  padding: 64px;
  border-radius: 12px;
  max-width: 600px;
  margin: 0 auto;

  p {
    font-size: 24px;
    line-height: 32px;
  }
`;

const From = styled.p`
  font-weight: 600;
  text-align: right;
  margin-top: 32px;
`;


export default MessageBody;