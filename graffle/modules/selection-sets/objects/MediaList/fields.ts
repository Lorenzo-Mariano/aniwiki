import type * as $$Utilities from 'graffle/utilities-for-generated'
import type { GraphqlKit } from 'graffle/utilities-for-generated'
import type { $DefaultSelectionContext } from '../../_context.js'
import type * as $Named from '../../$named.js'
import type * as $Scalars from '../../scalars/_.js'

export type id<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
| id.$SelectionSet<_$Context>

export namespace id {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base {
}

/**
* This is the "expanded" version of the `id` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
| $SelectionSet<_$Context>>
}


export type userId<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
| userId.$SelectionSet<_$Context>

export namespace userId {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base {
}

/**
* This is the "expanded" version of the `userId` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
| $SelectionSet<_$Context>>
}


export type mediaId<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
| mediaId.$SelectionSet<_$Context>

export namespace mediaId {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base {
}

/**
* This is the "expanded" version of the `mediaId` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
| $SelectionSet<_$Context>>
}


export type status<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
| status.$SelectionSet<_$Context>

export namespace status {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base {
}

/**
* This is the "expanded" version of the `status` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
| $SelectionSet<_$Context>>
}


export type score<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
| score.$SelectionSet<_$Context>

export namespace score {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base {
/**
* Arguments for `score` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* Force the score to be returned in the provided format type.
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `ScoreFormat` |
* | **Parent** | {@link $NamedTypes.$MediaList}.score |
* | **Path** | `MediaList.score(format)` |
* | **Nullability** | Optional |
*/
readonly $format?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.ScoreFormat | null | undefined>
}

/**
* This is the "expanded" version of the `score` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
| $SelectionSet<_$Context>>
}


export type progress<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
| progress.$SelectionSet<_$Context>

export namespace progress {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base {
}

/**
* This is the "expanded" version of the `progress` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
| $SelectionSet<_$Context>>
}


export type progressVolumes<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
| progressVolumes.$SelectionSet<_$Context>

export namespace progressVolumes {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base {
}

/**
* This is the "expanded" version of the `progressVolumes` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
| $SelectionSet<_$Context>>
}


export type repeat<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
| repeat.$SelectionSet<_$Context>

export namespace repeat {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base {
}

/**
* This is the "expanded" version of the `repeat` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
| $SelectionSet<_$Context>>
}


export type priority<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
| priority.$SelectionSet<_$Context>

export namespace priority {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base {
}

/**
* This is the "expanded" version of the `priority` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
| $SelectionSet<_$Context>>
}


type $private<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
| $private.$SelectionSet<_$Context>

namespace $private {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base {
}

/**
* This is the "expanded" version of the `private` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
| $SelectionSet<_$Context>>
}

export type { $private as private }


export type notes<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
| notes.$SelectionSet<_$Context>

export namespace notes {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base {
}

/**
* This is the "expanded" version of the `notes` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
| $SelectionSet<_$Context>>
}


export type hiddenFromStatusLists<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
| hiddenFromStatusLists.$SelectionSet<_$Context>

export namespace hiddenFromStatusLists {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base {
}

/**
* This is the "expanded" version of the `hiddenFromStatusLists` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
| $SelectionSet<_$Context>>
}


export type customLists<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
| customLists.$SelectionSet<_$Context>

export namespace customLists {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base {
/**
* Arguments for `customLists` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* Change return structure to an array of objects
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Boolean` |
* | **Parent** | {@link $NamedTypes.$MediaList}.customLists |
* | **Path** | `MediaList.customLists(asArray)` |
* | **Nullability** | Optional |
*/
readonly asArray?: $Scalars.Boolean<_$Context>
}

/**
* This is the "expanded" version of the `customLists` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
| $SelectionSet<_$Context>>
}


export type advancedScores<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
| advancedScores.$SelectionSet<_$Context>

export namespace advancedScores {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base {
}

/**
* This is the "expanded" version of the `advancedScores` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
| $SelectionSet<_$Context>>
}


export type startedAt<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = startedAt.$SelectionSet<_$Context>

export namespace startedAt {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.FuzzyDate<_$Context> {
}

/**
* This is the "expanded" version of the `startedAt` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type completedAt<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = completedAt.$SelectionSet<_$Context>

export namespace completedAt {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.FuzzyDate<_$Context> {
}

/**
* This is the "expanded" version of the `completedAt` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type updatedAt<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
| updatedAt.$SelectionSet<_$Context>

export namespace updatedAt {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base {
}

/**
* This is the "expanded" version of the `updatedAt` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
| $SelectionSet<_$Context>>
}


export type createdAt<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
| createdAt.$SelectionSet<_$Context>

export namespace createdAt {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base {
}

/**
* This is the "expanded" version of the `createdAt` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
| $SelectionSet<_$Context>>
}


export type media<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = media.$SelectionSet<_$Context>

export namespace media {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.Media<_$Context> {
}

/**
* This is the "expanded" version of the `media` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type user<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = user.$SelectionSet<_$Context>

export namespace user {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.User<_$Context> {
}

/**
* This is the "expanded" version of the `user` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}

