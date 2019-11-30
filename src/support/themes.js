import { createMuiTheme } from '@material-ui/core/styles';
import { lightBlue, blue } from '@material-ui/core/colors';

export const drawerWidth = 260;

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: { main: lightBlue[400] },
  },
});

export const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: blue,
  },
});
