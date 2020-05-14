import React from 'react';
import Router from 'next/router';
import fetch from 'isomorphic-unfetch';
import styled from "styled-components";

import { Head, NavBar, Container, Footer, FlexContainer, FlexItem } from "../../components";

const Message = ({ message }) => {
  const {
    senderName,
    graduateName,
    body,
    tagline,
  } = message;

  return (
    <>
      <Head title="Congrads - a message for Sam Kushell" />
      
      <NavBar />

      <MessageHero>
        <Container>
          <h1>Congrats {graduateName}!</h1>
          <h2>USC Class of 2020</h2>
          <p>{tagline}</p>
        </Container>
      </MessageHero>

      <MessageBody>
        <Container>
          <h2>Message from Willie</h2>
          <MessageCard>
            <p>{body}</p>
            <From>- {senderName}</From>
          </MessageCard>
        </Container>
      </MessageBody>

      <Container>
        <MemoriesHeader>Memories</MemoriesHeader>

        <PhotoSection justifyBetween>
          <Photo basis="40%">
            <PhotoImg src="/sam_a.jpg" />
          </Photo>

          <Caption basis="50%">
            <p>us during our sophomore fall sammy invite. turtlenecks and tiaras. we thought we were so clouty omfg</p>
          </Caption>
        </PhotoSection>

        <PhotoSection justifyBetween rowReverse>
          <Photo basis="40%">
            <PhotoImg src="/sam_b.jpg" />
          </Photo>

          <Caption basis="50%">
            <p>us during my 21st birthday. so blessed that you guys gave me such an awesome 21st, i truly love y'all and am so thankful for that day and the events that transpired.</p>
          </Caption>
        </PhotoSection>

        <PhotoSection justifyBetween>
          <Photo basis="40%">
            <PhotoImg src="/sam_c.jpg" />
          </Photo>

          <Caption basis="50%">
            <p>europe 2019. legitimately one of those wild college things that i can't wait to tell my kids about. we made some amazing memories that spring break and am blessed to have you as my main m8 during all of it</p>
          </Caption>
        </PhotoSection>
      </Container>

      <Footer />
    </>
  )
};

Message.getInitialProps = async ({req, query}) => {
  const host = process.env.URL || 'http://localhost:3000';
  const route = `message/${query.slug}`;
  const url = req ? `${host}/api/${route}` : `/api/${route}`;
  const res = await fetch(url);

  if (res.status !== 200) {
    if (req) {
      req.res.writeHead(404, {
        Location: '/'
      });
      req.res.end();
    } else {
      Router.push('/')
    }
  }

  const { data } = await res.json();

  return {
    message: data
  }
}

const MessageHero = styled.div`
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

const MessageBody = styled.div`
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

const PhotoSection = styled(FlexContainer)`
  padding: 120px 0;
`;

const MemoriesHeader = styled.h2`
  font-size: 64px;
  margin-top: 120px;
  text-align: center;
`;

const Photo = styled(FlexItem)``;

const PhotoImg = styled.img`
  width: 100%;
  border-radius: 16px;
`;

const Caption = styled(FlexItem)`
  p {
    border-left: 8px solid #54504D;
    padding-left: 16px;
    font-size: 24px;
    line-height: 36px;
  }
`;

export default Message;
