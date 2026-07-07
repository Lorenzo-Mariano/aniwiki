import type * as $Fields from './fields.js'

export * as Page from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* Page of data. Limited to a max depth of 5000 entries. This is calculated as the
* page parameter multiplied by the perPage parameter.
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 19 |
*/
export interface Page {
kind: "Object",
name: "Page",
fields: {
__typename: $Fields.__typename,
pageInfo: $Fields.pageInfo,
users: $Fields.users,
media: $Fields.media,
characters: $Fields.characters,
staff: $Fields.staff,
studios: $Fields.studios,
mediaList: $Fields.mediaList,
airingSchedules: $Fields.airingSchedules,
mediaTrends: $Fields.mediaTrends,
notifications: $Fields.notifications,
followers: $Fields.followers,
following: $Fields.following,
activities: $Fields.activities,
activityReplies: $Fields.activityReplies,
threads: $Fields.threads,
threadComments: $Fields.threadComments,
reviews: $Fields.reviews,
recommendations: $Fields.recommendations,
likes: $Fields.likes
}
}