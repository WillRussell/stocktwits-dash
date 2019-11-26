import { createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: { main: blue[700] },
  },
});

export const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: { main: blue[700] },
  },
});
