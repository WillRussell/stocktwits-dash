import { makeStyles } from '@material-ui/core/styles';
import { drawerWidth } from '../../../support/themes';

const styles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  headDivider: {
    marginTop: theme.spacing(1),
  },
  progressContainer: {
    height: theme.spacing(3),
  },
  root: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    marginTop: theme.spacing(3 / 2),
    marginBottom: -theme.spacing(3),
  },
}));

export default styles;
