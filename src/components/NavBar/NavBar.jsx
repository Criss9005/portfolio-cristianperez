import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from "styled-components";
import styles from './NavBar.module.css'
const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: red;
  }
`

export default function NavBar() {
  return (
      <nav className={styles.nav }>
      <StyledLink   to="/">Home</StyledLink >
          <StyledLink to="/movies">Movies</StyledLink >
    </nav>
  )
}
