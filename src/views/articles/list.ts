type List = {
  id: number;
  title: string;
  date: string;
  category: "blogs" | "notes" | "projects";
  author?: string;
  abstract?: string;
  tags?: string[];
}[];

export const list: List = [
  {
    id: 1,
    title: "Blog 1",
    abstract: "The 2023 Canadian forest fires have been extreme in scale and intensity with more than seven ",
    date: "2022-01-01",
    category: "blogs",
    // tags: ["tag1", "tag2"],
  },
  {
    id: 2,
    title: "Note 1",
    abstract: "abstract 2",
    date: "2022-01-02",
    category: "notes",
    // tags: ["tag3", "tag4"],
  },
  {
    id: 3,
    title: "Project 1",
    abstract: "abstract 3",
    date: "2022-01-03",
    category: "projects",
    // tags: ["tag5", "tag6"],
  },
];