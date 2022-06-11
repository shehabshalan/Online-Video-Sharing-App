const getRelatedVideos = require("./getRelatedVideos");

test("gets related videos based on category", () => {
  const videos = [
    {
      id: "1",
      title: "Video 1",
      category: "category 1",
    },
    {
      id: "2",
      title: "Video 2",
      category: "category 2",
    },
    {
      id: "3",
      title: "Video 3",
      category: "category 1",
    },
    {
      id: "4",
      title: "Video 4",
      category: "category 2",
    },
    {
      id: "5",
      title: "Video 5",
      category: "category 1",
    },
    {
      id: "6",
      title: "Video 6",
      category: "category 1",
    },
  ];
  const currentVideo = {
    id: "6",
    title: "Video 6",
    category: "category 1",
  };
  const expected = [
    {
      id: "1",
      title: "Video 1",
      category: "category 1",
    },
    {
      id: "3",
      title: "Video 3",
      category: "category 1",
    },
    {
      id: "5",
      title: "Video 5",
      category: "category 1",
    },
  ];

  expect(getRelatedVideos(videos, currentVideo)).toBe(expected);
});
