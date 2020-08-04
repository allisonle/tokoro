/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import "./layout.css"
import bgImage from "../images/bg.jpg"

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${bgImage});
  background-size: cover;
  position: absolute;
`

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.wrapperRef = React.createRef()
  }

  componentDidMount() {
    this.initBgEffect()
  }

  initBgEffect() {
    const movementStrength = 25
    const height = movementStrength / window.innerHeight
    const width = movementStrength / window.innerWidth
    const wrapper = this.wrapperRef.current
    if (wrapper) {
      wrapper.addEventListener('mousemove', e => {
        const pageX = e.pageX - (window.innerWidth / 2)
        const pageY = e.pageY - (window.innerHeight / 2)
        const newX = width * pageX * -1 - 25
        const newY = height * pageY * -1 - 25
        wrapper.style.backgroundPosition = `${newX}px ${newY}px`
      })
    }
  }

  render() {
    const { children } = this.props
    return (
      <>
        <Wrapper ref={this.wrapperRef}>
          <main>{children}</main>
        </Wrapper>
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
