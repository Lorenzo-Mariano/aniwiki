import type * as $$Utilities from 'graffle/utilities-for-generated'
import type { GraphqlKit } from 'graffle/utilities-for-generated'
import type * as $Fields from './fields.js'
import type { $DefaultSelectionContext } from '../../_context.js'
import type { $FragmentInline } from './fragment.js'

export type * as StaffStats from './__.js'

/**
* Selection set for {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* User's staff statistics
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 4 |
*/
export interface StaffStats<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.ObjectLike {

      /**
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
* | **Parent** | {@link $NamedTypes.$StaffStats} |
* | **Path** | `StaffStats.staff` |
* | **Nullability** | Optional |
*/
staff?: $Fields.staff.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.staff<_$Context>>
/**
* ```graphql
* amount: Int
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$StaffStats} |
* | **Path** | `StaffStats.amount` |
* | **Nullability** | Optional |
*/
amount?: $Fields.amount.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.amount<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* ```graphql
* meanScore: Int
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$StaffStats} |
* | **Path** | `StaffStats.meanScore` |
* | **Nullability** | Optional |
*/
meanScore?: $Fields.meanScore.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.meanScore<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The amount of time in minutes the staff member has been watched by the user
*
* ```graphql
* timeWatched: Int
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$StaffStats} |
* | **Path** | `StaffStats.timeWatched` |
* | **Nullability** | Optional |
*/
timeWatched?: $Fields.timeWatched.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.timeWatched<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
      
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