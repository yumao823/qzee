import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import DataUsageIcon from '@mui/icons-material/DataUsage'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled'
import StarIcon from '@mui/icons-material/Star'

const Info = () => (
  <Box sx={{ height: '100%', px: { xs: 0, sm: 2 }, pt: { xs: 4, md: 2 } }}>
    <Grid container rowSpacing={2} sx={{ justifyContent: 'space-between' }}>
      <Grid item xs={5.8} sx={{ backgroundColor: 'yellow.dark', p: 2, borderRadius: 4, }}>
        <DataUsageIcon />
        <Typography sx={{ fontSize: 14 }}>Members in the queue</Typography>
        <Typography variant="h6">35</Typography>
      </Grid>
      <Grid item xs={5.8} sx={{ backgroundColor: 'yellow.dark', p: 2, borderRadius: 4 }}>
        <CalendarMonthIcon />
        <Typography sx={{ fontSize: 14 }}>Bookings today</Typography>
        <Typography variant="h6">23</Typography>
      </Grid>
    </Grid>
    <Box sx={{ backgroundColor: 'grey.dark', p: 2, borderRadius: 4, my: 1 }}>
      <AccessTimeFilledIcon sx={{ color: 'yellow.dark' }} />
      <Typography sx={{ fontSize: 14, color: 'grey.main' }}>Business hours</Typography>
      <Typography variant="h6" sx={{ color: 'white' }}>8:00 - 22:00</Typography>
    </Box>
    <Box sx={{ backgroundColor: 'grey.dark', p: 2, borderRadius: 4 }}>
      <StarIcon sx={{ color: 'yellow.dark' }} />
      <Typography sx={{ fontSize: 14, color: 'grey.main' }}>Staff wellness</Typography>
      <Typography variant="h6" sx={{ color: 'white' }}>4.7</Typography>
    </Box>
  </Box>
)

export default Info