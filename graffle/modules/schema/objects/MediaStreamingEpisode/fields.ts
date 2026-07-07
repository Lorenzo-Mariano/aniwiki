import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"MediaStreamingEpisode"`
*
* {@link https://graphql.org/learn/queries/#meta-fields | GraphQL __typename documentation}
*/
export interface __typename {
kind: "OutputField",
name: "__typename",
arguments: {},
inlineType: [1],
namedType: {
kind: "__typename",
value: "MediaStreamingEpisode"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaStreamingEpisode}.
*
* Title of the episode
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaStreamingEpisode} |
* | **Path** | `MediaStreamingEpisode.title` |
* | **Nullability** | Optional |
*/
export interface title {
kind: "OutputField",
name: "title",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaStreamingEpisode}.
*
* Url of episode image thumbnail
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaStreamingEpisode} |
* | **Path** | `MediaStreamingEpisode.thumbnail` |
* | **Nullability** | Optional |
*/
export interface thumbnail {
kind: "OutputField",
name: "thumbnail",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaStreamingEpisode}.
*
* The url of the episode
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaStreamingEpisode} |
* | **Path** | `MediaStreamingEpisode.url` |
* | **Nullability** | Optional |
*/
export interface url {
kind: "OutputField",
name: "url",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaStreamingEpisode}.
*
* The site location of the streaming episodes
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaStreamingEpisode} |
* | **Path** | `MediaStreamingEpisode.site` |
* | **Nullability** | Optional |
*/
export interface site {
kind: "OutputField",
name: "site",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}
