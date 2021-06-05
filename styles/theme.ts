import {createMuiTheme} from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    htmlFontSize: 20,
    fontFamily: "Jetbrains Mono",
    h1: {
      fontFamily: "'Cabin Sketch', cursive",
    },
    h2: {
      fontFamily: "'Cabin Sketch', cursive"
    },
    h3: {
      fontFamily: "'Cabin Sketch', cursive"
    },
    body1: {
      fontSize: '1rem',
    }
  },
  palette: {
    primary: {
      light: '#8677b5',
      main: '#6856A3',
      dark: '#483c72'
    }
  }
})
theme.typography.h1 = {
  ...theme.typography.h1,
  [theme.breakpoints.down('sm')]: {
    fontSize: '3.2rem'
  }
}
theme.typography.h3 = {
  ...theme.typography.h3,
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem'
  }
}
theme.typography.body1 = {
  ...theme.typography.body1,
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.75rem'
  }
}

export default theme
