"use client";

export async function fetcher(request: {
  query: string;
  variables?: Record<string, unknown>;
}) {
  return await fetch("https://graphql.anilist.co", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      ...request,
    }),
  })
    .then((res) => res.json())
    .catch((err) => new Error(err));
}
