import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

function Footer({ numberOfTweetsDisplayed }) {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Typography color="textSecondary" variant="body1">
        { `Tweets Showing: ${numberOfTweetsDisplayed}` }
      </Typography>
    </div>
  );
}

Footer.propTypes = {
  numberOfTweetsDisplayed: PropTypes.number.isRequired,
};

export default Footer;
