import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 260;

const styles = makeStyles((theme) => ({
  closeButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: theme.spacing(1 / 2),
    margin: theme.spacing(1 / 2),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'center',
  },
}));

export default styles;
