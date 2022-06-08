import React from 'react'
import { Box, Grid, IconButton, Stack, Typography } from '@mui/material'
import GroupIcon from '@mui/icons-material/Group'
import SettingsIcon from '@mui/icons-material/Settings'
import { TABLE_OVERVIEWS, OVERVIEW_STATUS } from './constants'
import { getBgColor } from './util'

const TableItem = ({ data }) => (
  <Box sx={{ backgroundColor: getBgColor(data.status), borderRadius: 4, p: 2 }}>
    <Typography variant="h6" sx={{ fontWeight: 500 }}>{data.id}</Typography>
    <Stack direction="row" spacing={1} sx={{ alignItems: 'center', color: 'grey.main' }}>
      <GroupIcon sx={{ fontSize: 16, mb: 0.5 }} />
      <Typography variant="caption">{data.users}</Typography>
    </Stack>
  </Box>
)

const TableOverview = () => (
  <>
    <Box
      sx={{
        height: { md: '8vh' },
        display: 'flex',
        alignItems: { xs: 'start', md: 'center' },
        flexDirection: { xs: 'column', md: 'row' },
        p: 2,
        borderBottom: '1px solid',
        borderColor: 'border.main',
    }}
    >
      <Typography variant="h5" sx={{ fontWeight: 700, mr: 'auto', mb: { xs: 2, md: 0 } }}>Table Overview (45)</Typography>
      {OVERVIEW_STATUS.map((item) => (
        <Box sx={{ display: 'flex', alignItems: 'center', mr: 1 }}>
          <Box sx={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: item.color, mr: 0.5 }} />
          <Typography variant="caption">{item.label}</Typography>
        </Box>
      ))}
      <IconButton variant="outlined" color="warning" sx={{ border: '1px solid', ml: 'auto' }}>
        <SettingsIcon sx={{ color: 'grey.main' }} />
      </IconButton>
    </Box>
    <Grid container spacing={2} sx={{ height: { md: '34vh' }, overflow: 'auto', p: 2, pt: 0, mt: 0 }}>
      {TABLE_OVERVIEWS.map((item) => (
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <TableItem data={item} />
        </Grid>
      ))}
    </Grid>
  </>
)

export default TableOverview