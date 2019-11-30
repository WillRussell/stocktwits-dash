import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withTheme } from '@material-ui/core/styles';

/* Styles */
import useStyles from './styles';

/* Page Components */
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Tweets from '../Tweets';

function Layout({ toggleTheme, isThemeLight }) {
  const classes = useStyles();

  const [open, toggleSidebar] = useState(true);
  const handleSidebarOpen = () => toggleSidebar(true);
  const handleSidebarClose = () => toggleSidebar(false);

  const [symbol, setSymbol] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [tweetCollection, setTweetCollection] = useState([]);
  const [symbolCollection, setSymbolCollection] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();
    setIsLoading(true);
    fetch(`/.netlify/functions/fetch-tweets?symbol=${symbol}`)
      .then((response) => {
        if (!response.ok) {
          throw response;
        }
        return response.json();
      })
      .then((newData) => {
        const sortedTweets = [
          ...tweetCollection,
          ...newData.messages,
        ].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        setTweetCollection(sortedTweets);
        setSymbolCollection([...symbolCollection, newData.symbol]);
        setIsLoading(false);
      })
      .catch((err) => {
        err.text().then((errorRes) => {
          const errors = JSON.parse(errorRes);
          console.log(errors);
          setIsLoading(false);
        });
      });
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
        isLoading={isLoading}
        handleSearch={handleSearch}
        handleSidebarClose={handleSidebarClose}
        open={open}
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
