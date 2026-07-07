import type * as $$Utilities from 'graffle/utilities-for-generated'
import type { GraphqlKit } from 'graffle/utilities-for-generated'
import type { $DefaultSelectionContext } from '../../_context.js'
import type { $FragmentInline } from './fragment.js'
import type * as $Named from '../../$named.js'

export type * as NotificationUnion from './__.js'

/**
* Selection set for {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union}.
*
* Notification union type
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
* | **Members** | 20 |
* | **Types** | {@link $Schema.AiringNotification}, {@link $Schema.FollowingNotification}, {@link $Schema.ActivityMessageNotification}, {@link $Schema.ActivityMentionNotification}, {@link $Schema.ActivityReplyNotification}, {@link $Schema.ActivityReplySubscribedNotification}, {@link $Schema.ActivityLikeNotification}, {@link $Schema.ActivityReplyLikeNotification}, {@link $Schema.ThreadCommentMentionNotification}, {@link $Schema.ThreadCommentReplyNotification}, {@link $Schema.ThreadCommentSubscribedNotification}, {@link $Schema.ThreadCommentLikeNotification}, {@link $Schema.ThreadLikeNotification}, {@link $Schema.RelatedMediaAdditionNotification}, {@link $Schema.MediaDataChangeNotification}, {@link $Schema.MediaMergeNotification}, {@link $Schema.MediaDeletionNotification}, {@link $Schema.MediaSubmissionUpdateNotification}, {@link $Schema.StaffSubmissionUpdateNotification}, {@link $Schema.CharacterSubmissionUpdateNotification} |
*/
export interface NotificationUnion<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {

