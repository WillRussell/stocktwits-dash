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
import Errors from '../../Errors';

function Sidebar({
  errors,
  isLoading,
  handleSearch,
  handleSidebarClose,
  numberOfTweetsDisplayed,
  open,
  removeSymbol,
  symbol,
  symbolCollection,
  setSymbol,
}) {
  const classes = useStyles();

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
        symbol={symbol}
        symbolCollection={symbolCollection}
        setSymbol={setSymbol}
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

        { !isLoading && (
          <Errors
            data={errors}
          />
        )}

      </div>
      <Divider
        className={classes.headDivider}
      />
      <SymbolList
        isLoading={isLoading}
        symbolCollection={symbolCollection}
        removeSymbol={removeSymbol}
      />
      <Footer
        numberOfTweetsDisplayed={numberOfTweetsDisplayed}
      />
    </Drawer>
  );
}

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  handleSidebarClose: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  errors: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  numberOfTweetsDisplayed: PropTypes.number.isRequired,
  handleSearch: PropTypes.func.isRequired,
  removeSymbol: PropTypes.func.isRequired,
  symbol: PropTypes.string.isRequired,
  symbolCollection: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  setSymbol: PropTypes.func.isRequired,
};

export default Sidebar;
