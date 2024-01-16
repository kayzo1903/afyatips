import { client } from "../../../sanity/lib/client";

export const getData = async () => {
  const query = `
  *[_type == 'post' && publishedAt < now()] | order(publishedAt desc)[0]  {
    title ,
    "slug" : slug.current,
    mainImage {
      alt,
      'image' : asset._ref
    },
    author-> {
      name,
     "image" : image.asset._ref
    },
    categories[]-> {
      title
    },
    publishedAt
  }`;
  const data = await client.fetch(query, { cache: "no-store" });
  return data;
};

export const getLatestPost = async () => {
  const query = `
  *[_type == 'post'] | order(publishedAt desc)  {
    _id ,
    title ,
    "slug" : slug.current,
    mainImage {
      alt,
      'image' : asset._ref
    },
    author-> {
      name,
     "image" : image.asset._ref
    },
    categories[]-> {
      title
    },
    body,
    publishedAt
  }`;
  const data = await client.fetch(query, { cache: "no-store" });
  return data;
};

export const  getPopularPost = async () => {
  const query = `
  *[_type == 'post' && publishedAt < now()] | order(views desc) [0..4] {
    _id ,
    title ,
    "slug" : slug.current,
    mainImage {
      alt,
      'image' : asset._ref
    },
    author-> {
      name,
     "image" : image.asset._ref
    },
    categories[]-> {
      title
    },
    body,
    publishedAt
  }`;
  const data = await client.fetch(query);
  return data;
};

export const getPost = async(post) => {
  const query = `
  *[_type == 'post' && slug.current == "${post}"][0] {
    _id ,
    title ,
    "slug" : slug.current,
    mainImage {
      alt,
      'image' : asset._ref
    },
    author-> {
      name,
     "image" : image.asset._ref
    },
    categories[]-> {
      title
    },
    body ,
    publishedAt
  }`;
  const data = await client.fetch(query)
  return data
};
