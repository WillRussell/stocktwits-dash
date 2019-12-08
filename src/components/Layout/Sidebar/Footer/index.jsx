import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

function Footer({ tweetCount }) {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Typography color="textSecondary" variant="body1">
        { `Tweets Collected: ${tweetCount}` }
      </Typography>
    </div>
  );
}

Footer.propTypes = {
  tweetCount: PropTypes.string.isRequired,
};

export default Footer;
