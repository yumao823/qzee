export const getBgColor = (status) => {
  switch (status) {
    case 'active': {
      return 'green.main'
      break
    }
    case 'activl': {
      return 'yellow.light'
      break
    }
    case 'overtime': {
      return 'yellow.dark'
      break
    }
    case 'inactive': {
      return 'red.light'
      break
    }
    case 'unconfirmed': {
      return 'grey.light'
      break
    }
    default: {
      return 'grey.light'
      break
    }
  }
}