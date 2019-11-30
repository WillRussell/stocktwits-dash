import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: theme.spacing(1 / 2),
    margin: theme.spacing(1 / 2),
  },
  logo: {
    height: 125,
    width: 125,
  },
}));

export default styles;
