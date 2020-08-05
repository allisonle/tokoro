/**
 * Shared Nav component.
 */

import React from "react"
import styled from "styled-components"

const List = styled.ul`
  margin: 24px auto;
  display: flex;
  justify-content: space-between;
  width: 50%;
  li {
    margin: 0;
    padding: 0;
    list-style-type: none;
    a {
      transition: all 0.2s ease;
      text-decoration: none;
      color: #464443;
      font-weight: 500;
      font-family: 'Euclid Circular', sans-serif;
      &:hover {
        border-bottom: 3px solid #ecb84f;
      }
    }
  }
`

function Nav() {
  return (
    <List>
      <li><a href="/">Home</a></li>
      <li><a href="/categories">Categories</a></li>
      <li><a href="/neighborhoods">Neighborhoods</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
    </List>
  )
}

export default Nav
