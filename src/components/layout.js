/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import React from 'react'
import Navbar from './nav/Navbar'
import Timeline from './Timeline/Timeline'
// import Timeline from './TimelineComponent/Timeline'
import "./layout.css"
import Footer from './footer/footer'

function Layout() {
  return (
    <>

      <Navbar />
      <Timeline />
      <br />
      <Footer />
      {/* <Timeline /> */}
    </>
  )
}




export default Layout
