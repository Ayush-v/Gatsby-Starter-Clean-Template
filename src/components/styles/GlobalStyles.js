import { createGlobalStyle } from "styled-components"
import { themes } from "./ColorStyles"

export const GlobalStyle = createGlobalStyle`
body {
  background: ${themes.light.backgroundColor};
  color: ${themes.light.text1};

  @media (prefers-color-scheme: dark) {
    background: ${themes.dark.backgroundColor};
    color: ${themes.dark.text1};
  }
}
`
