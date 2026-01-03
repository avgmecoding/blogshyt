export interface Book {
  title: string;
  author: string;
  note: string;
  image: string; 
}

export const FAVORITE_BOOKS: Book[] = [
  {
    title: "Crime & Punishment",
    author: "Fyodor Dostoevsky",
    note: "A reminder that journeys shape us.",
    image: "/cp.jpg",
  },
  {
    title: "Godan",
    author: "Munshi Premchand",
    note: "Quiet conversations with yourself.",
    image: "/godan.jpg",
  },
  {
    title: "Metamorphosis",
    author: "Franz Kafka",
    note: "Quiet conversations with yourself.",
    image: "/metamorphosis.jpg",
  },
  {
    title: "A thousand splendid suns",
    author: "Khaled Hosseini",
    note: "Quiet conversations with yourself.",
    image: "/khaled.jpg",
  },
  {
    title: "Norwegian Wood",
    author: "Haruki Murakami",
    note: "Quiet conversations with yourself.",
    image: "/norwegian-wood.jpg",
  },
];

