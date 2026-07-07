import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"User"`
*
* {@link https://graphql.org/learn/queries/#meta-fields | GraphQL __typename documentation}
*/
export interface __typename {
kind: "OutputField",
name: "__typename",
arguments: {},
inlineType: [1],
namedType: {
kind: "__typename",
value: "User"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.User}.
*
* The id of the user
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.User} |
* | **Path** | `User.id` |
* | **Nullability** | Required |
*/
export interface id {
kind: "OutputField",
name: "id",
arguments: {},
inlineType: [1, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.User}.
*
* The name of the user
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.User} |
* | **Path** | `User.name` |
* | **Nullability** | Required |
*/
export interface name {
kind: "OutputField",
name: "name",
arguments: {},
inlineType: [1, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.User}.
*
* The bio written by user (Markdown)
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.User} |
* | **Path** | `User.about` |
* | **Nullability** | Optional |
* | **Arguments** | 1 |
*/
export interface about {
kind: "OutputField",
name: "about",
arguments: {
/**
* Return the string in pre-parsed html instead of markdown
*/
asHtml: {
kind: "InputField",
name: "asHtml",
inlineType: [0, ],
namedType: $Schema.Boolean
}
},
inlineType: [0, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.User}.
*
* The user's avatar images
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.UserAvatar} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.User} |
* | **Path** | `User.avatar` |
* | **Nullability** | Optional |
*/
export interface avatar {
kind: "OutputField",
name: "avatar",
arguments: {},
inlineType: [0, ],
namedType: $Schema.UserAvatar
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.User}.
*
* The user's banner images
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.User} |
* | **Path** | `User.bannerImage` |
* | **Nullability** | Optional |
*/
export interface bannerImage {
kind: "OutputField",
name: "bannerImage",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.User}.
*
* If the authenticated user if following this user
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.User} |
* | **Path** | `User.isFollowing` |
* | **Nullability** | Optional |
*/
export interface isFollowing {
kind: "OutputField",
name: "isFollowing",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Boolean
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.User}.
*
* If this user if following the authenticated user
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.User} |
* | **Path** | `User.isFollower` |
* | **Nullability** | Optional |
*/
export interface isFollower {
kind: "OutputField",
name: "isFollower",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Boolean
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.User}.
*
* If the user is blocked by the authenticated user
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.User} |
* | **Path** | `User.isBlocked` |
* | **Nullability** | Optional |
*/
export interface isBlocked {
kind: "OutputField",
name: "isBlocked",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Boolean
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.User}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Json} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
* | **Parent** | {@link $Schema.User} |
* | **Path** | `User.bans` |
* | **Nullability** | Optional |
*/
export interface bans {
kind: "OutputField",
name: "bans",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Json
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.User}.
*
* The user's general options
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.UserOptions} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.User} |
* | **Path** | `User.options` |
* | **Nullability** | Optional |
*/
export interface options {
kind: "OutputField",
name: "options",
arguments: {},
inlineType: [0, ],
namedType: $Schema.UserOptions
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.User}.
*
* The user's media list options
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaListOptions} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.User} |
* | **Path** | `User.mediaListOptions` |
* | **Nullability** | Optional |
*/
export interface mediaListOptions {
kind: "OutputField",
name: "mediaListOptions",
arguments: {},
inlineType: [0, ],
namedType: $Schema.MediaListOptions
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.User}.
*
* The users favourites
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Favourites} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.User} |
* | **Path** | `User.favourites` |
* | **Nullability** | Optional |
* | **Arguments** | 1 |
*/
export interface favourites {
kind: "OutputField",
name: "favourites",
arguments: {
/**
* Deprecated. Use page arguments on each favourite field instead.
*/
page: {
kind: "InputField",
name: "page",
inlineType: [0, ],
namedType: $Schema.Int
}
},
inlineType: [0, ],
namedType: $Schema.Favourites
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.User}.
*
* The users anime & manga list statistics
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.UserStatisticTypes} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.User} |
* | **Path** | `User.statistics` |
* | **Nullability** | Optional |
*/
export interface statistics {
kind: "OutputField",
name: "statistics",
arguments: {},
inlineType: [0, ],
namedType: $Schema.UserStatisticTypes
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.User}.
*
* The number of unread notifications the user has
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.User} |
* | **Path** | `User.unreadNotificationCount` |
* | **Nullability** | Optional |
*/
export interface unreadNotificationCount {
kind: "OutputField",
name: "unreadNotificationCount",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.User}.
*
* The url for the user page on the AniList website
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.User} |
* | **Path** | `User.siteUrl` |
* | **Nullability** | Optional |
*/
export interface siteUrl {
kind: "OutputField",
name: "siteUrl",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.User}.
*
* The donation tier of the user
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.User} |
* | **Path** | `User.donatorTier` |
* | **Nullability** | Optional |
*/
export interface donatorTier {
kind: "OutputField",
name: "donatorTier",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.User}.
*
* Custom donation badge text
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.User} |
* | **Path** | `User.donatorBadge` |
* | **Nullability** | Optional |
*/
export interface donatorBadge {
kind: "OutputField",
name: "donatorBadge",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.User}.
*
* The user's moderator roles if they are a site moderator
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.ModRole}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Parent** | {@link $Schema.User} |
* | **Path** | `User.moderatorRoles` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface moderatorRoles {
kind: "OutputField",
name: "moderatorRoles",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.ModRole
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.User}.
*
* When the user's account was created. (Does not exist for accounts created before 2020)
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.User} |
* | **Path** | `User.createdAt` |
* | **Nullability** | Optional |
*/
export interface createdAt {
kind: "OutputField",
name: "createdAt",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.User}.
*
* When the user's data was last updated
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.User} |
* | **Path** | `User.updatedAt` |
* | **Nullability** | Optional |
*/
export interface updatedAt {
kind: "OutputField",
name: "updatedAt",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.User}.
*
* The user's statistics
*
* @deprecated Deprecated. Replaced with statistics field.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.UserStats} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.User} |
* | **Path** | `User.stats` |
* | **⚠ Deprecated** | Deprecated. Replaced with statistics field. |
* | **Nullability** | Optional |
*/
export interface stats {
kind: "OutputField",
name: "stats",
arguments: {},
inlineType: [0, ],
namedType: $Schema.UserStats
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.User}.
*
* If the user is a moderator or data moderator
*
* @deprecated Deprecated. Replaced with moderatorRoles field.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.User} |
* | **Path** | `User.moderatorStatus` |
* | **⚠ Deprecated** | Deprecated. Replaced with moderatorRoles field. |
* | **Nullability** | Optional |
*/
export interface moderatorStatus {
kind: "OutputField",
name: "moderatorStatus",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.User}.
*
* The user's previously used names.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.UserPreviousName}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.User} |
* | **Path** | `User.previousNames` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface previousNames {
kind: "OutputField",
name: "previousNames",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.UserPreviousName
}
