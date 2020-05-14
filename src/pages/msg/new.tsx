import React from 'react';
import styled from 'styled-components';

import { Head, NavBar, Container, Footer, Form, FormSection, Label, TextInput, Button, FlexItem } from "../../components";

const New = () => {
  return (
    <>
      <Head title="Congrads - Create a message for a graduate" />
      <NavBar />
      <StyledContainer>
        <NewMessageDescription>
          <h1>Create a message</h1>
          <p>Create a personalized message to your favorite graduate! Include photos, memories, and more in your message to add a personal touch.</p>
        </NewMessageDescription>

        <Form>
          <FormSection>
            <Label>Graduate's Name</Label>
            <TextInput placeholder="Jane Doe" />
          </FormSection>

          <FormSection>
            <Label>Graduate's School</Label>
            <TextInput placeholder="University of Southern California" />
          </FormSection>

          <FormSection>
            <Label>Message Tagline</Label>
            <TextInput placeholder="An awesome graduate who deserves the world" />
          </FormSection>

          <FormSection>
            <Label>Your Name</Label>
            <TextInput placeholder="John Doe" />
          </FormSection>

          <FormSection>
            <Label>Your Message</Label>
            <TextInput as="textarea" rows={4} placeholder="Congrats on your graduation..." />
          </FormSection>

          <ActionSection justifyBetween>
            <FlexItem basis="48%"><Button big>Preview</Button></FlexItem>
            <FlexItem basis="48%"><Button primary big>Submit</Button></FlexItem>
          </ActionSection>
        </Form>
      </StyledContainer>
      <Footer />
    </>
  )
};

const StyledContainer = styled(Container)`
  padding-bottom: 128px;
`;

const NewMessageDescription = styled.div`
  padding: 48px 0 64px;

  p {
    font-size: 24px;
    line-height: 36px;
  }
`;

const ActionSection = styled(FormSection)`
  flex-direction: row;

  button {
    width: 100%;
  }
`;

export default New;
