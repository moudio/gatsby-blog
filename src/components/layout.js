import React from "react"
import Header from "../components/header"
import Footer from "./footer"
function layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default layout