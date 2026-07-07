import type * as $$Utilities from 'graffle/utilities-for-generated'
import type { GraphqlKit } from 'graffle/utilities-for-generated'
import type * as $Fields from './fields.js'
import type { $DefaultSelectionContext } from '../../_context.js'
import type { $FragmentInline } from './fragment.js'

export type * as MediaSubmissionComparison from './__.js'

/**
* Selection set for {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* Media submission with comparison to current data
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 5 |
*/
export interface MediaSubmissionComparison<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.ObjectLike {

      /**
* ```graphql
* submission: MediaSubmissionEdge
*
* type MediaSubmissionEdge {
* id: Int
* characterRole: CharacterRole
* staffRole: String
* roleNotes: String
* dubGroup: String
* characterName: String
* isMain: Boolean
* character: Character
* characterSubmission: Character
* voiceActor: Staff
* voiceActorSubmission: Staff
* staff: Staff
* staffSubmission: Staff
* studio: Studio
* externalLink: MediaExternalLink
* media: Media
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$MediaSubmissionEdge} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$MediaSubmissionComparison} |
* | **Path** | `MediaSubmissionComparison.submission` |
* | **Nullability** | Optional |
*/
submission?: $Fields.submission.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.submission<_$Context>>
/**
* ```graphql
* character: MediaCharacter
*
* type MediaCharacter {
* id: Int
* role: CharacterRole
* roleNotes: String
* dubGroup: String
* characterName: String
* character: Character
* voiceActor: Staff
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$MediaCharacter} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$MediaSubmissionComparison} |
* | **Path** | `MediaSubmissionComparison.character` |
* | **Nullability** | Optional |
*/
character?: $Fields.character.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.character<_$Context>>
/**
* ```graphql
* staff: StaffEdge
*
* type StaffEdge {
* node: Staff
* id: Int
* role: String
* favouriteOrder: Int
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$StaffEdge} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$MediaSubmissionComparison} |
* | **Path** | `MediaSubmissionComparison.staff` |
* | **Nullability** | Optional |
*/
staff?: $Fields.staff.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.staff<_$Context>>
/**
* ```graphql
* studio: StudioEdge
*
* type StudioEdge {
* node: Studio
* id: Int
* isMain: Boolean!
* favouriteOrder: Int
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$StudioEdge} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$MediaSubmissionComparison} |
* | **Path** | `MediaSubmissionComparison.studio` |
* | **Nullability** | Optional |
*/
studio?: $Fields.studio.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.studio<_$Context>>
/**
* ```graphql
* externalLink: MediaExternalLink
*
* type MediaExternalLink {
* id: Int!
* url: String
* site: String!
* siteId: Int
* type: ExternalLinkType
* language: String
* color: String
* icon: String
* notes: String
* isDisabled: Boolean
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$MediaExternalLink} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$MediaSubmissionComparison} |
* | **Path** | `MediaSubmissionComparison.externalLink` |
* | **Nullability** | Optional |
*/
externalLink?: $Fields.externalLink.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.externalLink<_$Context>>
      
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