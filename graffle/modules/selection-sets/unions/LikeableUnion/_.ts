import type * as $$Utilities from 'graffle/utilities-for-generated'
import type { GraphqlKit } from 'graffle/utilities-for-generated'
import type { $DefaultSelectionContext } from '../../_context.js'
import type { $FragmentInline } from './fragment.js'
import type * as $Named from '../../$named.js'

export type * as LikeableUnion from './__.js'

/**
* Selection set for {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union}.
*
* Likeable union type
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
* | **Members** | 6 |
* | **Types** | {@link $Schema.ListActivity}, {@link $Schema.TextActivity}, {@link $Schema.MessageActivity}, {@link $Schema.ActivityReply}, {@link $Schema.Thread}, {@link $Schema.ThreadComment} |
*/
export interface LikeableUnion<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {

      /**
* A meta field. Is the name of the type being selected. Since this is a union type and thus polymorphic,
* the name is one of the member type names, whichever is ultimately returned at runtime.
*
* @see {@link https://graphql.org/learn/queries/#meta-fields | Meta Fields}
*/
__typename?: GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
      /**
* Inline fragment selection for {@link $Schema.ListActivity} member.
*
* When the runtime value is of type {@link $Schema.ListActivity}, this selection set is applied, allowing you to select fields specific to this member type.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.ListActivity} |
* | **Kind** | Union Member |
* | **Parent** | {@link $Schema.LikeableUnion} |
* | **Path** | `LikeableUnion -> ListActivity` |
*
* @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments}
* @see {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union Types}
*
* @example
* ```ts
* query.likeableunions({
* __typename: true,
* ___on_ListActivity: {
* // ... ListActivity-specific fields
* }
* })
* ```
*/
___on_ListActivity?: $Named.ListActivity<_$Context>
/**
* Inline fragment selection for {@link $Schema.TextActivity} member.
*
* When the runtime value is of type {@link $Schema.TextActivity}, this selection set is applied, allowing you to select fields specific to this member type.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.TextActivity} |
* | **Kind** | Union Member |
* | **Parent** | {@link $Schema.LikeableUnion} |
* | **Path** | `LikeableUnion -> TextActivity` |
*
* @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments}
* @see {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union Types}
*
* @example
* ```ts
* query.likeableunions({
* __typename: true,
* ___on_TextActivity: {
* // ... TextActivity-specific fields
* }
* })
* ```
*/
___on_TextActivity?: $Named.TextActivity<_$Context>
/**
* Inline fragment selection for {@link $Schema.MessageActivity} member.
*
* When the runtime value is of type {@link $Schema.MessageActivity}, this selection set is applied, allowing you to select fields specific to this member type.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MessageActivity} |
* | **Kind** | Union Member |
* | **Parent** | {@link $Schema.LikeableUnion} |
* | **Path** | `LikeableUnion -> MessageActivity` |
*
* @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments}
* @see {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union Types}
*
* @example
* ```ts
* query.likeableunions({
* __typename: true,
* ___on_MessageActivity: {
* // ... MessageActivity-specific fields
* }
* })
* ```
*/
___on_MessageActivity?: $Named.MessageActivity<_$Context>
/**
* Inline fragment selection for {@link $Schema.ActivityReply} member.
*
* When the runtime value is of type {@link $Schema.ActivityReply}, this selection set is applied, allowing you to select fields specific to this member type.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.ActivityReply} |
* | **Kind** | Union Member |
* | **Parent** | {@link $Schema.LikeableUnion} |
* | **Path** | `LikeableUnion -> ActivityReply` |
*
* @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments}
* @see {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union Types}
*
* @example
* ```ts
* query.likeableunions({
* __typename: true,
* ___on_ActivityReply: {
* // ... ActivityReply-specific fields
* }
* })
* ```
*/
___on_ActivityReply?: $Named.ActivityReply<_$Context>
/**
* Inline fragment selection for {@link $Schema.Thread} member.
*
* When the runtime value is of type {@link $Schema.Thread}, this selection set is applied, allowing you to select fields specific to this member type.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Thread} |
* | **Kind** | Union Member |
* | **Parent** | {@link $Schema.LikeableUnion} |
* | **Path** | `LikeableUnion -> Thread` |
*
* @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments}
* @see {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union Types}
*
* @example
* ```ts
* query.likeableunions({
* __typename: true,
* ___on_Thread: {
* // ... Thread-specific fields
* }
* })
* ```
*/
___on_Thread?: $Named.Thread<_$Context>
/**
* Inline fragment selection for {@link $Schema.ThreadComment} member.
*
* When the runtime value is of type {@link $Schema.ThreadComment}, this selection set is applied, allowing you to select fields specific to this member type.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.ThreadComment} |
* | **Kind** | Union Member |
* | **Parent** | {@link $Schema.LikeableUnion} |
* | **Path** | `LikeableUnion -> ThreadComment` |
*
* @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments}
* @see {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union Types}
*
* @example
* ```ts
* query.likeableunions({
* __typename: true,
* ___on_ThreadComment: {
* // ... ThreadComment-specific fields
* }
* })
* ```
*/
___on_ThreadComment?: $Named.ThreadComment<_$Context>
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