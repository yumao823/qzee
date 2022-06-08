import React, { useState } from 'react'
import { Box, IconButton, Stack, Tabs, Tab, Typography } from '@mui/material'
import DataUsageIcon from '@mui/icons-material/DataUsage'
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'
import { MESSAGES } from './constants'

const Message = () => (
  <Stack spacing={2}>
    {MESSAGES.map((item) => (
      <Box key={`mg-${item.id}`} sx={{ backgroundColor: 'grey.light', p: 2, borderRadius: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <IconButton variant="contained" sx={{ backgroundColor: 'yellow.dark' }} >
            <DataUsageIcon />
          </IconButton>
          <Typography sx={{ fontSize: '13px', fontWeight: 700, ml: 0.5, mr: 'auto' }}>{item.author}</Typography>
          <Typography sx={{ fontSize: '11px', color: 'grey.main' }}>{item.time}</Typography>
        </Box>
        <Typography variant="caption">{item.content}</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 1 }}>
          <Stack direction="row" spacing={1} sx={{ color: 'grey.main', alignItems: 'center' }}>
            <ThumbDownAltIcon  />
            <Typography variant="caption">{item.dislike}</Typography>
            <ThumbUpIcon />
            <Typography variant="caption">{item.like}</Typography>
          </Stack>
          <Stack direction="row" spacing={1}>
            <CheckIcon  />
            <CloseIcon />
          </Stack>
        </Box>
      </Box>
    ))}
  </Stack>
)

const Alerts = () => (
  <Typography>
    Alerts
  </Typography>
)

const Communication = () => {
  const [active, setActive] = useState('message')

  return (
    <Box sx={{ height: '100%', border: '1px solid', borderColor: 'border.main', borderRadius: 4, mx: { xs: 0, sm: 2 }, my: { xs: 2, md: 0 } }}>
      <Tabs
        value={active}
        onChange={(e, v) => setActive(v)}
        variant="fullWidth"
        TabIndicatorProps={{ style: {background: '#ffe68e' }} }
        textColor="black"
        sx={{ borderBottom: '1px solid', borderColor: 'border.main', height: { md: '8vh' } }}
      >
        <Tab
          value="alerts"
          label="Alerts"
          icon={
            <Box sx={{ backgroundColor: 'yellow.dark', borderRadius: '50%', px: 1, py: 0.5 }}>
              <Typography variant="caption" sx={{ color: 'black' }}>12</Typography>
            </Box>
          }
          iconPosition="end"
        />
        <Tab
          value="message"
          label="Message"
          icon={
            <Box sx={{ backgroundColor: 'yellow.dark', borderRadius: '50%', px: 1, py: 0.5 }}>
              <Typography variant="caption" sx={{ color: 'black' }}>23</Typography>
            </Box>
          }
          iconPosition="end"
        />
      </Tabs>
      <Box sx={{ height: { xs: '60vh', md: '34vh'}, overflow: 'auto', p: 2 }}>
        {active === 'message' ? (
          <Message />
        ) : (
          <Alerts />
        )}
      </Box>
    </Box>
  )
}

export default Communication