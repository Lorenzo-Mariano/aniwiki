import type * as $$Utilities from 'graffle/utilities-for-generated'
import type { GraphqlKit } from 'graffle/utilities-for-generated'
import type * as $Fields from './fields.js'
import type { $DefaultSelectionContext } from '../../_context.js'
import type { $FragmentInline } from './fragment.js'

export type * as MediaListOptions from './__.js'

/**
* Selection set for {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* A user's list options
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 7 |
*/
export interface MediaListOptions<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.ObjectLike {

      /**
* The score format the user is using for media lists
*
* ```graphql
* scoreFormat: ScoreFormat
*
* enum ScoreFormat {
* POINT_100
* POINT_10_DECIMAL
* POINT_10
* POINT_5
* POINT_3
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$ScoreFormat} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Parent** | {@link $NamedTypes.$MediaListOptions} |
* | **Path** | `MediaListOptions.scoreFormat` |
* | **Nullability** | Optional |
*/
scoreFormat?: $Fields.scoreFormat.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.scoreFormat<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The default order list rows should be displayed in
*
* ```graphql
* rowOrder: String
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$MediaListOptions} |
* | **Path** | `MediaListOptions.rowOrder` |
* | **Nullability** | Optional |
*/
rowOrder?: $Fields.rowOrder.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.rowOrder<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* @deprecated No longer used
*
* ```graphql
* useLegacyLists: Boolean @deprecated(reason: "No longer used")
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$MediaListOptions} |
* | **Path** | `MediaListOptions.useLegacyLists` |
* | **⚠ Deprecated** | No longer used |
* | **Nullability** | Optional |
*/
useLegacyLists?: $Fields.useLegacyLists.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.useLegacyLists<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The user's anime list options
*
* ```graphql
* animeList: MediaListTypeOptions
*
* type MediaListTypeOptions {
* sectionOrder: [String]
* splitCompletedSectionByFormat: Boolean
* theme: Json @deprecated(reason: "This field has not yet been fully implemented and may change without warning")
* customLists: [String]
* advancedScoring: [String]
* advancedScoringEnabled: Boolean
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$MediaListTypeOptions} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$MediaListOptions} |
* | **Path** | `MediaListOptions.animeList` |
* | **Nullability** | Optional |
*/
animeList?: $Fields.animeList.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.animeList<_$Context>>
/**
* The user's manga list options
*
* ```graphql
* mangaList: MediaListTypeOptions
*
* type MediaListTypeOptions {
* sectionOrder: [String]
* splitCompletedSectionByFormat: Boolean
* theme: Json @deprecated(reason: "This field has not yet been fully implemented and may change without warning")
* customLists: [String]
* advancedScoring: [String]
* advancedScoringEnabled: Boolean
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$MediaListTypeOptions} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$MediaListOptions} |
* | **Path** | `MediaListOptions.mangaList` |
* | **Nullability** | Optional |
*/
mangaList?: $Fields.mangaList.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.mangaList<_$Context>>
/**
* The list theme options for both lists
*
* @deprecated No longer used
*
* ```graphql
* sharedTheme: Json @deprecated(reason: "No longer used")
*
* scalar Json
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Json} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
* | **Parent** | {@link $NamedTypes.$MediaListOptions} |
* | **Path** | `MediaListOptions.sharedTheme` |
* | **⚠ Deprecated** | No longer used |
* | **Nullability** | Optional |
*/
sharedTheme?: $Fields.sharedTheme.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.sharedTheme<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* If the shared theme should be used instead of the individual list themes
*
* @deprecated No longer used
*
* ```graphql
* sharedThemeEnabled: Boolean @deprecated(reason: "No longer used")
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$MediaListOptions} |
* | **Path** | `MediaListOptions.sharedThemeEnabled` |
* | **⚠ Deprecated** | No longer used |
* | **Nullability** | Optional |
*/
sharedThemeEnabled?: $Fields.sharedThemeEnabled.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.sharedThemeEnabled<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
      
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