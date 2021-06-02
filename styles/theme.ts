import {createMuiTheme} from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    htmlFontSize: 20,
    fontFamily: "Jetbrains Mono",
    h1: {
      fontFamily: "Roboto Slab"
    },
    h2: {
      fontFamily: "Roboto Slab"
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

export default theme
