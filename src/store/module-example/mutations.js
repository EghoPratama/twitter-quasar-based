export function mutateTweet (state, data) {
  state.tweet_list.unshift(data)
}
