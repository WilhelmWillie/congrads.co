import styled from 'styled-components';

import { FlexContainer, FlexItem } from "./Flex";

const Form = styled.form``;

const FormSection = styled(FlexContainer).attrs(props => ({
  direction: "column"
}))`
  padding: 12px 0;
`;

const Label = styled.label``;

const TextInput = styled.input.attrs(props => ({
  type: "text"
}))``;

export {
  Form,
  FormSection,
  Label,
  TextInput,
}
