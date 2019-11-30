import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles';

function Search({
  handleSearch,
  isLoading,
  symbol,
  setSymbol,
}) {
  const classes = useStyles();

  const handleChange = (event) => {
    event.preventDefault();
    setSymbol(event.target.value);
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
          inputProps={{ maxLength: '5' }}
          onKeyDown={handleKeyPress}
          onChange={handleChange}
          placeholder="AAPL"
          value={symbol}
        />
      </div>
      <div className={classes.searchButton}>
        <Button
          fullWidth
          variant="outlined"
          color="primary"
          disabled={!symbol.length || isLoading}
          onClick={handleSearch}
        >
            Add Symbol
        </Button>
      </div>
    </div>
  );
}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  symbol: PropTypes.string.isRequired,
  setSymbol: PropTypes.func.isRequired,
};

export default Search;
