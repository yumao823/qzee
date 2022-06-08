import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    green: {
      main: '#4caf50',
      light: '#8ceeb5',
      dark: '#27ae60',
    },
    grey: {
      main: '#9e9e9e',
      light: '#f1f4f8',
      dark: '#a9abae',
      darker: '#323234',
    },
    light: {
      main: '#ffffff'
    },
    red: {
      main: '#ff5555',
      light: '#ffa6a6',
    },
    yellow: {
      main: '#ffe68e',
      light: '#fff9bf',
      dark: '#ffc700',
    },
    border: {
      main: '#dadcdd',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme
