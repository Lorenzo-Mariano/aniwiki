import type * as $$Utilities from 'graffle/utilities-for-generated'
import type { GraphqlKit } from 'graffle/utilities-for-generated'
import type * as $Fields from './fields.js'
import type { $DefaultSelectionContext } from '../../_context.js'
import type { $FragmentInline } from './fragment.js'

export type * as CharacterConnection from './__.js'

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
export interface CharacterConnection<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.ObjectLike {

      /**
* ```graphql
* edges: [CharacterEdge]
*
* type CharacterEdge {
* node: Character
* id: Int
* role: CharacterRole
* name: String
* voiceActors(language: StaffLanguage, sort: [StaffSort]): [Staff]
* voiceActorRoles(language: StaffLanguage, sort: [StaffSort]): [StaffRoleType]
* media: [Media]
* favouriteOrder: Int
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$CharacterEdge}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$CharacterConnection} |
* | **Path** | `CharacterConnection.edges` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
edges?: $Fields.edges.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.edges<_$Context>>
/**
* ```graphql
* nodes: [Character]
*
* type Character {
* id: Int!
* name: CharacterName
* image: CharacterImage
* description(asHtml: Boolean): String
* gender: String
* dateOfBirth: FuzzyDate
* age: String
* bloodType: String
* isFavourite: Boolean!
* isFavouriteBlocked: Boolean!
* siteUrl: String
* media(sort: [MediaSort], type: MediaType, onList: Boolean, page: Int, perPage: Int): MediaConnection
* updatedAt: Int @deprecated(reason: "No data available")
* favourites: Int
* modNotes: String
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Character}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$CharacterConnection} |
* | **Path** | `CharacterConnection.nodes` |
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
* | **Parent** | {@link $NamedTypes.$CharacterConnection} |
* | **Path** | `CharacterConnection.pageInfo` |
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