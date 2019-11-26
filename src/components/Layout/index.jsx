import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withTheme } from '@material-ui/core/styles';

/* Styles */
import useStyles from './styles';

/* Page Components */
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function Layout({ toggleTheme, isThemeLight }) {
  const classes = useStyles();

  const [open, toggleSidebar] = useState(true);
  const handleSidebarOpen = () => toggleSidebar(true);
  const handleSidebarClose = () => toggleSidebar(false);

  return (
    <div className={classes.layoutRoot}>
      <Navbar
        open={open}
        isThemeLight={isThemeLight}
        toggleTheme={toggleTheme}
        handleSidebarOpen={handleSidebarOpen}
      />
      <Sidebar
        open={open}
        handleSidebarClose={handleSidebarClose}
      />
      <main className={classNames(classes.content, { [classes.contentShift]: open })}>
        <div className={classes.drawerHeader} />
      </main>
    </div>
  );
}

Layout.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  isThemeLight: PropTypes.bool.isRequired,
};

export default withTheme(Layout);
