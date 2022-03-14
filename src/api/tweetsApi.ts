import { Tweet } from "../redux/ducks/tweets/tweetsSlice";
import { ApiResponseType, instance } from "./apiConfig";

export const tweetsApi = {
  fetchTweets() {
    return instance
      .get<ApiResponseType<{ tweets: Tweet[] }>>("tweets")
      .then(({ data }) => {
        return data.data.tweets;
      });
  },
};
