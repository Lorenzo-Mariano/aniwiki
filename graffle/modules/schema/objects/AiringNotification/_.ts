import type * as $Fields from './fields.js'

export * as AiringNotification from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* Notification for when an episode of anime airs
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 7 |
*/
export interface AiringNotification {
kind: "Object",
name: "AiringNotification",
fields: {
__typename: $Fields.__typename,
id: $Fields.id,
type: $Fields.type,
animeId: $Fields.animeId,
episode: $Fields.episode,
contexts: $Fields.contexts,
createdAt: $Fields.createdAt,
media: $Fields.media
}
}