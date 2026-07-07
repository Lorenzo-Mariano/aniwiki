// I was really gonna lean on the 'object syntax' but idk how to query fields
// like status_in, so i'm gonna have to stick to the native strings
// it's less stuff to type anyway
// const query = graffle.gql({
//   query: {
//     getTrending: {
//       Page: {
//         $: {
//           perPage: 15,
//         },
//         media: {
//           $: {
//             // $status: "RELEASING", // last time, you were tying to filter this bullshit but didn't know how. wanna see hiatus or releasing manga / anime.
//             // $status_in: ["RELEASING", "HIATUS"],
//             // $status_in: [
//             //   "HIATUS" as HIATUS,
//             //   "RELEASING" as RELEASING,
//             // ] as MediaStatus[], // i give up lmao
//           },
//           id: true,
//           title: {
//             english: true,
//             native: true,
//             romaji: true,
//           },
//           description: true,
//           type: true,
//           coverImage: {
//             extraLarge: true,
//           },
//           status: true,
//           favourites: true,
//           startDate: {
//             month: true,
//             year: true,
//           },
//         },
//       },
//     },
//   },
// });

// how i fetched search results
// function Results() {
//   const request = {
//     query: `
//         query SearchMediaByTitle($query: String!, $perPage: Int!) {
//           Page(perPage: $perPage) {
//             pageInfo {
//               perPage
//             }
//           media(search: $query) {
//             id
//             description
//             title {
//               english
//               native
//               romaji
//             }
//           }
//         }}
//     `,
//     variables: {
//       query: query,
//       perPage: 10,
//     },
//   };
//
//   const { data: response } = useSWR(request, (req) => fetcher(req));
//
//   return (
//     <div className="results">
//       <h1>THIS SHOULD BE WHAT YOU SEARCH: {query}</h1>
//       <pre>{JSON.stringify(response, null, 4)}</pre>
//     </div>
//   );
// }
