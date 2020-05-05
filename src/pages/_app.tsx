import React from 'react'
import NextApp from 'next/app'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import reset from "styled-reset";

const theme = {
  primary: 'green',
}

const GlobalStyles = createGlobalStyle`
  ${reset}
`;

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    )
  }
}