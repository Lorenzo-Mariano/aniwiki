import type * as $Fields from './fields.js'

export * as UserLengthStatistic from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 6 |
*/
export interface UserLengthStatistic {
kind: "Object",
name: "UserLengthStatistic",
fields: {
__typename: $Fields.__typename,
count: $Fields.count,
meanScore: $Fields.meanScore,
minutesWatched: $Fields.minutesWatched,
chaptersRead: $Fields.chaptersRead,
mediaIds: $Fields.mediaIds,
length: $Fields.length
}
}