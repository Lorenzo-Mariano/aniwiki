import type * as $$Utilities from 'graffle/utilities-for-generated'
import type { GraphqlKit } from 'graffle/utilities-for-generated'
import type * as $Fields from './fields.js'
import type { $DefaultSelectionContext } from '../../_context.js'
import type { $FragmentInline } from './fragment.js'

export type * as ActivityLikeNotification from './__.js'

/**
* Selection set for {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* Notification for when a activity is liked
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 8 |
*/
export interface ActivityLikeNotification<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.ObjectLike {

      /**
* The id of the Notification
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
* | **Parent** | {@link $NamedTypes.$ActivityLikeNotification} |
* | **Path** | `ActivityLikeNotification.id` |
* | **Nullability** | Required |
*/
id?: $Fields.id.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.id<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The id of the user who liked to the activity
*
* ```graphql
* userId: Int!
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$ActivityLikeNotification} |
* | **Path** | `ActivityLikeNotification.userId` |
* | **Nullability** | Required |
*/
userId?: $Fields.userId.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.userId<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The type of notification
*
* ```graphql
* type: NotificationType
*
* enum NotificationType {
* ACTIVITY_MESSAGE
* ACTIVITY_REPLY
* FOLLOWING
* ACTIVITY_MENTION
* THREAD_COMMENT_MENTION
* THREAD_SUBSCRIBED
* THREAD_COMMENT_REPLY
* AIRING
* ACTIVITY_LIKE
* ACTIVITY_REPLY_LIKE
* THREAD_LIKE
* THREAD_COMMENT_LIKE
* ACTIVITY_REPLY_SUBSCRIBED
* RELATED_MEDIA_ADDITION
* MEDIA_DATA_CHANGE
* MEDIA_MERGE
* MEDIA_DELETION
* MEDIA_SUBMISSION_UPDATE
* STAFF_SUBMISSION_UPDATE
* CHARACTER_SUBMISSION_UPDATE
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$NotificationType} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Parent** | {@link $NamedTypes.$ActivityLikeNotification} |
* | **Path** | `ActivityLikeNotification.type` |
* | **Nullability** | Optional |
*/
type?: $Fields.type.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.type<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The id of the activity which was liked
*
* ```graphql
* activityId: Int!
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$ActivityLikeNotification} |
* | **Path** | `ActivityLikeNotification.activityId` |
* | **Nullability** | Required |
*/
activityId?: $Fields.activityId.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.activityId<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The notification context text
*
* ```graphql
* context: String
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$ActivityLikeNotification} |
* | **Path** | `ActivityLikeNotification.context` |
* | **Nullability** | Optional |
*/
context?: $Fields.context.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.context<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The time the notification was created at
*
* ```graphql
* createdAt: Int
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$ActivityLikeNotification} |
* | **Path** | `ActivityLikeNotification.createdAt` |
* | **Nullability** | Optional |
*/
createdAt?: $Fields.createdAt.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.createdAt<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The liked activity
*
* ```graphql
* activity: ActivityUnion
*
* union ActivityUnion = TextActivity | ListActivity | MessageActivity
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$ActivityUnion} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
* | **Parent** | {@link $NamedTypes.$ActivityLikeNotification} |
* | **Path** | `ActivityLikeNotification.activity` |
* | **Nullability** | Optional |
*/
activity?: $Fields.activity.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.activity<_$Context>>
/**
* The user who liked the activity
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
* | **Parent** | {@link $NamedTypes.$ActivityLikeNotification} |
* | **Path** | `ActivityLikeNotification.user` |
* | **Nullability** | Optional |
*/
user?: $Fields.user.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.user<_$Context>>
      
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