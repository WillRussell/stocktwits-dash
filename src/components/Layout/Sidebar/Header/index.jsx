import React from 'react';
import PropTypes from 'prop-types';

/* Material-UI Components */
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/MenuOpen';

import useStyles from './styles';
import logo from '../../../../assets/TwitterLogo.svg';

function Header({ handleSidebarClose }) {
  const classes = useStyles();

  return (
    <div className={classes.drawerHeader}>
      <img className={classes.logo} src={logo} alt="logo" />
      <Tooltip title="Collapse sidebar" placement="bottom">
        <IconButton
          className={classes.closeButton}
          onClick={handleSidebarClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </div>
  );
}

Header.propTypes = {
  handleSidebarClose: PropTypes.func.isRequired,
};

export default Header;
