import React from 'react';
import Router from 'next/router';
import fetch from'isomorphic-unfetch';

const Message = ({ message }) => {
  const {
    senderName,
    graduateName,
    body,
    tagline,
  } = message;

  return (
    <div>
      <h1>Congrats {graduateName}!</h1>
      <p>{tagline}</p>

      <hr/>

      <p>{body}</p>

      <p>- {senderName}</p>
    </div>
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

export default Message;
