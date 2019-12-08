import React from 'react';
import PropTypes from 'prop-types';

import Tweets from './Tweets';

const ActiveSelection = ({ data }) => (<Tweets data={data.messages} />);

ActiveSelection.propTypes = {
  data: PropTypes.shape({
    messages: PropTypes.array,
  }),
};
ActiveSelection.defaultProps = {
  data: {
    messages: [],
  },
};

export default ActiveSelection;
