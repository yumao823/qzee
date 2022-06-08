import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Box, Stack, Typography } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { SIDEBAR } from '../../layout/constants'

const SideNav = () => {
  const router = useRouter()
  const { pathname } = router
  const path = pathname.split('/')[1]

  return (
    <Box sx={{ backgroundColor: 'grey.dark', minHeight: '100vh', py: 4 }}>
      <Stack direction="row" spacing={2} sx={{ justifyContent: 'center', alignItems: 'end', mb: 5 }}>
        <img src="logo.svg"></img>
        <Typography variant="body2" sx={{ color: 'yellow.dark' }}>owners</Typography>
      </Stack>
      {SIDEBAR.map((item) => {
        const active = path === item.value
        return (
          <Link href={`/${item.value}`}>
            <Stack
              direction="row"
              sx={{
                backgroundColor: active && 'grey.darker',
                color: active ? 'yellow.dark' : 'grey.main',
                px: 2,
                py: 1.5,
                cursor: 'pointer',
              }}>
                <Stack direction="row" spacing={2} sx={{ alignItems: 'center', mr: 'auto' }}>
                  {item.icon}
                  <Typography sx={{ color: !active && 'white', fontWeight: '500' }}>{item.label}</Typography>
                  {item.count !== 0 && (
                    <Box sx={{ backgroundColor: 'yellow.dark', borderRadius: 4, px: 1.5 }}>
                      <Typography variant="body2" sx={{ color: 'black', p: 0 }}>{item.count}</Typography>
                    </Box>
                  )}
                </Stack>
              <ChevronRightIcon/>
            </Stack>
          </Link>
        )
      })}
    </Box>
  )
}

export default SideNav