import type * as $$Utilities from 'graffle/utilities-for-generated'
import type { GraphqlKit } from 'graffle/utilities-for-generated'
import type * as $Fields from './fields.js'
import type { $DefaultSelectionContext } from '../../_context.js'
import type { $FragmentInline } from './fragment.js'

export type * as SiteStatistics from './__.js'

/**
* Selection set for {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 7 |
*/
export interface SiteStatistics<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.ObjectLike {

      /**
* ```graphql
* users(sort: [SiteTrendSort], page: Int, perPage: Int): SiteTrendConnection
*
* type SiteTrendConnection {
* edges: [SiteTrendEdge]
* nodes: [SiteTrend]
* pageInfo: PageInfo
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$SiteTrendConnection} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$SiteStatistics} |
* | **Path** | `SiteStatistics.users` |
* | **Nullability** | Optional |
* | **Arguments** | 3 |
*/
users?: $Fields.users.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.users<_$Context>>
/**
* ```graphql
* anime(sort: [SiteTrendSort], page: Int, perPage: Int): SiteTrendConnection
*
* type SiteTrendConnection {
* edges: [SiteTrendEdge]
* nodes: [SiteTrend]
* pageInfo: PageInfo
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$SiteTrendConnection} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$SiteStatistics} |
* | **Path** | `SiteStatistics.anime` |
* | **Nullability** | Optional |
* | **Arguments** | 3 |
*/
anime?: $Fields.anime.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.anime<_$Context>>
/**
* ```graphql
* manga(sort: [SiteTrendSort], page: Int, perPage: Int): SiteTrendConnection
*
* type SiteTrendConnection {
* edges: [SiteTrendEdge]
* nodes: [SiteTrend]
* pageInfo: PageInfo
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$SiteTrendConnection} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$SiteStatistics} |
* | **Path** | `SiteStatistics.manga` |
* | **Nullability** | Optional |
* | **Arguments** | 3 |
*/
manga?: $Fields.manga.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.manga<_$Context>>
/**
* ```graphql
* characters(sort: [SiteTrendSort], page: Int, perPage: Int): SiteTrendConnection
*
* type SiteTrendConnection {
* edges: [SiteTrendEdge]
* nodes: [SiteTrend]
* pageInfo: PageInfo
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$SiteTrendConnection} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$SiteStatistics} |
* | **Path** | `SiteStatistics.characters` |
* | **Nullability** | Optional |
* | **Arguments** | 3 |
*/
characters?: $Fields.characters.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.characters<_$Context>>
/**
* ```graphql
* staff(sort: [SiteTrendSort], page: Int, perPage: Int): SiteTrendConnection
*
* type SiteTrendConnection {
* edges: [SiteTrendEdge]
* nodes: [SiteTrend]
* pageInfo: PageInfo
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$SiteTrendConnection} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$SiteStatistics} |
* | **Path** | `SiteStatistics.staff` |
* | **Nullability** | Optional |
* | **Arguments** | 3 |
*/
staff?: $Fields.staff.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.staff<_$Context>>
/**
* ```graphql
* studios(sort: [SiteTrendSort], page: Int, perPage: Int): SiteTrendConnection
*
* type SiteTrendConnection {
* edges: [SiteTrendEdge]
* nodes: [SiteTrend]
* pageInfo: PageInfo
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$SiteTrendConnection} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$SiteStatistics} |
* | **Path** | `SiteStatistics.studios` |
* | **Nullability** | Optional |
* | **Arguments** | 3 |
*/
studios?: $Fields.studios.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.studios<_$Context>>
/**
* ```graphql
* reviews(sort: [SiteTrendSort], page: Int, perPage: Int): SiteTrendConnection
*
* type SiteTrendConnection {
* edges: [SiteTrendEdge]
* nodes: [SiteTrend]
* pageInfo: PageInfo
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$SiteTrendConnection} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$SiteStatistics} |
* | **Path** | `SiteStatistics.reviews` |
* | **Nullability** | Optional |
* | **Arguments** | 3 |
*/
reviews?: $Fields.reviews.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.reviews<_$Context>>
      
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