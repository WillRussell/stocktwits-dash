import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { isEmpty } from 'lodash';

import useStyles from './styles';

import EmptyCollection from '../../EmptyCollection';
import ActiveSelection from '../../ActiveSelection';
import NoSelection from '../../NoSelection';

const Main = ({ open, master, selection }) => {
  const classes = useStyles();

  const contentPosition = classNames(classes.content, {
    [classes.contentShift]: open,
  });

  const activeContent = (() => {
    if (isEmpty(master)) return <EmptyCollection />;
    if (isEmpty(selection)) return <NoSelection master={master} />;
    return <ActiveSelection data={selection} />;
  })();

  return (
    <main className={contentPosition}>
      <div className={classes.drawerHeader} />
      {activeContent}
    </main>
  );
};

Main.propTypes = {
  open: PropTypes.bool.isRequired,
  master: PropTypes.shape({}).isRequired,
  selection: PropTypes.shape({}),
};

Main.defaultProps = {
  selection: {},
};

export default Main;
