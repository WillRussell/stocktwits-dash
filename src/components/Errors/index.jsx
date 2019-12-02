import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

function Errors({ data }) {
  const classes = useStyles();

  const messages = data.map((o) => (
    <div
      key={o.message}
      className={classes.container}
    >
      <Typography
        align="center"
        variant="subtitle2"
        color="error"
      >
        {o.message}
      </Typography>
    </div>
  ));

  return (<>{ messages }</>);
}

Errors.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    message: PropTypes.string.isRequired,
  })).isRequired,
};

export default Errors;
