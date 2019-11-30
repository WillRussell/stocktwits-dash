import React from 'react';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

const EmptyCollection = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography
        className={classes.root}
        color="primary"
        gutterBottom
        variant="h3"
      >
        Nothing to Display!
      </Typography>
      <Typography variant="body1">
        Enter a symbol in the search bar to fetch tweets.
      </Typography>
    </div>
  );
};


export default EmptyCollection;
