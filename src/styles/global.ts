import { createGlobalStyle } from 'styled-components';
import reset from "styled-reset";

import typography from "./typography";

const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  ${typography}
`;

export default GlobalStyles;