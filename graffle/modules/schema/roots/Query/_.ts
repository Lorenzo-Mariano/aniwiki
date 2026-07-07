import type * as $Fields from './fields.js'

export * as Query from './fields.js'

/**
* GraphQL root {@link https://graphql.org/learn/schema/#the-query-and-mutation-types | Query} type.
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 27 |
*/
export interface Query {
kind: "Object",
name: "Query",
fields: {
__typename: $Fields.__typename,
Page: $Fields.Page,
Media: $Fields.Media,
MediaTrend: $Fields.MediaTrend,
AiringSchedule: $Fields.AiringSchedule,
Character: $Fields.Character,
Staff: $Fields.Staff,
MediaList: $Fields.MediaList,
MediaListCollection: $Fields.MediaListCollection,
GenreCollection: $Fields.GenreCollection,
MediaTagCollection: $Fields.MediaTagCollection,
User: $Fields.User,
Viewer: $Fields.Viewer,
Notification: $Fields.Notification,
Studio: $Fields.Studio,
Review: $Fields.Review,
Activity: $Fields.Activity,
ActivityReply: $Fields.ActivityReply,
Following: $Fields.Following,
Follower: $Fields.Follower,
Thread: $Fields.Thread,
ThreadComment: $Fields.ThreadComment,
Recommendation: $Fields.Recommendation,
Like: $Fields.Like,
Markdown: $Fields.Markdown,
AniChartUser: $Fields.AniChartUser,
SiteStatistics: $Fields.SiteStatistics,
ExternalLinkSourceCollection: $Fields.ExternalLinkSourceCollection
}
}