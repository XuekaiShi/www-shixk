type List = {
  id: number;
  title: string;
  date: string;
  category: "blog" | "note" | "project";
  author?: string;
  abstract?: string;
  tags?: string[];
}[];

export const list: List = [
  {
    id: 1,
    title: "Blog 1",
    abstract: "abstract 1",
    date: "2022-01-01",
    category: "blog",
    // tags: ["tag1", "tag2"],
  },
  {
    id: 2,
    title: "Note 1",
    abstract: "abstract 2",
    date: "2022-01-02",
    category: "note",
    // tags: ["tag3", "tag4"],
  },
  {
    id: 3,
    title: "Project 1",
    abstract: "abstract 3",
    date: "2022-01-03",
    category: "project",
    // tags: ["tag5", "tag6"],
  },
];