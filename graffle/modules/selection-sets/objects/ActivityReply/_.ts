import type * as $$Utilities from 'graffle/utilities-for-generated'
import type { GraphqlKit } from 'graffle/utilities-for-generated'
import type * as $Fields from './fields.js'
import type { $DefaultSelectionContext } from '../../_context.js'
import type { $FragmentInline } from './fragment.js'

export type * as ActivityReply from './__.js'

/**
* Selection set for {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* Replay to an activity item
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 9 |
*/
export interface ActivityReply<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.ObjectLike {

      /**
* The id of the reply
*
* ```graphql
* id: Int!
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$ActivityReply} |
* | **Path** | `ActivityReply.id` |
* | **Nullability** | Required |
*/
id?: $Fields.id.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.id<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The id of the replies creator
*
* ```graphql
* userId: Int
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$ActivityReply} |
* | **Path** | `ActivityReply.userId` |
* | **Nullability** | Optional |
*/
userId?: $Fields.userId.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.userId<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The id of the parent activity
*
* ```graphql
* activityId: Int
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$ActivityReply} |
* | **Path** | `ActivityReply.activityId` |
* | **Nullability** | Optional |
*/
activityId?: $Fields.activityId.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.activityId<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The reply text
*
* ```graphql
* text(asHtml: Boolean): String
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$ActivityReply} |
* | **Path** | `ActivityReply.text` |
* | **Nullability** | Optional |
* | **Arguments** | 1 |
*/
text?: $Fields.text.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.text<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The amount of likes the reply has
*
* ```graphql
* likeCount: Int!
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$ActivityReply} |
* | **Path** | `ActivityReply.likeCount` |
* | **Nullability** | Required |
*/
likeCount?: $Fields.likeCount.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.likeCount<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* If the currently authenticated user liked the reply
*
* ```graphql
* isLiked: Boolean
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$ActivityReply} |
* | **Path** | `ActivityReply.isLiked` |
* | **Nullability** | Optional |
*/
isLiked?: $Fields.isLiked.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.isLiked<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The time the reply was created at
*
* ```graphql
* createdAt: Int!
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$ActivityReply} |
* | **Path** | `ActivityReply.createdAt` |
* | **Nullability** | Required |
*/
createdAt?: $Fields.createdAt.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.createdAt<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The user who created reply
*
* ```graphql
* user: User
*
* type User {
* id: Int!
* name: String!
* about(asHtml: Boolean): String
* avatar: UserAvatar
* bannerImage: String
* isFollowing: Boolean
* isFollower: Boolean
* isBlocked: Boolean
* bans: Json
* options: UserOptions
* mediaListOptions: MediaListOptions
* favourites(page: Int): Favourites
* statistics: UserStatisticTypes
* unreadNotificationCount: Int
* siteUrl: String
* donatorTier: Int
* donatorBadge: String
* moderatorRoles: [ModRole]
* createdAt: Int
* updatedAt: Int
* stats: UserStats @deprecated(reason: "Deprecated. Replaced with statistics field.")
* moderatorStatus: String @deprecated(reason: "Deprecated. Replaced with moderatorRoles field.")
* previousNames: [UserPreviousName]
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$User} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$ActivityReply} |
* | **Path** | `ActivityReply.user` |
* | **Nullability** | Optional |
*/
user?: $Fields.user.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.user<_$Context>>
/**
* The users who liked the reply
*
* ```graphql
* likes: [User]
*
* type User {
* id: Int!
* name: String!
* about(asHtml: Boolean): String
* avatar: UserAvatar
* bannerImage: String
* isFollowing: Boolean
* isFollower: Boolean
* isBlocked: Boolean
* bans: Json
* options: UserOptions
* mediaListOptions: MediaListOptions
* favourites(page: Int): Favourites
* statistics: UserStatisticTypes
* unreadNotificationCount: Int
* siteUrl: String
* donatorTier: Int
* donatorBadge: String
* moderatorRoles: [ModRole]
* createdAt: Int
* updatedAt: Int
* stats: UserStats @deprecated(reason: "Deprecated. Replaced with statistics field.")
* moderatorStatus: String @deprecated(reason: "Deprecated. Replaced with moderatorRoles field.")
* previousNames: [UserPreviousName]
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$User}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$ActivityReply} |
* | **Path** | `ActivityReply.likes` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
likes?: $Fields.likes.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.likes<_$Context>>
      
      /**
* Inline fragments for field groups.
*
* Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
* selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
*
* @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments}
*/
___?: $FragmentInline<_$Context> | $FragmentInline<_$Context>[]
      /**
* A meta field. Is the name of the type being selected.
*
* @see {@link https://graphql.org/learn/queries/#meta-fields | Meta Fields}
*/
__typename?: GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
    
}