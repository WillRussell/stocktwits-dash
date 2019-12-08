import React from 'react';
import PropTypes from 'prop-types';

/* Material-UI Components */
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import LinearProgress from '@material-ui/core/LinearProgress';

import useStyles from './styles';
import Header from './Header';
import Footer from './Footer';
import Search from '../../Search';
import SymbolList from '../../SymbolList';

import { getTotalTweetCount } from '../../../support/helpers';

function Sidebar({
  master,
  activeSymbol,
  setActiveSymbol,
  removeSymbol,
  isLoading,
  handleSearch,
  handleSidebarClose,
  open,
  userInput,
  setUserInput,
}) {
  const classes = useStyles();
  const tweetCount = getTotalTweetCount(master);

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{ paper: classes.drawerPaper }}
    >
      <Header
        handleSidebarClose={handleSidebarClose}
      />
      <Search
        handleSearch={handleSearch}
        handleSidebarClose={handleSidebarClose}
        userInput={userInput}
        setUserInput={setUserInput}
        isLoading={isLoading}
      />
      <div className={classes.progressContainer}>

        { isLoading && (
          <LinearProgress
            color="secondary"
            variant="query"
            className={classes.root}
          />
        )}

      </div>
      <Divider
        className={classes.headDivider}
      />
      <SymbolList
        activeSymbol={activeSymbol}
        isLoading={isLoading}
        master={master}
        removeSymbol={removeSymbol}
        setActiveSymbol={setActiveSymbol}
      />
      <Footer
        tweetCount={tweetCount}
      />
    </Drawer>
  );
}

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  handleSidebarClose: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  userInput: PropTypes.string.isRequired,
  setUserInput: PropTypes.func.isRequired,
  setActiveSymbol: PropTypes.func.isRequired,
  removeSymbol: PropTypes.func.isRequired,
  activeSymbol: PropTypes.string.isRequired,
  master: PropTypes.shape({}).isRequired,
};

export default Sidebar;
