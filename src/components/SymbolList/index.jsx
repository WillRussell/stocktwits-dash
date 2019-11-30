import React from 'react';
import PropTypes from 'prop-types';

/* Material-UI Components */
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import MoneyIcon from '@material-ui/icons/Money';

import useStyles from './styles';

function SymbolList({ isLoading, removeSymbol, symbolCollection }) {
  const classes = useStyles();

  const listItems = symbolCollection.map((o) => (
    <div key={o.id}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <MoneyIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={o.symbol}
          secondary={o.title}
        />
        <ListItemSecondaryAction>
          <IconButton
            disabled={isLoading}
            onClick={() => removeSymbol(o.id)}
          >
            <CloseIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider variant="inset" />
    </div>
  ));

  return (
    <List className={classes.root}>
      {listItems}
    </List>
  );
}

SymbolList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  removeSymbol: PropTypes.func.isRequired,
  symbolCollection: PropTypes.arrayOf(PropTypes.shape({
    symbol: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default SymbolList;
