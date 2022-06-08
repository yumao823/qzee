import React from 'react'
import { Grid } from '@mui/material'
import Header from '../components/Header'
import SideNav from '../components/SideNav'

const Layout = ({ children }) => {
  return (
    <Grid container>
      <Grid xs={12} sm={2.4}>
        <SideNav />
      </Grid>
      <Grid xs={12} sm={9.6}>
        <Header />
        {children}
      </Grid>
    </Grid>
  )
}

export default Layout

