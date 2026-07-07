import type * as $$Utilities from 'graffle/utilities-for-generated'
import type { GraphqlKit } from 'graffle/utilities-for-generated'
import type { $DefaultSelectionContext } from '../../_context.js'
import type * as $Named from '../../$named.js'
import type * as $Scalars from '../../scalars/_.js'

export type node<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = node.$SelectionSet<_$Context>

export namespace node {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.Media<_$Context> {
}

/**
* This is the "expanded" version of the `node` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


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


export type relationType<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
| relationType.$SelectionSet<_$Context>

export namespace relationType {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base {
/**
* Arguments for `relationType` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* Provide 2 to use new version 2 of relation enum
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$MediaEdge}.relationType |
* | **Path** | `MediaEdge.relationType(version)` |
* | **Nullability** | Optional |
*/
readonly version?: $Scalars.Int<_$Context>
}

/**
* This is the "expanded" version of the `relationType` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
| $SelectionSet<_$Context>>
}


export type isMainStudio<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
| isMainStudio.$SelectionSet<_$Context>

export namespace isMainStudio {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base {
}

/**
* This is the "expanded" version of the `isMainStudio` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
| $SelectionSet<_$Context>>
}


export type characters<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = characters.$SelectionSet<_$Context>

export namespace characters {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.Character<_$Context> {
}

/**
* This is the "expanded" version of the `characters` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type characterRole<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
| characterRole.$SelectionSet<_$Context>

export namespace characterRole {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base {
}

/**
* This is the "expanded" version of the `characterRole` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
| $SelectionSet<_$Context>>
}


export type characterName<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
| characterName.$SelectionSet<_$Context>

export namespace characterName {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base {
}

/**
* This is the "expanded" version of the `characterName` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
| $SelectionSet<_$Context>>
}


export type roleNotes<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
| roleNotes.$SelectionSet<_$Context>

export namespace roleNotes {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base {
}

/**
* This is the "expanded" version of the `roleNotes` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
| $SelectionSet<_$Context>>
}


export type dubGroup<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
| dubGroup.$SelectionSet<_$Context>

export namespace dubGroup {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base {
}

/**
* This is the "expanded" version of the `dubGroup` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
| $SelectionSet<_$Context>>
}


export type staffRole<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
| staffRole.$SelectionSet<_$Context>

export namespace staffRole {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base {
}

/**
* This is the "expanded" version of the `staffRole` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
| $SelectionSet<_$Context>>
}


export type voiceActors<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = voiceActors.$SelectionSet<_$Context>

export namespace voiceActors {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.Staff<_$Context> {
/**
* Arguments for `voiceActors` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `StaffLanguage` |
* | **Parent** | {@link $NamedTypes.$MediaEdge}.voiceActors |
* | **Path** | `MediaEdge.voiceActors(language)` |
* | **Nullability** | Optional |
*/
readonly $language?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.StaffLanguage | null | undefined>
/**
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[StaffSort]` |
* | **Parent** | {@link $NamedTypes.$MediaEdge}.voiceActors |
* | **Path** | `MediaEdge.voiceActors(sort)` |
* | **Nullability** | Optional |
*/
readonly $sort?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.StaffSort | null | undefined>> | null | undefined>
}

/**
* This is the "expanded" version of the `voiceActors` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type voiceActorRoles<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = voiceActorRoles.$SelectionSet<_$Context>

export namespace voiceActorRoles {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.StaffRoleType<_$Context> {
/**
* Arguments for `voiceActorRoles` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `StaffLanguage` |
* | **Parent** | {@link $NamedTypes.$MediaEdge}.voiceActorRoles |
* | **Path** | `MediaEdge.voiceActorRoles(language)` |
* | **Nullability** | Optional |
*/
readonly $language?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.StaffLanguage | null | undefined>
/**
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[StaffSort]` |
* | **Parent** | {@link $NamedTypes.$MediaEdge}.voiceActorRoles |
* | **Path** | `MediaEdge.voiceActorRoles(sort)` |
* | **Nullability** | Optional |
*/
readonly $sort?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.StaffSort | null | undefined>> | null | undefined>
}

/**
* This is the "expanded" version of the `voiceActorRoles` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type favouriteOrder<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
| favouriteOrder.$SelectionSet<_$Context>

export namespace favouriteOrder {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base {
}

/**
* This is the "expanded" version of the `favouriteOrder` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
| $SelectionSet<_$Context>>
}

