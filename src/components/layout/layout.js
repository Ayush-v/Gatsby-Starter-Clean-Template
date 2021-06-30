/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { GlobalStyle } from "../styles/GlobalStyles"
import Header from "./header"
import "./layout.css"

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle/>
      <Header />
      <main>{children}</main>
    </>
  )
}
