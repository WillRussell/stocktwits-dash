import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { get } from 'lodash';

/* Material-UI Components */
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

import SentimentChip from '../SentimentChip';
import useStyles from './styles';

function TweetCard({ tweet }) {
  const classes = useStyles();
  const { user, entities, body } = tweet;

  const timestamp = moment(tweet.created_at).calendar();
  const sentiment = get(entities.sentiment, 'basic');

  return (
    <Paper className={classes.paper}>
      <div className={classes.row}>
        <Typography variant="h4" className={classes.flex}>
          {user.name}
        </Typography>
        <Typography variant="subtitle2">
          {timestamp}
        </Typography>
      </div>
      <div className={classes.row}>
        <Typography className={classes.flex}>
          {'\u0040'}
          {user.username}
        </Typography>
        { sentiment && (
          <SentimentChip
            sentiment={sentiment}
          />
        )}
      </div>
      <Divider className={classes.divider} />
      <Typography className={classes.tweetBody}>
        {body}
      </Typography>
    </Paper>
  );
}

TweetCard.propTypes = {
  tweet: PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    }),
    created_at: PropTypes.string.isRequired,
    entities: PropTypes.shape({
      sentiment: PropTypes.shape({}),
    }),
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default TweetCard;
