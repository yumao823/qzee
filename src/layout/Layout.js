import React from 'react'
import { Container, Grid, Hidden } from '@mui/material'
import Header from '../components/Header'
import SideNav from '../components/SideNav'

const Layout = ({ children }) => {
  return (
    <Grid container>
      <Hidden mdDown>
        <Grid md={2.4}>
          <SideNav />
        </Grid>
      </Hidden>
      <Grid xs={12} md={9.6}>
        <Header />
        <Container maxWidth="lg">
          {children}
        </Container>
      </Grid>
    </Grid>
  )
}

export default Layout

