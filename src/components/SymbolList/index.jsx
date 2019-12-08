import React from 'react';
import PropTypes from 'prop-types';

/* Material-UI Components */
import Tooltip from '@material-ui/core/Tooltip';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Delete';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';

import useStyles from './styles';

function SymbolList({
  activeSymbol,
  isLoading,
  master,
  removeSymbol,
  setActiveSymbol,
}) {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      {Object.entries(master).map(([id, val]) => (
        <div key={id}>
          <ListItem
            alignItems="flex-start"
            button
            selected={id === activeSymbol}
            disabled={isLoading}
            onClick={() => setActiveSymbol(id)}
          >
            <ListItemText
              primary={val.symbol.symbol}
              secondary={val.symbol.title}
            />
            <ListItemSecondaryAction>
              <Tooltip
                title="Remove tweets"
                placement="right"
              >
                <span>
                  <IconButton
                    edge="end"
                    disabled={isLoading}
                    onClick={() => removeSymbol(id)}
                  >
                    <RemoveIcon fontSize="small" />
                  </IconButton>
                </span>
              </Tooltip>

            </ListItemSecondaryAction>
          </ListItem>
          <Divider />
        </div>
      ))}
    </List>
  );
}

SymbolList.propTypes = {
  activeSymbol: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  master: PropTypes.shape({}).isRequired,
  removeSymbol: PropTypes.func.isRequired,
  setActiveSymbol: PropTypes.func.isRequired,
};

export default SymbolList;
