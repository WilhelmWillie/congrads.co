import React from 'react';

import { Head, Container, Form, FormSection, Label, TextInput, Button } from "../../components";

const New = () => {
  return (
    <div>
      <Head title="congrads.co - create a message for a graduate" />
      <Container>
        <h1>send a congrads.co message</h1>

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
    </div>
  )
};

export default New;
