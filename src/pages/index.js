import React from "react"
import { Link } from "gatsby"
import Hero from '../components/Hero'
import Mission from '../components/Mission'
import Contact from '../components/contact/index'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="HOME" />
    <Hero />
    <Mission />
    <Contact />
  </Layout>
);

export default IndexPage
