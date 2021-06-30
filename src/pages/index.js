import * as React from "react"
import HeroSection from "../components/sections/HeroSection"

import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroSection />
  </Layout>
)

export default IndexPage
