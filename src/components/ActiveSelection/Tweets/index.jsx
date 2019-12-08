import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import TweetCard from './TweetCard';

function Tweets({ data }) {
  const tweetCards = (
    <Grid container spacing={2} justify="center">
      {data.map((tweet) => (
        <Grid item key={tweet.id} lg={8} md={9} xs={10}>
          <TweetCard tweet={tweet} />
        </Grid>
      ))}
    </Grid>
  );

  return (data.length ? tweetCards : null);
}

Tweets.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export default Tweets;
