import type * as $Fields from './fields.js'

export * as MediaList from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* List of anime or manga
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 20 |
*/
export interface MediaList {
kind: "Object",
name: "MediaList",
fields: {
__typename: $Fields.__typename,
id: $Fields.id,
userId: $Fields.userId,
mediaId: $Fields.mediaId,
status: $Fields.status,
score: $Fields.score,
progress: $Fields.progress,
progressVolumes: $Fields.progressVolumes,
repeat: $Fields.repeat,
priority: $Fields.priority,
private: $Fields.private,
notes: $Fields.notes,
hiddenFromStatusLists: $Fields.hiddenFromStatusLists,
customLists: $Fields.customLists,
advancedScores: $Fields.advancedScores,
startedAt: $Fields.startedAt,
completedAt: $Fields.completedAt,
updatedAt: $Fields.updatedAt,
createdAt: $Fields.createdAt,
media: $Fields.media,
user: $Fields.user
}
}