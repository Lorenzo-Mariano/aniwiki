import type * as $Fields from './fields.js'

export * as User from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* A user
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 23 |
*/
export interface User {
kind: "Object",
name: "User",
fields: {
__typename: $Fields.__typename,
id: $Fields.id,
name: $Fields.name,
about: $Fields.about,
avatar: $Fields.avatar,
bannerImage: $Fields.bannerImage,
isFollowing: $Fields.isFollowing,
isFollower: $Fields.isFollower,
isBlocked: $Fields.isBlocked,
bans: $Fields.bans,
options: $Fields.options,
mediaListOptions: $Fields.mediaListOptions,
favourites: $Fields.favourites,
statistics: $Fields.statistics,
unreadNotificationCount: $Fields.unreadNotificationCount,
siteUrl: $Fields.siteUrl,
donatorTier: $Fields.donatorTier,
donatorBadge: $Fields.donatorBadge,
moderatorRoles: $Fields.moderatorRoles,
createdAt: $Fields.createdAt,
updatedAt: $Fields.updatedAt,
stats: $Fields.stats,
moderatorStatus: $Fields.moderatorStatus,
previousNames: $Fields.previousNames
}
}