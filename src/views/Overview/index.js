import React from 'react'
import { Grid, Stack } from '@mui/material'
import TableOverview from './TableOverview'
import Info from './Info'
import StaffShift from './StaffShift'
import Communication from './Communications'

const Overview = () => {
  return (
    <Stack sx={{ height: '100%', justifyContent: 'space-between' }}>
      <Grid container sx={{ height: { md: '42vh' } }}>
        <Grid
          item
          xs={12}
          sm={6}
          md={8.5}
          sx={{
            border: '1px solid',
            borderColor: 'border.main',
            borderRadius: 4,
          }}
        >
          <TableOverview />
        </Grid>
        <Grid item xs={12} sm={6} md={3.5}>
          <Info />
        </Grid>
      </Grid>
      <Grid container sx={{ height: { md: '42vh' }, mb: { xs: 4, md: 0 } }}>
        <Grid item xs={12} sm={6} md={8.5}>
          <StaffShift />
        </Grid>
        <Grid item xs={12} sm={6} md={3.5}>
          <Communication />
        </Grid>
      </Grid>
    </Stack>
  )
}

export default Overview