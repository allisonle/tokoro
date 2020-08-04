import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import logoImg from "../images/logo.png"
import SEO from "../components/seo"

const Logo = styled.div`
  margin: 32px auto;
  background-image: url(${logoImg});
  background-repeat: no-repeat;
  background-size: contain;
  width: 300px;
  height: 50px;
`

class IndexPage extends React.Component {
  componentDidMount() {
    this.initMovingBg()
  }

  initMovingBg() {
    const strength = 25
    const h = strength / window.innerHeight
    const w = strength / window.innerWidth
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <Logo />
        <StaticQuery
          query={graphql`
            query {
              allStrapiCategory {
                edges {
                  node {
                    strapiId
                    name
                  }
                }
              }
            }
          `}
          render={data =>
            data.allStrapiCategory.edges.map((category, i) => {
              return (
                <li key={category.node.strapiId}>
                  <Link to={`/category/${category.node.strapiId}`}>
                    {category.node.name}
                  </Link>
                </li>
              )
            })
          }
        />
      </Layout>
    )
  }
}

export default IndexPage
