import type * as $Fields from './fields.js'

export * as GenreStats from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* User's genre statistics
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 4 |
*/
export interface GenreStats {
kind: "Object",
name: "GenreStats",
fields: {
__typename: $Fields.__typename,
genre: $Fields.genre,
amount: $Fields.amount,
meanScore: $Fields.meanScore,
timeWatched: $Fields.timeWatched
}
}