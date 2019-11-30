import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  divider: {
    marginTop: 6,
    marginBottom: 10,
  },
  flex: {
    flex: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  row: {
    flexDirection: 'row',
    display: 'flex',
  },
  tweetBody: {
    overflow: 'hidden',
  },
}));

export default styles;
