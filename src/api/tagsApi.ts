import { Tag } from "../redux/ducks/tags/tagsSlice";

export const tagsApi = {
  fetchTags() {
    const mockData = [
      {
        tagTitle: "Politics",
        tweetsCount: 34534,
      },
      {
        tagTitle: "Economics",
        tweetsCount: 34534,
      },
    ] as Tag[];

    return new Promise<Tag[]>((resolve) => {
      resolve(mockData);
    });
  },
};
