import type * as $$Utilities from 'graffle/utilities-for-generated'
import type { GraphqlKit } from 'graffle/utilities-for-generated'
import type * as $Fields from './fields.js'
import type { $DefaultSelectionContext } from '../../_context.js'
import type { $FragmentInline } from './fragment.js'

export type * as StaffSubmissionUpdateNotification from './__.js'

/**
* Selection set for {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* Notification for when a staff submission is accepted, partially accepted, or rejected
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 7 |
*/
export interface StaffSubmissionUpdateNotification<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.ObjectLike {

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
* | **Parent** | {@link $NamedTypes.$StaffSubmissionUpdateNotification} |
* | **Path** | `StaffSubmissionUpdateNotification.id` |
* | **Nullability** | Required |
*/
id?: $Fields.id.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.id<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
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
* | **Parent** | {@link $NamedTypes.$StaffSubmissionUpdateNotification} |
* | **Path** | `StaffSubmissionUpdateNotification.type` |
* | **Nullability** | Optional |
*/
type?: $Fields.type.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.type<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The notification context text
*
* ```graphql
* contexts: [String]
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$String}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$StaffSubmissionUpdateNotification} |
* | **Path** | `StaffSubmissionUpdateNotification.contexts` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
contexts?: $Fields.contexts.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.contexts<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The status of the submission
*
* ```graphql
* status: String
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$StaffSubmissionUpdateNotification} |
* | **Path** | `StaffSubmissionUpdateNotification.status` |
* | **Nullability** | Optional |
*/
status?: $Fields.status.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.status<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The notes of the submission
*
* ```graphql
* notes: String
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$StaffSubmissionUpdateNotification} |
* | **Path** | `StaffSubmissionUpdateNotification.notes` |
* | **Nullability** | Optional |
*/
notes?: $Fields.notes.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.notes<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
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
* | **Parent** | {@link $NamedTypes.$StaffSubmissionUpdateNotification} |
* | **Path** | `StaffSubmissionUpdateNotification.createdAt` |
* | **Nullability** | Optional |
*/
createdAt?: $Fields.createdAt.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.createdAt<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The staff that was modified.
*
* ```graphql
* staff: Staff
*
* type Staff {
* id: Int!
* name: StaffName
* language: StaffLanguage @deprecated(reason: "Replaced with languageV2")
* languageV2: String
* image: StaffImage
* description(asHtml: Boolean): String
* primaryOccupations: [String]
* gender: String
* dateOfBirth: FuzzyDate
* dateOfDeath: FuzzyDate
* age: Int
* yearsActive: [Int]
* homeTown: String
* bloodType: String
* isFavourite: Boolean!
* isFavouriteBlocked: Boolean!
* siteUrl: String
* staffMedia(sort: [MediaSort], type: MediaType, onList: Boolean, page: Int, perPage: Int): MediaConnection
* characters(sort: [CharacterSort], page: Int, perPage: Int): CharacterConnection
* characterMedia(sort: [MediaSort], onList: Boolean, page: Int, perPage: Int): MediaConnection
* updatedAt: Int @deprecated(reason: "No data available")
* staff: Staff
* submitter: User
* submissionStatus: Int
* submissionNotes: String
* favourites: Int
* modNotes: String
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Staff} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$StaffSubmissionUpdateNotification} |
* | **Path** | `StaffSubmissionUpdateNotification.staff` |
* | **Nullability** | Optional |
*/
staff?: $Fields.staff.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.staff<_$Context>>
      
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