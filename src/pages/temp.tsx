import React from 'react';

import { Container, FlexContainer, FlexItem, Button, Form, FormSection, Label, TextInput, Section } from "../components";

const Temp = () => {
  return (
    <Container>
      <Section>
        <FlexContainer justifyBetween>
          <FlexItem basis="65%">
            <h1>Heading 1</h1>
            <p>Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing elit.</a> Ut at nisl fringilla, finibus risus sit amet, maximus nisi. Nulla sit amet elementum neque, vel facilisis eros. Integer finibus suscipit vulputate. Ut justo turpis, laoreet vel ante in, faucibus aliquet sapien. Ut eros eros, semper quis erat sed, ornare ornare nisi. Curabitur non maximus ipsum. Phasellus quis lacus libero. Integer nibh lacus, blandit quis consectetur vel, finibus efficitur nibh. Aliquam ac faucibus dolor. Phasellus volutpat suscipit velit a cursus. Ut id condimentum leo. Donec sed finibus metus, a facilisis eros. Curabitur enim ex, pretium eget mattis vitae, vehicula ut felis. Phasellus suscipit ultrices ligula nec pretium. Integer libero metus, tempus vitae laoreet sed, pretium ut dolor. Etiam eget pellentesque dolor.</p>

            <h2>Heading 2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at nisl fringilla, finibus risus sit amet, maximus nisi. Nulla sit amet elementum neque, vel facilisis eros. Integer finibus suscipit vulputate. Ut justo turpis, laoreet vel ante in, faucibus aliquet sapien. Ut eros eros, semper quis erat sed, ornare ornare nisi. Curabitur non maximus ipsum. Phasellus quis lacus libero. Integer nibh lacus, blandit quis consectetur vel, finibus efficitur nibh. Aliquam ac faucibus dolor. Phasellus volutpat suscipit velit a cursus. Ut id condimentum leo. Donec sed finibus metus, a facilisis eros. Curabitur enim ex, pretium eget mattis vitae, vehicula ut felis. Phasellus suscipit ultrices ligula nec pretium. Integer libero metus, tempus vitae laoreet sed, pretium ut dolor. Etiam eget pellentesque dolor.</p>
          
            <h3>Heading 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at nisl fringilla, finibus risus sit amet, maximus nisi. Nulla sit amet elementum neque, vel facilisis eros. Integer finibus suscipit vulputate. Ut justo turpis, laoreet vel ante in, faucibus aliquet sapien. Ut eros eros, semper quis erat sed, ornare ornare nisi. Curabitur non maximus ipsum. Phasellus quis lacus libero. Integer nibh lacus, blandit quis consectetur vel, finibus efficitur nibh. Aliquam ac faucibus dolor. Phasellus volutpat suscipit velit a cursus. Ut id condimentum leo. Donec sed finibus metus, a facilisis eros. Curabitur enim ex, pretium eget mattis vitae, vehicula ut felis. Phasellus suscipit ultrices ligula nec pretium. Integer libero metus, tempus vitae laoreet sed, pretium ut dolor. Etiam eget pellentesque dolor.</p>
          </FlexItem>

          <FlexItem basis="30%">
            <h3>Heading 4</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at nisl fringilla, finibus risus sit amet, maximus nisi. Nulla sit amet elementum neque, vel facilisis eros. Integer finibus suscipit vulputate. Ut justo turpis, laoreet vel ante in, faucibus aliquet sapien. Ut eros eros, semper quis erat sed, ornare ornare nisi. Curabitur non maximus ipsum. Phasellus quis lacus libero. Integer nibh lacus, blandit quis consectetur vel, finibus efficitur nibh. Aliquam ac faucibus dolor. Phasellus volutpat suscipit velit a cursus. Ut id condimentum leo. Donec sed finibus metus, a facilisis eros. Curabitur enim ex, pretium eget mattis vitae, vehicula ut felis. Phasellus suscipit ultrices ligula nec pretium. Integer libero metus, tempus vitae laoreet sed, pretium ut dolor. Etiam eget pellentesque dolor.</p>
          </FlexItem>
        </FlexContainer>
      </Section>

      <Section direction="row" justifyBetween>
        <Button>Standard Button</Button>
        <Button>Primary Button</Button>
        <Button>Secondary Button</Button>
      </Section>

      <Section>
        <Form>
          <FormSection>
            <Label>First Name</Label>
            <TextInput placeholder="First Name" />
          </FormSection>
          
          <FormSection>
            <Label>Last Name</Label>
            <TextInput placeholder="Last Name" />
          </FormSection>

          <FormSection>
            <Button type="submit">Submit</Button>
          </FormSection>
        </Form>
      </Section>
    </Container>
  )
};

export default Temp;
