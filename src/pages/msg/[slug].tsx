import React from 'react';
import Router from 'next/router';
import fetch from 'isomorphic-unfetch';
import styled from "styled-components";

import { Head, NavBar, Container, Footer, MessageHero, MessagePhoto, MessageBody } from "../../components";

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

      <MessageHero graduateName={graduateName} tagline={tagline} />

      <MessageBody body={body} senderName={senderName} />

      <Container>
        <MemoriesHeader>Memories</MemoriesHeader>

        <MessagePhoto imgSrc="/sam_a.jpg" caption="us during our sophomore fall sammy invite. turtlenecks and tiaras. we thought we were so clouty omfg" />
        <MessagePhoto imgSrc="/sam_b.jpg" caption="us during my 21st birthday. so blessed that you guys gave me such an awesome 21st, i truly love y'all and am so thankful for that day and the events that transpired." />
        <MessagePhoto imgSrc="/sam_c.jpg" caption="europe 2019. legitimately one of those wild college things that i can't wait to tell my kids about. we made some amazing memories that spring break and am blessed to have you as my main m8 during all of it" />
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

const MemoriesHeader = styled.h2`
  font-size: 64px;
  margin-top: 120px;
  text-align: center;
`;

export default Message;
