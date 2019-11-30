import { filter } from 'lodash';

/* Sort tweet collection by date */
export function sortTweets(previousTweets, newData) {
  const newTweets = newData.messages.map((o) => ({
    ...o,
    sourceId: newData.symbol.id,
  }));
  return [
    ...previousTweets,
    ...newTweets,
  ].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
}

export function removeTweetsById(collection, id) {
  return filter(collection, (tweet) => tweet.sourceId !== id);
}

export function removeSymbolById(symbols, id) {
  return filter(symbols, (symbol) => symbol.id !== id);
}
