import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withTheme } from '@material-ui/core/styles';

/* Styles */
import useStyles from './styles';

/* Helpers */
import {
  removeTweetsById,
  removeSymbolById,
  sortTweets,
} from '../../support/collection-helpers';

/* Page Components */
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Tweets from '../Tweets';

const LAMBDA_PATH = process.env.REACT_APP_LAMBDA_PATH;

function Layout({ toggleTheme, isThemeLight }) {
  const classes = useStyles();

  const [open, toggleSidebar] = useState(true);
  const handleSidebarOpen = () => toggleSidebar(true);
  const handleSidebarClose = () => toggleSidebar(false);

  const [symbol, setSymbol] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [tweetCollection, setTweetCollection] = useState([]);
  const [symbolCollection, setSymbolCollection] = useState([]);
  const [errors, setErrors] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();
    setIsLoading(true);
    fetch(`${LAMBDA_PATH}?symbol=${symbol}`)
      .then((response) => {
        if (!response.ok) {
          throw response;
        }
        return response.json();
      })
      .then((newTweets) => {
        const sortedCollection = sortTweets(tweetCollection, newTweets);
        setTweetCollection(sortedCollection);
        setSymbolCollection([...symbolCollection, newTweets.symbol]);
        setSymbol('');
        setErrors([]);
        setIsLoading(false);
      })
      .catch((err) => {
        err.text().then((errorRes) => {
          setErrors(JSON.parse(errorRes));
          setIsLoading(false);
        });
      });
  };

  const removeSymbol = (id) => {
    const updatedTweetCollection = removeTweetsById(tweetCollection, id);
    const updatedSymbolCollection = removeSymbolById(symbolCollection, id);
    setTweetCollection(updatedTweetCollection);
    setSymbolCollection(updatedSymbolCollection);
  };

  return (
    <div className={classes.layoutRoot}>
      <Navbar
        open={open}
        isThemeLight={isThemeLight}
        handleSidebarOpen={handleSidebarOpen}
        toggleTheme={toggleTheme}
      />
      <Sidebar
        errors={errors}
        isLoading={isLoading}
        handleSearch={handleSearch}
        handleSidebarClose={handleSidebarClose}
        numberOfTweetsDisplayed={tweetCollection.length}
        open={open}
        removeSymbol={removeSymbol}
        symbolCollection={symbolCollection}
        symbol={symbol}
        setSymbol={setSymbol}
      />
      <main className={classNames(classes.content, { [classes.contentShift]: open })}>
        <div className={classes.drawerHeader} />
        <Tweets data={tweetCollection} />
      </main>

    </div>
  );
}

Layout.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  isThemeLight: PropTypes.bool.isRequired,
};

export default withTheme(Layout);
