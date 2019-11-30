import { makeStyles } from '@material-ui/core/styles';
import { drawerWidth } from '../../support/themes';

const styles = makeStyles((theme) => ({
  layoutRoot: {
    display: 'flex',
    flex: 1,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'center',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2, 4),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default styles;
