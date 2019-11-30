import { fade, makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  container: {
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
  },
  searchButton: {
    marginTop: 10,
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInnerContainer: {
    padding: theme.spacing(1, 1, 1, 7),
    width: '100%',
  },
}));


export default styles;
