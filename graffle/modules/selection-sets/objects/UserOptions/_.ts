import type * as $$Utilities from 'graffle/utilities-for-generated'
import type { GraphqlKit } from 'graffle/utilities-for-generated'
import type * as $Fields from './fields.js'
import type { $DefaultSelectionContext } from '../../_context.js'
import type { $FragmentInline } from './fragment.js'

export type * as UserOptions from './__.js'

/**
* Selection set for {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* A user's general options
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 10 |
*/
export interface UserOptions<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.ObjectLike {

      /**
* The language the user wants to see media titles in
*
* ```graphql
* titleLanguage: UserTitleLanguage
*
* enum UserTitleLanguage {
* ROMAJI
* ENGLISH
* NATIVE
* ROMAJI_STYLISED
* ENGLISH_STYLISED
* NATIVE_STYLISED
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$UserTitleLanguage} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Parent** | {@link $NamedTypes.$UserOptions} |
* | **Path** | `UserOptions.titleLanguage` |
* | **Nullability** | Optional |
*/
titleLanguage?: $Fields.titleLanguage.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.titleLanguage<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* Whether the user has enabled viewing of 18+ content
*
* ```graphql
* displayAdultContent: Boolean
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$UserOptions} |
* | **Path** | `UserOptions.displayAdultContent` |
* | **Nullability** | Optional |
*/
displayAdultContent?: $Fields.displayAdultContent.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.displayAdultContent<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* Whether the user receives notifications when a show they are watching aires
*
* ```graphql
* airingNotifications: Boolean
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$UserOptions} |
* | **Path** | `UserOptions.airingNotifications` |
* | **Nullability** | Optional |
*/
airingNotifications?: $Fields.airingNotifications.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.airingNotifications<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* Profile highlight color (blue, purple, pink, orange, red, green, gray)
*
* ```graphql
* profileColor: String
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$UserOptions} |
* | **Path** | `UserOptions.profileColor` |
* | **Nullability** | Optional |
*/
profileColor?: $Fields.profileColor.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.profileColor<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* Notification options
*
* ```graphql
* notificationOptions: [NotificationOption]
*
* type NotificationOption {
* type: NotificationType
* enabled: Boolean
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$NotificationOption}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$UserOptions} |
* | **Path** | `UserOptions.notificationOptions` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
notificationOptions?: $Fields.notificationOptions.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.notificationOptions<_$Context>>
/**
* The user's timezone offset (Auth user only)
*
* ```graphql
* timezone: String
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$UserOptions} |
* | **Path** | `UserOptions.timezone` |
* | **Nullability** | Optional |
*/
timezone?: $Fields.timezone.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.timezone<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* Minutes between activity for them to be merged together. 0 is Never, Above 2 weeks (20160 mins) is Always.
*
* ```graphql
* activityMergeTime: Int
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$UserOptions} |
* | **Path** | `UserOptions.activityMergeTime` |
* | **Nullability** | Optional |
*/
activityMergeTime?: $Fields.activityMergeTime.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.activityMergeTime<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The language the user wants to see staff and character names in
*
* ```graphql
* staffNameLanguage: UserStaffNameLanguage
*
* enum UserStaffNameLanguage {
* ROMAJI_WESTERN
* ROMAJI
* NATIVE
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$UserStaffNameLanguage} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Parent** | {@link $NamedTypes.$UserOptions} |
* | **Path** | `UserOptions.staffNameLanguage` |
* | **Nullability** | Optional |
*/
staffNameLanguage?: $Fields.staffNameLanguage.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.staffNameLanguage<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* Whether the user only allow messages from users they follow
*
* ```graphql
* restrictMessagesToFollowing: Boolean
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$UserOptions} |
* | **Path** | `UserOptions.restrictMessagesToFollowing` |
* | **Nullability** | Optional |
*/
restrictMessagesToFollowing?: $Fields.restrictMessagesToFollowing.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.restrictMessagesToFollowing<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The list activity types the user has disabled from being created from list updates
*
* ```graphql
* disabledListActivity: [ListActivityOption]
*
* type ListActivityOption {
* disabled: Boolean
* type: MediaListStatus
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$ListActivityOption}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$UserOptions} |
* | **Path** | `UserOptions.disabledListActivity` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
disabledListActivity?: $Fields.disabledListActivity.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.disabledListActivity<_$Context>>
      
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