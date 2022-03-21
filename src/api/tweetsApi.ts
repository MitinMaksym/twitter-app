import { Tweet } from "../redux/ducks/tweets/tweetsSlice";
import { ApiResponseType, $api } from "./apiConfig";

export const tweetsApi = {
  fetchTweets() {
    return $api
      .get<ApiResponseType<{ tweets: Tweet[] }>>("tweets")
      .then(({ data }) => {
        return data.data.tweets;
      });
  },
};
