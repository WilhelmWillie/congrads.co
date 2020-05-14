import React from 'react';

import { Head, NavBar, Container, Footer, Form, FormSection, Label, TextInput, Button } from "../../components";

const New = () => {
  return (
    <>
      <Head title="Congrads - Create a message for a graduate" />
      <NavBar />
      <Container>
        <h1>Create a message</h1>
        <p>Create a personalized message to your favorite graduate! Include photos, memories, and more in your message to add a personal touch.</p>

        <Form>
          <FormSection>
            <Label>Graduate's Name</Label>
            <TextInput />
          </FormSection>

          <FormSection>
            <Label>Graduate's School</Label>
            <TextInput />
          </FormSection>

          <FormSection>
            <Label>Your Message</Label>
            <TextInput as="textarea" rows={4}/>
          </FormSection>

          <FormSection>
            <Button>Submit</Button>
          </FormSection>
        </Form>
      </Container>
      <Footer />
    </>
  )
};

export default New;
