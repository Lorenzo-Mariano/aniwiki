import type * as $Fields from './fields.js'

export * as AiringProgression from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* Score & Watcher stats for airing anime by episode and mid-week
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 3 |
*/
export interface AiringProgression {
kind: "Object",
name: "AiringProgression",
fields: {
__typename: $Fields.__typename,
episode: $Fields.episode,
score: $Fields.score,
watching: $Fields.watching
}
}