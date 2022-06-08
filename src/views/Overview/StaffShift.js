import React from 'react'
import { Avatar, Badge, Button, Box, Grid, Typography } from '@mui/material'
import TimerIcon from '@mui/icons-material/Timer'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import MapIcon from '@mui/icons-material/Map'
import SettingsIcon from '@mui/icons-material/Settings'
import { STAFF_SHIFTS } from './constants'

const StaffShift = () => {
  return (
    <>
      <Box sx={{ height: { md: '6vh' }, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: { xs: 'column', md: 'row' }, mt: { xs: 4, md: 0 }, mb: { xs: 4, md: 2 } }}>
        <Typography variant="h4" sx={{ fontWeight: '500' }}>Staff on shift (8)</Typography>
        <Button variant="contained" color="warning" startIcon={<SettingsIcon />} sx={{ backgroundColor: 'yellow.dark', borderRadius: 8 }}>
          Employee settings
        </Button>
      </Box>
      <Grid container spacing={2} sx={{ height: { md: '36vh' }, overflow: 'auto', pb: { xs: 2, lg: 0 } }}>
        {STAFF_SHIFTS.map((item) => (
          <Grid item xs={12} md={6} lg={3}>
            <Box sx={{ backgroundColor: item.active ? 'green.light' : 'yellow.light', borderRadius: 4, p: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <Badge color={item.online ? 'green' : 'light'} variant="dot">
                  <Avatar src={item.avatar} sx={{ width: 52, height: 52 }} />
                </Badge>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <TimerIcon sx={{ color: 'grey.main' }} />
                  <Typography sx={{ fontSize: 14, fontWeight: '700' }}>{item.time}</Typography>
                  <MoreVertIcon />
                </Box>
              </Box>
              <Typography sx={{ fontWeight: '500' }}>{item.name}</Typography>
              <Typography sx={{ fontSize: 13, color: 'grey.main' }}>{item.role}</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <MapIcon sx={{ color: 'grey.main' }} />
                <Typography sx={{ fontSize: 13 }}>{item.address}</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default StaffShift