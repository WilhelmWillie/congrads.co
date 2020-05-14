import styled from 'styled-components';

import { FlexContainer, FlexItem } from "./Flex";

const Form = styled.form`
  width: 100%;
`;

const FormSection = styled(FlexContainer)`
  flex-direction: column;
  padding: 16px 0;
  flex-basis: 100%;
`;

const Label = styled.label`
  margin-bottom: 16px;
`;

const TextInput = styled.input.attrs(props => ({
  type: "text"
}))`
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid black;
  padding: 12px;
`;

export {
  Form,
  FormSection,
  Label,
  TextInput,
}
