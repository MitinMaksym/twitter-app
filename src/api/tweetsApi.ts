import { Tweet } from "../redux/ducks/tweets/tweetsSlice";

export const tweetsApi = {
  fetchTweets() {
    const mockData = [
      {
        id: "123",
        text: "Test",
        fullName: "Will Smith",
        avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
      },
      {
        id: "1234",
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
