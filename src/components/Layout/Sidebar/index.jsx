import React from 'react';
import PropTypes from 'prop-types';

/* Material-UI Components */
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from './styles';

function Sidebar({ open, handleSidebarClose }) {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{ paper: classes.drawerPaper }}
    >
      <div className={classes.drawerHeader}>
        <IconButton
          className={classes.closeButton}
          onClick={handleSidebarClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </div>
    </Drawer>
  );
}

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  isThemeLight: PropTypes.bool.isRequired,
  handleSidebarClose: PropTypes.func.isRequired,
};

export default Sidebar;
