import styled from "styled-components";

import { FlexContainer, FlexItem } from "./Flex";

const Container = styled.div`
  max-width: 1024px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`;

const Row = styled(FlexContainer)`
`;

const Column = styled(FlexItem)`
`;

export {
  Container,
  Row,
  Column
}