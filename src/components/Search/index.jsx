import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles';

function Search({
  handleSearch,
  isLoading,
  userInput,
  setUserInput,
}) {
  const classes = useStyles();

  const handleChange = (event) => {
    event.preventDefault();
    setUserInput(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      handleSearch(event);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          classes={{
            root: classes.inputRoot,
            input: classes.inputInnerContainer,
          }}
          disabled={isLoading}
          onKeyDown={handleKeyPress}
          onChange={handleChange}
          placeholder="AAPL, TSLA"
          value={userInput}
        />
      </div>
      <div className={classes.searchButton}>
        <Button
          fullWidth
          variant="outlined"
          color="primary"
          disabled={!userInput.length || isLoading}
          onClick={handleSearch}
        >
            Add Symbols
        </Button>
      </div>
    </div>
  );
}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  userInput: PropTypes.string.isRequired,
  setUserInput: PropTypes.func.isRequired,
};

export default Search;
