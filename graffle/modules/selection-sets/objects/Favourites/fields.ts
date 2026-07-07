import type * as $$Utilities from 'graffle/utilities-for-generated'
import type { GraphqlKit } from 'graffle/utilities-for-generated'
import type { $DefaultSelectionContext } from '../../_context.js'
import type * as $Named from '../../$named.js'
import type * as $Scalars from '../../scalars/_.js'

export type anime<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = anime.$SelectionSet<_$Context>

export namespace anime {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.MediaConnection<_$Context> {
/**
* Arguments for `anime` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* The page number
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Favourites}.anime |
* | **Path** | `Favourites.anime(page)` |
* | **Nullability** | Optional |
*/
readonly page?: $Scalars.Int<_$Context>
/**
* The amount of entries per page, max 25
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Favourites}.anime |
* | **Path** | `Favourites.anime(perPage)` |
* | **Nullability** | Optional |
*/
readonly perPage?: $Scalars.Int<_$Context>
}

/**
* This is the "expanded" version of the `anime` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type manga<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = manga.$SelectionSet<_$Context>

export namespace manga {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.MediaConnection<_$Context> {
/**
* Arguments for `manga` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* The page number
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Favourites}.manga |
* | **Path** | `Favourites.manga(page)` |
* | **Nullability** | Optional |
*/
readonly page?: $Scalars.Int<_$Context>
/**
* The amount of entries per page, max 25
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Favourites}.manga |
* | **Path** | `Favourites.manga(perPage)` |
* | **Nullability** | Optional |
*/
readonly perPage?: $Scalars.Int<_$Context>
}

/**
* This is the "expanded" version of the `manga` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type characters<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = characters.$SelectionSet<_$Context>

export namespace characters {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.CharacterConnection<_$Context> {
/**
* Arguments for `characters` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* The page number
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Favourites}.characters |
* | **Path** | `Favourites.characters(page)` |
* | **Nullability** | Optional |
*/
readonly page?: $Scalars.Int<_$Context>
/**
* The amount of entries per page, max 25
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Favourites}.characters |
* | **Path** | `Favourites.characters(perPage)` |
* | **Nullability** | Optional |
*/
readonly perPage?: $Scalars.Int<_$Context>
}

/**
* This is the "expanded" version of the `characters` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type staff<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = staff.$SelectionSet<_$Context>

export namespace staff {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.StaffConnection<_$Context> {
/**
* Arguments for `staff` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* The page number
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Favourites}.staff |
* | **Path** | `Favourites.staff(page)` |
* | **Nullability** | Optional |
*/
readonly page?: $Scalars.Int<_$Context>
/**
* The amount of entries per page, max 25
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Favourites}.staff |
* | **Path** | `Favourites.staff(perPage)` |
* | **Nullability** | Optional |
*/
readonly perPage?: $Scalars.Int<_$Context>
}

/**
* This is the "expanded" version of the `staff` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type studios<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = studios.$SelectionSet<_$Context>

export namespace studios {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.StudioConnection<_$Context> {
/**
* Arguments for `studios` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* The page number
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Favourites}.studios |
* | **Path** | `Favourites.studios(page)` |
* | **Nullability** | Optional |
*/
readonly page?: $Scalars.Int<_$Context>
/**
* The amount of entries per page, max 25
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Favourites}.studios |
* | **Path** | `Favourites.studios(perPage)` |
* | **Nullability** | Optional |
*/
readonly perPage?: $Scalars.Int<_$Context>
}

/**
* This is the "expanded" version of the `studios` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}

