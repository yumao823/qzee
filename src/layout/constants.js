import HomeIcon from '@mui/icons-material/Home'
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu'
import EventAvailableIcon from '@mui/icons-material/EventAvailable'
import DataUsageIcon from '@mui/icons-material/DataUsage'
import GroupIcon from '@mui/icons-material/Group'
import SettingsIcon from '@mui/icons-material/Settings'

export const SIDEBAR = [
  {
    id: 0,
    label: 'Overview',
    value: 'overview',
    count: 0,
    icon: <HomeIcon />,
  },
  {
    id: 1,
    label: 'Tables',
    value: 'tables',
    count: 2,
    icon: <RestaurantMenuIcon />,
  },
  {
    id: 2,
    label: 'Bookings',
    value: 'bookings',
    count: 2,
    icon: <EventAvailableIcon />,
  },
  {
    id: 3,
    label: 'Queue',
    value: 'queue',
    count: 2,
    icon: <DataUsageIcon />,
  },
  {
    id: 4,
    label: 'Staff',
    value: 'staff',
    count: 0,
    icon: <GroupIcon />,
  },
  {
    id: 5,
    label: 'Settings',
    value: 'settings',
    count: 0,
    icon: <SettingsIcon />,
  },
]