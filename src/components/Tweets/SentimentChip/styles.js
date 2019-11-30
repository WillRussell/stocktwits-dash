import { makeStyles } from '@material-ui/core/styles';
import { green, red } from '@material-ui/core/colors';

const styles = makeStyles(() => ({
  chip: {
    marginTop: -10,
  },
  colorPrimary: {
    color: green[400],
  },
  outlinedPrimary: {
    borderColor: green[500],
  },
  colorSecondary: {
    color: red[500],
  },
  outlinedSecondary: {
    borderColor: red[500],
  },
}));

export default styles;
