import React from 'react'
import NextApp from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from "../styles/global";
import theme from "../styles/theme";

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