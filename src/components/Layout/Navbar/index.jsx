import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/* Material-UI Components */
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import ThemeToggleButton from './ThemeToggleButton';
import useStyles from './styles';

function Navbar({
  open,
  isThemeLight,
  toggleTheme,
  handleSidebarOpen,
}) {
  const classes = useStyles();

  return (
    <AppBar
      position="fixed"
      className={classNames(classes.appBar, { [classes.appBarShift]: open })}
    >
      <Toolbar disableGutters={!open}>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={handleSidebarOpen}
          className={classNames(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          className={classes.grow}
          variant="h6"
          color="inherit"
          noWrap
        >
          Stock Tweets
        </Typography>
        <ThemeToggleButton
          isThemeLight={isThemeLight}
          toggleTheme={toggleTheme}
          open={open}
        />
      </Toolbar>
    </AppBar>
  );
}

Navbar.propTypes = {
  open: PropTypes.bool.isRequired,
  isThemeLight: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired,
  handleSidebarOpen: PropTypes.func.isRequired,
};

export default Navbar;
