import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import { getSymbolCount } from '../../support/helpers';

import useStyles from './styles';

const NoSelection = ({ master }) => {
  const classes = useStyles();
  const symbolCount = getSymbolCount(master);

  return (
    <div className={classes.container}>
      <Typography
        align="center"
        className={classes.root}
        color="textSecondary"
        gutterBottom
        variant="h4"
      >
        {`Data available for ${symbolCount}`}
      </Typography>
      <Typography
        align="center"
        variant="body1"
        color="textSecondary"
      >
        Make a selection from the sidebar to view tweets.
      </Typography>
    </div>
  );
};

NoSelection.propTypes = {
  master: PropTypes.shape({}).isRequired,
};


export default NoSelection;
