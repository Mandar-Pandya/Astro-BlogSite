// import { defineCollection, z } from "astro:content";

// const blogCollection = defineCollection({
//   schema: z.object({
//     title: z.string(),
//     pubDate: z.date(),
//     author: z.string(),
//     image: z.string(),
//     tags: z.string(),
//     slug: z.string(),
//   }),
// });

// export const collections = {
//   blog: blogCollection,
// };

import { defineCollection, z } from "astro:content";
const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    author: z.string(),
    image: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  blog: blogCollection,
};
