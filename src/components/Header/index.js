import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Avatar, Badge, Box, Drawer, Hidden, Stack, Typography } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications'
import SupportIcon from '@mui/icons-material/Support'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import MenuIcon from '@mui/icons-material/Menu'
import SideNav from '../SideNav'
import { SIDEBAR } from '../../layout/constants'

const Header = () => {
  const router = useRouter()
  const { pathname } = router
  const { icon } = SIDEBAR.find((e) => e.value === pathname.split('/')[1])

  const [isOpened, setIsOpened] = useState(false)

  return (
    <Box
      sx={{
        backgroundColor: 'white',
        height: '8vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: 'grey.main',
        borderBottom: '1px solid',
        borderColor: 'border.main',
        px: 2,
      }}>
        <Hidden mdDown>
          <Stack direction="row" spacing={1}>
            {icon}
            <Typography>/</Typography>
          </Stack>
        </Hidden>
        <Hidden mdUp>
          <MenuIcon onClick={() => setIsOpened(true)} />
        </Hidden>
        <Stack direction="row" spacing={3} sx={{ alignItems: 'center', }}>
          <SupportIcon />
          <Badge color="yellow" variant="dot" >
            <NotificationsIcon />
          </Badge>
          <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center', }}>
            <Avatar src='human/user.png' sx={{ width: 44, height: 44 }}/>
            <KeyboardArrowDownIcon />
          </Stack>
        </Stack>
        <Drawer open={isOpened} onClose={() => setIsOpened(!isOpened)}>
          <SideNav />
        </Drawer>
    </Box>
  )
}

export default Header