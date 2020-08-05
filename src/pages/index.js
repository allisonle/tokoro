import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import logoImg from "../images/logo.png"
import Nav from "../components/nav"
import SEO from "../components/seo"

const FlexContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`

const Logo = styled.div`
  margin: 64px auto 32px;
  background-image: url(${logoImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 300px;
  height: 50px;
`
const Thumb = styled.div`
  box-sizing: border-box;
  box-shadow: 16px 16px 40px -32px rgba(0,0,0,0.6);
  border-radius: 4px;
  width: calc(33% - 48px);
  height: 280px;
  margin: 24px;
  overflow: hidden;
  img {
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
  }
`

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <Logo />
        <Nav />
        <FlexContainer>
          <StaticQuery
            query={graphql`
              query {
                allStrapiCategory {
                  edges {
                    node {
                      strapiId
                      name
                      cover_img {
                        publicURL
                      }
                    }
                  }
                }
              }
            `}
            render={data =>
              data.allStrapiCategory.edges.map((category, i) => {
                return (
                  <Thumb key={category.node.strapiId}>
                    <Link to={`/category/${category.node.strapiId}`}>
                      <img src={category.node.cover_img.publicURL} alt={category.node.strapiId}/>
                    </Link>
                  </Thumb>
                )
              })
            }
          />
        </FlexContainer>
      </Layout>
    )
  }
}

export default IndexPage
