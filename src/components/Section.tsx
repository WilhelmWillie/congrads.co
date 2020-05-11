import styled from "styled-components";

import { FlexContainer } from "./Flex";

const Section = styled(FlexContainer).attrs({
  direction: "column",
})`
  padding-top: 64px;
  padding-bottom: 64px;
`;

export default Section;