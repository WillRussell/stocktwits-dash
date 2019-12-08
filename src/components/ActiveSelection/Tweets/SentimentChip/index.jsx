import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Chip from '@material-ui/core/Chip';

import useStyles from './styles';

const SentimentChip = ({ sentiment }) => {
  const classes = useStyles();

  let chipClass = null;

  if (sentiment === 'Bullish') {
    chipClass = classNames(classes.colorPrimary, classes.outlinedPrimary, classes.chip);
  }

  if (sentiment === 'Bearish') {
    chipClass = classNames(classes.colorSecondary, classes.outlinedSecondary, classes.chip);
  }

  return (
    <Chip
      className={chipClass}
      label={sentiment}
      size="small"
      variant="outlined"
    />
  );
};

SentimentChip.propTypes = {
  sentiment: PropTypes.string.isRequired,
};


export default SentimentChip;
