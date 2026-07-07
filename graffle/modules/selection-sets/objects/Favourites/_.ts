import type * as $$Utilities from 'graffle/utilities-for-generated'
import type { GraphqlKit } from 'graffle/utilities-for-generated'
import type * as $Fields from './fields.js'
import type { $DefaultSelectionContext } from '../../_context.js'
import type { $FragmentInline } from './fragment.js'

export type * as Favourites from './__.js'

/**
* Selection set for {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* User's favourite anime, manga, characters, staff & studios
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 5 |
*/
export interface Favourites<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.ObjectLike {

      /**
* Favourite anime
*
* ```graphql
* anime(page: Int, perPage: Int): MediaConnection
*
* type MediaConnection {
* edges: [MediaEdge]
* nodes: [Media]
* pageInfo: PageInfo
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$MediaConnection} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Favourites} |
* | **Path** | `Favourites.anime` |
* | **Nullability** | Optional |
* | **Arguments** | 2 |
*/
anime?: $Fields.anime.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.anime<_$Context>>
/**
* Favourite manga
*
* ```graphql
* manga(page: Int, perPage: Int): MediaConnection
*
* type MediaConnection {
* edges: [MediaEdge]
* nodes: [Media]
* pageInfo: PageInfo
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$MediaConnection} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Favourites} |
* | **Path** | `Favourites.manga` |
* | **Nullability** | Optional |
* | **Arguments** | 2 |
*/
manga?: $Fields.manga.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.manga<_$Context>>
/**
* Favourite characters
*
* ```graphql
* characters(page: Int, perPage: Int): CharacterConnection
*
* type CharacterConnection {
* edges: [CharacterEdge]
* nodes: [Character]
* pageInfo: PageInfo
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$CharacterConnection} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Favourites} |
* | **Path** | `Favourites.characters` |
* | **Nullability** | Optional |
* | **Arguments** | 2 |
*/
characters?: $Fields.characters.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.characters<_$Context>>
/**
* Favourite staff
*
* ```graphql
* staff(page: Int, perPage: Int): StaffConnection
*
* type StaffConnection {
* edges: [StaffEdge]
* nodes: [Staff]
* pageInfo: PageInfo
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$StaffConnection} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Favourites} |
* | **Path** | `Favourites.staff` |
* | **Nullability** | Optional |
* | **Arguments** | 2 |
*/
staff?: $Fields.staff.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.staff<_$Context>>
/**
* Favourite studios
*
* ```graphql
* studios(page: Int, perPage: Int): StudioConnection
*
* type StudioConnection {
* edges: [StudioEdge]
* nodes: [Studio]
* pageInfo: PageInfo
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$StudioConnection} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Favourites} |
* | **Path** | `Favourites.studios` |
* | **Nullability** | Optional |
* | **Arguments** | 2 |
*/
studios?: $Fields.studios.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.studios<_$Context>>
      
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