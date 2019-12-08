import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { omit } from 'lodash';

/* Styles */
import useStyles from './styles';

/* Helpers */
import {
  buildBatchRequest,
  getSymbolMap,
} from '../../support/helpers';

/* Page Components */
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Main from './Main';

function Layout({ toggleTheme, isThemeLight }) {
  const classes = useStyles();

  const [open, toggleSidebar] = useState(true);
  const handleSidebarOpen = () => toggleSidebar(true);
  const handleSidebarClose = () => toggleSidebar(false);

  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [activeSymbol, setActiveSymbol] = useState('');
  const [master, setMaster] = useState({});
  const selection = master[activeSymbol];

  const handleSearch = (event) => {
    event.preventDefault();
    setIsLoading(true);
    const requests = buildBatchRequest(userInput);
    Promise.all(requests).then((data) => {
      const newMap = getSymbolMap(data);
      setMaster({ ...master, ...newMap });
      setUserInput('');
      setIsLoading(false);
    });
  };

  const removeSymbol = (id) => {
    const newMap = omit(master, id);
    setMaster(newMap);
    if (id === activeSymbol) {
      setActiveSymbol('');
    }
  };

  return (
    <div className={classes.layoutRoot}>
      <Navbar
        open={open}
        isThemeLight={isThemeLight}
        toggleTheme={toggleTheme}
        handleSidebarOpen={handleSidebarOpen}
      />
      <Sidebar
        activeSymbol={activeSymbol}
        isLoading={isLoading}
        handleSearch={handleSearch}
        handleSidebarClose={handleSidebarClose}
        master={master}
        open={open}
        userInput={userInput}
        removeSymbol={removeSymbol}
        setUserInput={setUserInput}
        setActiveSymbol={setActiveSymbol}
      />
      <Main
        open={open}
        master={master}
        selection={selection}
      />
    </div>
  );
}

Layout.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  isThemeLight: PropTypes.bool.isRequired,
};

export default Layout;
