import type * as $Fields from './fields.js'

export * as UserVoiceActorStatistic from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 7 |
*/
export interface UserVoiceActorStatistic {
kind: "Object",
name: "UserVoiceActorStatistic",
fields: {
__typename: $Fields.__typename,
count: $Fields.count,
meanScore: $Fields.meanScore,
minutesWatched: $Fields.minutesWatched,
chaptersRead: $Fields.chaptersRead,
mediaIds: $Fields.mediaIds,
voiceActor: $Fields.voiceActor,
characterIds: $Fields.characterIds
}
}