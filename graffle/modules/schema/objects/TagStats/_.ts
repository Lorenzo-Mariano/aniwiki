import type * as $Fields from './fields.js'

export * as TagStats from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* User's tag statistics
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 4 |
*/
export interface TagStats {
kind: "Object",
name: "TagStats",
fields: {
__typename: $Fields.__typename,
tag: $Fields.tag,
amount: $Fields.amount,
meanScore: $Fields.meanScore,
timeWatched: $Fields.timeWatched
}
}