      /**
* A meta field. Is the name of the type being selected. Since this is a union type and thus polymorphic,
* the name is one of the member type names, whichever is ultimately returned at runtime.
*
* @see {@link https://graphql.org/learn/queries/#meta-fields | Meta Fields}
*/
__typename?: GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
      /**
* Inline fragment selection for {@link $Schema.AiringNotification} member.
*
* When the runtime value is of type {@link $Schema.AiringNotification}, this selection set is applied, allowing you to select fields specific to this member type.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.AiringNotification} |
* | **Kind** | Union Member |
* | **Parent** | {@link $Schema.NotificationUnion} |
* | **Path** | `NotificationUnion -> AiringNotification` |
*
* @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments}
* @see {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union Types}
*
* @example
* ```ts
* query.notificationunions({
* __typename: true,
* ___on_AiringNotification: {
* // ... AiringNotification-specific fields
* }
* })
* ```
*/
___on_AiringNotification?: $Named.AiringNotification<_$Context>
/**
* Inline fragment selection for {@link $Schema.FollowingNotification} member.
*
* When the runtime value is of type {@link $Schema.FollowingNotification}, this selection set is applied, allowing you to select fields specific to this member type.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.FollowingNotification} |
* | **Kind** | Union Member |
* | **Parent** | {@link $Schema.NotificationUnion} |
* | **Path** | `NotificationUnion -> FollowingNotification` |
*
* @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments}
* @see {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union Types}
*
* @example
* ```ts
* query.notificationunions({
* __typename: true,
* ___on_FollowingNotification: {
* // ... FollowingNotification-specific fields
* }
* })
* ```
*/
___on_FollowingNotification?: $Named.FollowingNotification<_$Context>
/**
* Inline fragment selection for {@link $Schema.ActivityMessageNotification} member.
*
* When the runtime value is of type {@link $Schema.ActivityMessageNotification}, this selection set is applied, allowing you to select fields specific to this member type.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.ActivityMessageNotification} |
* | **Kind** | Union Member |
* | **Parent** | {@link $Schema.NotificationUnion} |
* | **Path** | `NotificationUnion -> ActivityMessageNotification` |
*
* @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments}
* @see {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union Types}
*
* @example
* ```ts
* query.notificationunions({
* __typename: true,
* ___on_ActivityMessageNotification: {
* // ... ActivityMessageNotification-specific fields
* }
* })
* ```
*/
___on_ActivityMessageNotification?: $Named.ActivityMessageNotification<_$Context>
/**
* Inline fragment selection for {@link $Schema.ActivityMentionNotification} member.
*
* When the runtime value is of type {@link $Schema.ActivityMentionNotification}, this selection set is applied, allowing you to select fields specific to this member type.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.ActivityMentionNotification} |
* | **Kind** | Union Member |
* | **Parent** | {@link $Schema.NotificationUnion} |
* | **Path** | `NotificationUnion -> ActivityMentionNotification` |
*
* @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments}
* @see {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union Types}
*
* @example
* ```ts
* query.notificationunions({
* __typename: true,
* ___on_ActivityMentionNotification: {
* // ... ActivityMentionNotification-specific fields
* }
* })
* ```
*/
___on_ActivityMentionNotification?: $Named.ActivityMentionNotification<_$Context>
/**
* Inline fragment selection for {@link $Schema.ActivityReplyNotification} member.
*
* When the runtime value is of type {@link $Schema.ActivityReplyNotification}, this selection set is applied, allowing you to select fields specific to this member type.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.ActivityReplyNotification} |
* | **Kind** | Union Member |
* | **Parent** | {@link $Schema.NotificationUnion} |
* | **Path** | `NotificationUnion -> ActivityReplyNotification` |
*
* @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments}
* @see {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union Types}
*
* @example
* ```ts
* query.notificationunions({
* __typename: true,
* ___on_ActivityReplyNotification: {
* // ... ActivityReplyNotification-specific fields
* }
* })
* ```
*/
___on_ActivityReplyNotification?: $Named.ActivityReplyNotification<_$Context>
/**
* Inline fragment selection for {@link $Schema.ActivityReplySubscribedNotification} member.
*
* When the runtime value is of type {@link $Schema.ActivityReplySubscribedNotification}, this selection set is applied, allowing you to select fields specific to this member type.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.ActivityReplySubscribedNotification} |
* | **Kind** | Union Member |
* | **Parent** | {@link $Schema.NotificationUnion} |
* | **Path** | `NotificationUnion -> ActivityReplySubscribedNotification` |
*
* @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments}
* @see {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union Types}
*
* @example
* ```ts
* query.notificationunions({
* __typename: true,
* ___on_ActivityReplySubscribedNotification: {
* // ... ActivityReplySubscribedNotification-specific fields
* }
* })
* ```
*/
___on_ActivityReplySubscribedNotification?: $Named.ActivityReplySubscribedNotification<_$Context>
/**
* Inline fragment selection for {@link $Schema.ActivityLikeNotification} member.
*
* When the runtime value is of type {@link $Schema.ActivityLikeNotification}, this selection set is applied, allowing you to select fields specific to this member type.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.ActivityLikeNotification} |
* | **Kind** | Union Member |
* | **Parent** | {@link $Schema.NotificationUnion} |
* | **Path** | `NotificationUnion -> ActivityLikeNotification` |
*
* @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments}
* @see {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union Types}
*
* @example
* ```ts
* query.notificationunions({
* __typename: true,
* ___on_ActivityLikeNotification: {
* // ... ActivityLikeNotification-specific fields
* }
* })
* ```
*/
___on_ActivityLikeNotification?: $Named.ActivityLikeNotification<_$Context>
/**
* Inline fragment selection for {@link $Schema.ActivityReplyLikeNotification} member.
*
* When the runtime value is of type {@link $Schema.ActivityReplyLikeNotification}, this selection set is applied, allowing you to select fields specific to this member type.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.ActivityReplyLikeNotification} |
* | **Kind** | Union Member |
* | **Parent** | {@link $Schema.NotificationUnion} |
* | **Path** | `NotificationUnion -> ActivityReplyLikeNotification` |
*
* @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments}
* @see {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union Types}
*
* @example
* ```ts
* query.notificationunions({
* __typename: true,
* ___on_ActivityReplyLikeNotification: {
* // ... ActivityReplyLikeNotification-specific fields
* }
* })
* ```
*/
___on_ActivityReplyLikeNotification?: $Named.ActivityReplyLikeNotification<_$Context>
/**
* Inline fragment selection for {@link $Schema.ThreadCommentMentionNotification} member.
*
* When the runtime value is of type {@link $Schema.ThreadCommentMentionNotification}, this selection set is applied, allowing you to select fields specific to this member type.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.ThreadCommentMentionNotification} |
* | **Kind** | Union Member |
* | **Parent** | {@link $Schema.NotificationUnion} |
* | **Path** | `NotificationUnion -> ThreadCommentMentionNotification` |
*
* @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments}
* @see {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union Types}
*
* @example
* ```ts
* query.notificationunions({
* __typename: true,
* ___on_ThreadCommentMentionNotification: {
* // ... ThreadCommentMentionNotification-specific fields
* }
* })
* ```
*/
___on_ThreadCommentMentionNotification?: $Named.ThreadCommentMentionNotification<_$Context>
/**
* Inline fragment selection for {@link $Schema.ThreadCommentReplyNotification} member.
*
* When the runtime value is of type {@link $Schema.ThreadCommentReplyNotification}, this selection set is applied, allowing you to select fields specific to this member type.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.ThreadCommentReplyNotification} |
* | **Kind** | Union Member |
* | **Parent** | {@link $Schema.NotificationUnion} |
* | **Path** | `NotificationUnion -> ThreadCommentReplyNotification` |
*
* @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments}
* @see {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union Types}
*
* @example
* ```ts
* query.notificationunions({
* __typename: true,
* ___on_ThreadCommentReplyNotification: {
* // ... ThreadCommentReplyNotification-specific fields
* }
* })
* ```
*/
___on_ThreadCommentReplyNotification?: $Named.ThreadCommentReplyNotification<_$Context>
/**
* Inline fragment selection for {@link $Schema.ThreadCommentSubscribedNotification} member.
*
* When the runtime value is of type {@link $Schema.ThreadCommentSubscribedNotification}, this selection set is applied, allowing you to select fields specific to this member type.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.ThreadCommentSubscribedNotification} |
* | **Kind** | Union Member |
* | **Parent** | {@link $Schema.NotificationUnion} |
* | **Path** | `NotificationUnion -> ThreadCommentSubscribedNotification` |
*
* @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments}
* @see {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union Types}
*
* @example
* ```ts
* query.notificationunions({
* __typename: true,
* ___on_ThreadCommentSubscribedNotification: {
* // ... ThreadCommentSubscribedNotification-specific fields
* }
* })
* ```
*/
___on_ThreadCommentSubscribedNotification?: $Named.ThreadCommentSubscribedNotification<_$Context>
/**
* Inline fragment selection for {@link $Schema.ThreadCommentLikeNotification} member.
*
* When the runtime value is of type {@link $Schema.ThreadCommentLikeNotification}, this selection set is applied, allowing you to select fields specific to this member type.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.ThreadCommentLikeNotification} |
* | **Kind** | Union Member |
* | **Parent** | {@link $Schema.NotificationUnion} |
* | **Path** | `NotificationUnion -> ThreadCommentLikeNotification` |
*
* @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments}
* @see {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union Types}
*
* @example
* ```ts
* query.notificationunions({
* __typename: true,
* ___on_ThreadCommentLikeNotification: {
* // ... ThreadCommentLikeNotification-specific fields
* }
* })
* ```
*/
___on_ThreadCommentLikeNotification?: $Named.ThreadCommentLikeNotification<_$Context>
/**
* Inline fragment selection for {@link $Schema.ThreadLikeNotification} member.
*
* When the runtime value is of type {@link $Schema.ThreadLikeNotification}, this selection set is applied, allowing you to select fields specific to this member type.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.ThreadLikeNotification} |
* | **Kind** | Union Member |
* | **Parent** | {@link $Schema.NotificationUnion} |
* | **Path** | `NotificationUnion -> ThreadLikeNotification` |
*
* @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments}
* @see {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union Types}
*
* @example
* ```ts
* query.notificationunions({
* __typename: true,
* ___on_ThreadLikeNotification: {
* // ... ThreadLikeNotification-specific fields
* }
* })
* ```
*/
___on_ThreadLikeNotification?: $Named.ThreadLikeNotification<_$Context>
/**
* Inline fragment selection for {@link $Schema.RelatedMediaAdditionNotification} member.
*
* When the runtime value is of type {@link $Schema.RelatedMediaAdditionNotification}, this selection set is applied, allowing you to select fields specific to this member type.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.RelatedMediaAdditionNotification} |
* | **Kind** | Union Member |
* | **Parent** | {@link $Schema.NotificationUnion} |
* | **Path** | `NotificationUnion -> RelatedMediaAdditionNotification` |
*
* @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments}
* @see {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union Types}
*
* @example
* ```ts
* query.notificationunions({
* __typename: true,
* ___on_RelatedMediaAdditionNotification: {
* // ... RelatedMediaAdditionNotification-specific fields
* }
* })
* ```
*/
___on_RelatedMediaAdditionNotification?: $Named.RelatedMediaAdditionNotification<_$Context>
/**
* Inline fragment selection for {@link $Schema.MediaDataChangeNotification} member.
*
* When the runtime value is of type {@link $Schema.MediaDataChangeNotification}, this selection set is applied, allowing you to select fields specific to this member type.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaDataChangeNotification} |
* | **Kind** | Union Member |
* | **Parent** | {@link $Schema.NotificationUnion} |
* | **Path** | `NotificationUnion -> MediaDataChangeNotification` |
*
* @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments}
* @see {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union Types}
*
* @example
* ```ts
* query.notificationunions({
* __typename: true,
* ___on_MediaDataChangeNotification: {
* // ... MediaDataChangeNotification-specific fields
* }
* })
* ```
*/
___on_MediaDataChangeNotification?: $Named.MediaDataChangeNotification<_$Context>
/**
* Inline fragment selection for {@link $Schema.MediaMergeNotification} member.
*
* When the runtime value is of type {@link $Schema.MediaMergeNotification}, this selection set is applied, allowing you to select fields specific to this member type.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaMergeNotification} |
* | **Kind** | Union Member |
* | **Parent** | {@link $Schema.NotificationUnion} |
* | **Path** | `NotificationUnion -> MediaMergeNotification` |
*
* @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments}
* @see {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union Types}
*
* @example
* ```ts
* query.notificationunions({
* __typename: true,
* ___on_MediaMergeNotification: {
* // ... MediaMergeNotification-specific fields
* }
* })
* ```
*/
___on_MediaMergeNotification?: $Named.MediaMergeNotification<_$Context>
/**
* Inline fragment selection for {@link $Schema.MediaDeletionNotification} member.
*
* When the runtime value is of type {@link $Schema.MediaDeletionNotification}, this selection set is applied, allowing you to select fields specific to this member type.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaDeletionNotification} |
* | **Kind** | Union Member |
* | **Parent** | {@link $Schema.NotificationUnion} |
* | **Path** | `NotificationUnion -> MediaDeletionNotification` |
*
* @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments}
* @see {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union Types}
*
* @example
* ```ts
* query.notificationunions({
* __typename: true,
* ___on_MediaDeletionNotification: {
* // ... MediaDeletionNotification-specific fields
* }
* })
* ```
*/
___on_MediaDeletionNotification?: $Named.MediaDeletionNotification<_$Context>
/**
* Inline fragment selection for {@link $Schema.MediaSubmissionUpdateNotification} member.
*
* When the runtime value is of type {@link $Schema.MediaSubmissionUpdateNotification}, this selection set is applied, allowing you to select fields specific to this member type.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaSubmissionUpdateNotification} |
* | **Kind** | Union Member |
* | **Parent** | {@link $Schema.NotificationUnion} |
* | **Path** | `NotificationUnion -> MediaSubmissionUpdateNotification` |
*
* @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments}
* @see {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union Types}
*
* @example
* ```ts
* query.notificationunions({
* __typename: true,
* ___on_MediaSubmissionUpdateNotification: {
* // ... MediaSubmissionUpdateNotification-specific fields
* }
* })
* ```
*/
___on_MediaSubmissionUpdateNotification?: $Named.MediaSubmissionUpdateNotification<_$Context>
/**
* Inline fragment selection for {@link $Schema.StaffSubmissionUpdateNotification} member.
*
* When the runtime value is of type {@link $Schema.StaffSubmissionUpdateNotification}, this selection set is applied, allowing you to select fields specific to this member type.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.StaffSubmissionUpdateNotification} |
* | **Kind** | Union Member |
* | **Parent** | {@link $Schema.NotificationUnion} |
* | **Path** | `NotificationUnion -> StaffSubmissionUpdateNotification` |
*
* @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments}
* @see {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union Types}
*
* @example
* ```ts
* query.notificationunions({
* __typename: true,
* ___on_StaffSubmissionUpdateNotification: {
* // ... StaffSubmissionUpdateNotification-specific fields
* }
* })
* ```
*/
___on_StaffSubmissionUpdateNotification?: $Named.StaffSubmissionUpdateNotification<_$Context>
/**
* Inline fragment selection for {@link $Schema.CharacterSubmissionUpdateNotification} member.
*
* When the runtime value is of type {@link $Schema.CharacterSubmissionUpdateNotification}, this selection set is applied, allowing you to select fields specific to this member type.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.CharacterSubmissionUpdateNotification} |
* | **Kind** | Union Member |
* | **Parent** | {@link $Schema.NotificationUnion} |
* | **Path** | `NotificationUnion -> CharacterSubmissionUpdateNotification` |
*
* @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments}
* @see {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union Types}
*
* @example
* ```ts
* query.notificationunions({
* __typename: true,
* ___on_CharacterSubmissionUpdateNotification: {
* // ... CharacterSubmissionUpdateNotification-specific fields
* }
* })
* ```
*/
___on_CharacterSubmissionUpdateNotification?: $Named.CharacterSubmissionUpdateNotification<_$Context>
      /**
* Inline fragments for field groups.
*
* Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
* selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
*
* @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments}
*/
___?: $FragmentInline<_$Context> | $FragmentInline<_$Context>[]
    
}