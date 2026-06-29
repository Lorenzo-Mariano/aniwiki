"use client";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import { fetcher } from "../_lib/utils";

export default function Page() {
  const params = useSearchParams();
  const query = params.get("query");

  const request = {
    query: `
        query SearchMediaByTitle($query: String!, $perPage: Int!) {
          Page(perPage: $perPage) {
            pageInfo {
              perPage
            }
          media(search: $query) {
            id
            description
            title {
              english
              native
              romaji
            }  
          }  
        }}
    `,
    variables: {
      query: query,
      perPage: 10,
    },
  };

  const { data: response } = useSWR(request, (req) => fetcher(req));

  console.log(
    "hello, maybe this is only visible in the terminal console and not el browser idk.",
  );
  return (
    <div>
      <span>you are in the search result page place thingy haha idk</span>
      <h1>THIS SHOULD BE WHAT YOU SEARCH: {query}</h1>
      <pre>{JSON.stringify(response, null, 4)}</pre>
    </div>
  );
}
