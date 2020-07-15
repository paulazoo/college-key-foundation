// Redux
import store from './index.js';

// Theme
import { createMuiTheme } from '@material-ui/core/styles';

// set up theme
export const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#92E1E4',
      main: '#004BAD',
      dark: '#004BAD',
      muted: '#84c6c8',
      contrastText: '#FFFFFF',
    },
    secondary: {
      light: '#B3F363',
      main: '#81C437',
      contrastText: '#FFFFFF',
    },
    contrastText: '#fff',
    warning: {
      light: '#FF6961',
      main: '#DC453D',
      dark: '#C33C23',
    },
    common: {
      white: 'white',
      black: 'black',
      gray: 'gray',
      yellow: '#ffde59',
    },
    background: '#84c6c8',
  },
  typography: {
    useNextVariants: true,
    fontFamily: 'museo-sans',
  },
  spacing: 8,
});
