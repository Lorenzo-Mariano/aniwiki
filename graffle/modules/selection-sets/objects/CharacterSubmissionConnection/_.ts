import type * as $$Utilities from 'graffle/utilities-for-generated'
import type { GraphqlKit } from 'graffle/utilities-for-generated'
import type * as $Fields from './fields.js'
import type { $DefaultSelectionContext } from '../../_context.js'
import type { $FragmentInline } from './fragment.js'

export type * as CharacterSubmissionConnection from './__.js'

/**
* Selection set for {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 3 |
*/
export interface CharacterSubmissionConnection<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.ObjectLike {

      /**
* ```graphql
* edges: [CharacterSubmissionEdge]
*
* type CharacterSubmissionEdge {
* node: CharacterSubmission
* role: CharacterRole
* voiceActors: [Staff]
* submittedVoiceActors: [StaffSubmission]
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$CharacterSubmissionEdge}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$CharacterSubmissionConnection} |
* | **Path** | `CharacterSubmissionConnection.edges` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
edges?: $Fields.edges.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.edges<_$Context>>
/**
* ```graphql
* nodes: [CharacterSubmission]
*
* type CharacterSubmission {
* id: Int!
* character: Character
* submission: Character
* submitter: User
* assignee: User
* status: SubmissionStatus
* notes: String
* source: String
* locked: Boolean
* createdAt: Int
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$CharacterSubmission}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$CharacterSubmissionConnection} |
* | **Path** | `CharacterSubmissionConnection.nodes` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
nodes?: $Fields.nodes.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.nodes<_$Context>>
/**
* The pagination information
*
* ```graphql
* pageInfo: PageInfo
*
* type PageInfo {
* total: Int
* perPage: Int
* currentPage: Int
* lastPage: Int
* hasNextPage: Boolean
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$PageInfo} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$CharacterSubmissionConnection} |
* | **Path** | `CharacterSubmissionConnection.pageInfo` |
* | **Nullability** | Optional |
*/
pageInfo?: $Fields.pageInfo.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.pageInfo<_$Context>>
      
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