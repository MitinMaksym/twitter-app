import { Tweet } from "../redux/ducks/tweets/tweetsSlice";

export const tweetsApi = {
  fetchTweets() {
    const mockData = [
      {
        text: "Test",
        fullName: "Will Smith",
        avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
      },
      {
        text: "Test",
        fullName: "Will Smith",
        avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
      },
    ] as Tweet[];

    return new Promise<Tweet[]>((resolve) => {
      resolve(mockData);
    });
  },
};
