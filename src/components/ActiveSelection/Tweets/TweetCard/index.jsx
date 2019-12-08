import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { get } from 'lodash';

/* Material-UI Components */
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';

import SentimentChip from '../SentimentChip';
import useStyles from './styles';

function TweetCard({ tweet }) {
  const classes = useStyles();
  const { user, entities, body } = tweet;

  const timestamp = moment(tweet.created_at).calendar();
  const sentiment = get(entities.sentiment, 'basic');

  return (
    <Paper className={classes.paper}>
      <div className={classes.tweetCardHeader}>
        <div className={classes.avatarContainer}>
          <Avatar
            className={classes.userAvatar}
            alt="user-avatar"
            src={user.avatar_url_ssl}
          />
        </div>
        <div className={classes.flex}>
          <Typography variant="h5">
            {user.name}
          </Typography>
          <Typography>
            {'\u0040'}
            {user.username}
          </Typography>
        </div>
        <div className={classes.topRightSection}>
          <Typography variant="subtitle2">
            {timestamp}
          </Typography>
          { sentiment && (
            <SentimentChip sentiment={sentiment} />
          )}
        </div>
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
      avatar_url_ssl: PropTypes.string,
    }),
    created_at: PropTypes.string.isRequired,
    entities: PropTypes.shape({
      sentiment: PropTypes.shape({}),
    }),
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default TweetCard;
