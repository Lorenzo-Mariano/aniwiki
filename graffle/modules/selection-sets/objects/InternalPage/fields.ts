import type * as $$Utilities from 'graffle/utilities-for-generated'
import type { GraphqlKit } from 'graffle/utilities-for-generated'
import type { $DefaultSelectionContext } from '../../_context.js'
import type * as $Named from '../../$named.js'
import type * as $Scalars from '../../scalars/_.js'

export type mediaSubmissions<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = mediaSubmissions.$SelectionSet<_$Context>

export namespace mediaSubmissions {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.MediaSubmission<_$Context> {
/**
* Arguments for `mediaSubmissions` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaSubmissions |
* | **Path** | `InternalPage.mediaSubmissions(mediaId)` |
* | **Nullability** | Optional |
*/
readonly mediaId?: $Scalars.Int<_$Context>
/**
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaSubmissions |
* | **Path** | `InternalPage.mediaSubmissions(submissionId)` |
* | **Nullability** | Optional |
*/
readonly submissionId?: $Scalars.Int<_$Context>
/**
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaSubmissions |
* | **Path** | `InternalPage.mediaSubmissions(userId)` |
* | **Nullability** | Optional |
*/
readonly userId?: $Scalars.Int<_$Context>
/**
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaSubmissions |
* | **Path** | `InternalPage.mediaSubmissions(assigneeId)` |
* | **Nullability** | Optional |
*/
readonly assigneeId?: $Scalars.Int<_$Context>
/**
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `SubmissionStatus` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaSubmissions |
* | **Path** | `InternalPage.mediaSubmissions(status)` |
* | **Nullability** | Optional |
*/
readonly $status?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.SubmissionStatus | null | undefined>
/**
* Filter by the media's type
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `MediaType` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaSubmissions |
* | **Path** | `InternalPage.mediaSubmissions(type)` |
* | **Nullability** | Optional |
*/
readonly $type?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaType | null | undefined>
/**
* The order the results will be returned in
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[SubmissionSort]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaSubmissions |
* | **Path** | `InternalPage.mediaSubmissions(sort)` |
* | **Nullability** | Optional |
*/
readonly $sort?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.SubmissionSort | null | undefined>> | null | undefined>
}

/**
* This is the "expanded" version of the `mediaSubmissions` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type characterSubmissions<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = characterSubmissions.$SelectionSet<_$Context>

export namespace characterSubmissions {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.CharacterSubmission<_$Context> {
/**
* Arguments for `characterSubmissions` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.characterSubmissions |
* | **Path** | `InternalPage.characterSubmissions(characterId)` |
* | **Nullability** | Optional |
*/
readonly characterId?: $Scalars.Int<_$Context>
/**
* Filter by the submitter of the submission
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.characterSubmissions |
* | **Path** | `InternalPage.characterSubmissions(userId)` |
* | **Nullability** | Optional |
*/
readonly userId?: $Scalars.Int<_$Context>
/**
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.characterSubmissions |
* | **Path** | `InternalPage.characterSubmissions(assigneeId)` |
* | **Nullability** | Optional |
*/
readonly assigneeId?: $Scalars.Int<_$Context>
/**
* Filter by the status of the submission
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `SubmissionStatus` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.characterSubmissions |
* | **Path** | `InternalPage.characterSubmissions(status)` |
* | **Nullability** | Optional |
*/
readonly $status?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.SubmissionStatus | null | undefined>
/**
* The order the results will be returned in
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[SubmissionSort]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.characterSubmissions |
* | **Path** | `InternalPage.characterSubmissions(sort)` |
* | **Nullability** | Optional |
*/
readonly $sort?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.SubmissionSort | null | undefined>> | null | undefined>
}

/**
* This is the "expanded" version of the `characterSubmissions` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type staffSubmissions<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = staffSubmissions.$SelectionSet<_$Context>

export namespace staffSubmissions {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.StaffSubmission<_$Context> {
/**
* Arguments for `staffSubmissions` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.staffSubmissions |
* | **Path** | `InternalPage.staffSubmissions(staffId)` |
* | **Nullability** | Optional |
*/
readonly staffId?: $Scalars.Int<_$Context>
/**
* Filter by the submitter of the submission
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.staffSubmissions |
* | **Path** | `InternalPage.staffSubmissions(userId)` |
* | **Nullability** | Optional |
*/
readonly userId?: $Scalars.Int<_$Context>
/**
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.staffSubmissions |
* | **Path** | `InternalPage.staffSubmissions(assigneeId)` |
* | **Nullability** | Optional |
*/
readonly assigneeId?: $Scalars.Int<_$Context>
/**
* Filter by the status of the submission
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `SubmissionStatus` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.staffSubmissions |
* | **Path** | `InternalPage.staffSubmissions(status)` |
* | **Nullability** | Optional |
*/
readonly $status?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.SubmissionStatus | null | undefined>
/**
* The order the results will be returned in
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[SubmissionSort]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.staffSubmissions |
* | **Path** | `InternalPage.staffSubmissions(sort)` |
* | **Nullability** | Optional |
*/
readonly $sort?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.SubmissionSort | null | undefined>> | null | undefined>
}

/**
* This is the "expanded" version of the `staffSubmissions` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type revisionHistory<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = revisionHistory.$SelectionSet<_$Context>

export namespace revisionHistory {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.RevisionHistory<_$Context> {
/**
* Arguments for `revisionHistory` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* Filter by the user id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.revisionHistory |
* | **Path** | `InternalPage.revisionHistory(userId)` |
* | **Nullability** | Optional |
*/
readonly userId?: $Scalars.Int<_$Context>
/**
* Filter by the media id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.revisionHistory |
* | **Path** | `InternalPage.revisionHistory(mediaId)` |
* | **Nullability** | Optional |
*/
readonly mediaId?: $Scalars.Int<_$Context>
/**
* Filter by the character id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.revisionHistory |
* | **Path** | `InternalPage.revisionHistory(characterId)` |
* | **Nullability** | Optional |
*/
readonly characterId?: $Scalars.Int<_$Context>
/**
* Filter by the staff id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.revisionHistory |
* | **Path** | `InternalPage.revisionHistory(staffId)` |
* | **Nullability** | Optional |
*/
readonly staffId?: $Scalars.Int<_$Context>
/**
* Filter by the studio id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.revisionHistory |
* | **Path** | `InternalPage.revisionHistory(studioId)` |
* | **Nullability** | Optional |
*/
readonly studioId?: $Scalars.Int<_$Context>
}

/**
* This is the "expanded" version of the `revisionHistory` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type reports<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = reports.$SelectionSet<_$Context>

export namespace reports {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.Report<_$Context> {
/**
* Arguments for `reports` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.reports |
* | **Path** | `InternalPage.reports(reporterId)` |
* | **Nullability** | Optional |
*/
readonly reporterId?: $Scalars.Int<_$Context>
/**
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.reports |
* | **Path** | `InternalPage.reports(reportedId)` |
* | **Nullability** | Optional |
*/
readonly reportedId?: $Scalars.Int<_$Context>
}

/**
* This is the "expanded" version of the `reports` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type modActions<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = modActions.$SelectionSet<_$Context>

export namespace modActions {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.ModAction<_$Context> {
/**
* Arguments for `modActions` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.modActions |
* | **Path** | `InternalPage.modActions(userId)` |
* | **Nullability** | Optional |
*/
readonly userId?: $Scalars.Int<_$Context>
/**
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.modActions |
* | **Path** | `InternalPage.modActions(modId)` |
* | **Nullability** | Optional |
*/
readonly modId?: $Scalars.Int<_$Context>
/**
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.modActions |
* | **Path** | `InternalPage.modActions(modId_not)` |
* | **Nullability** | Optional |
*/
readonly modId_not?: $Scalars.Int<_$Context>
/**
* (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.modActions |
* | **Path** | `InternalPage.modActions(modId_in)` |
* | **Nullability** | Optional |
*/
readonly modId_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.modActions |
* | **Path** | `InternalPage.modActions(modId_not_in)` |
* | **Nullability** | Optional |
*/
readonly modId_not_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
}

/**
* This is the "expanded" version of the `modActions` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type userBlockSearch<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = userBlockSearch.$SelectionSet<_$Context>

export namespace userBlockSearch {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.User<_$Context> {
/**
* Arguments for `userBlockSearch` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* Filter by search query
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.userBlockSearch |
* | **Path** | `InternalPage.userBlockSearch(search)` |
* | **Nullability** | Optional |
*/
readonly search?: $Scalars.String<_$Context>
}

/**
* This is the "expanded" version of the `userBlockSearch` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type pageInfo<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = pageInfo.$SelectionSet<_$Context>

export namespace pageInfo {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.PageInfo<_$Context> {
}

/**
* This is the "expanded" version of the `pageInfo` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type users<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = users.$SelectionSet<_$Context>

export namespace users {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.User<_$Context> {
/**
* Arguments for `users` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* Filter by the user id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.users |
* | **Path** | `InternalPage.users(id)` |
* | **Nullability** | Optional |
*/
readonly id?: $Scalars.Int<_$Context>
/**
* Filter by the name of the user
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.users |
* | **Path** | `InternalPage.users(name)` |
* | **Nullability** | Optional |
*/
readonly name?: $Scalars.String<_$Context>
/**
* Filter to moderators only if true
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Boolean` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.users |
* | **Path** | `InternalPage.users(isModerator)` |
* | **Nullability** | Optional |
*/
readonly isModerator?: $Scalars.Boolean<_$Context>
/**
* Filter by search query
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.users |
* | **Path** | `InternalPage.users(search)` |
* | **Nullability** | Optional |
*/
readonly search?: $Scalars.String<_$Context>
/**
* The order the results will be returned in
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[UserSort]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.users |
* | **Path** | `InternalPage.users(sort)` |
* | **Nullability** | Optional |
*/
readonly $sort?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.UserSort | null | undefined>> | null | undefined>
}

/**
* This is the "expanded" version of the `users` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type media<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = media.$SelectionSet<_$Context>

export namespace media {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.Media<_$Context> {
/**
* Arguments for `media` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* Filter by the media id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(id)` |
* | **Nullability** | Optional |
*/
readonly id?: $Scalars.Int<_$Context>
/**
* Filter by the media's MyAnimeList id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(idMal)` |
* | **Nullability** | Optional |
*/
readonly idMal?: $Scalars.Int<_$Context>
/**
* Filter by the start date of the media
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `FuzzyDateInt` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(startDate)` |
* | **Nullability** | Optional |
*/
readonly startDate?: $Scalars.FuzzyDateInt<_$Context>
/**
* Filter by the end date of the media
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `FuzzyDateInt` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(endDate)` |
* | **Nullability** | Optional |
*/
readonly endDate?: $Scalars.FuzzyDateInt<_$Context>
/**
* Filter by the season the media was released in
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `MediaSeason` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(season)` |
* | **Nullability** | Optional |
*/
readonly $season?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaSeason | null | undefined>
/**
* The year of the season (Winter 2017 would also include December 2016 releases). Requires season argument
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(seasonYear)` |
* | **Nullability** | Optional |
*/
readonly seasonYear?: $Scalars.Int<_$Context>
/**
* Filter by the media's type
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `MediaType` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(type)` |
* | **Nullability** | Optional |
*/
readonly $type?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaType | null | undefined>
/**
* Filter by the media's format
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `MediaFormat` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(format)` |
* | **Nullability** | Optional |
*/
readonly $format?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaFormat | null | undefined>
/**
* Filter by the media's current release status
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `MediaStatus` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(status)` |
* | **Nullability** | Optional |
*/
readonly $status?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaStatus | null | undefined>
/**
* Filter by amount of episodes the media has
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(episodes)` |
* | **Nullability** | Optional |
*/
readonly episodes?: $Scalars.Int<_$Context>
/**
* Filter by the media's episode length
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(duration)` |
* | **Nullability** | Optional |
*/
readonly duration?: $Scalars.Int<_$Context>
/**
* Filter by the media's chapter count
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(chapters)` |
* | **Nullability** | Optional |
*/
readonly chapters?: $Scalars.Int<_$Context>
/**
* Filter by the media's volume count
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(volumes)` |
* | **Nullability** | Optional |
*/
readonly volumes?: $Scalars.Int<_$Context>
/**
* Filter by if the media's intended for 18+ adult audiences
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Boolean` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(isAdult)` |
* | **Nullability** | Optional |
*/
readonly isAdult?: $Scalars.Boolean<_$Context>
/**
* Filter by the media's genres
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(genre)` |
* | **Nullability** | Optional |
*/
readonly genre?: $Scalars.String<_$Context>
/**
* Filter by the media's tags
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(tag)` |
* | **Nullability** | Optional |
*/
readonly tag?: $Scalars.String<_$Context>
/**
* Only apply the tags filter argument to tags above this rank. Default: 18
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(minimumTagRank)` |
* | **Nullability** | Optional |
*/
readonly minimumTagRank?: $Scalars.Int<_$Context>
/**
* Filter by the media's tags with in a tag category
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(tagCategory)` |
* | **Nullability** | Optional |
*/
readonly tagCategory?: $Scalars.String<_$Context>
/**
* Filter by the media on the authenticated user's lists
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Boolean` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(onList)` |
* | **Nullability** | Optional |
*/
readonly onList?: $Scalars.Boolean<_$Context>
/**
* Filter media by sites name with a online streaming or reading license
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(licensedBy)` |
* | **Nullability** | Optional |
*/
readonly licensedBy?: $Scalars.String<_$Context>
/**
* Filter media by sites id with a online streaming or reading license
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(licensedById)` |
* | **Nullability** | Optional |
*/
readonly licensedById?: $Scalars.Int<_$Context>
/**
* Filter by the media's average score
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(averageScore)` |
* | **Nullability** | Optional |
*/
readonly averageScore?: $Scalars.Int<_$Context>
/**
* Filter by the number of users with this media on their list
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(popularity)` |
* | **Nullability** | Optional |
*/
readonly popularity?: $Scalars.Int<_$Context>
/**
* Filter by the source type of the media
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `MediaSource` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(source)` |
* | **Nullability** | Optional |
*/
readonly $source?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaSource | null | undefined>
/**
* Filter by the media's country of origin
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `CountryCode` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(countryOfOrigin)` |
* | **Nullability** | Optional |
*/
readonly countryOfOrigin?: $Scalars.CountryCode<_$Context>
/**
* If the media is officially licensed or a self-published doujin release
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Boolean` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(isLicensed)` |
* | **Nullability** | Optional |
*/
readonly isLicensed?: $Scalars.Boolean<_$Context>
/**
* Filter by search query
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(search)` |
* | **Nullability** | Optional |
*/
readonly search?: $Scalars.String<_$Context>
/**
* Filter by the media id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(id_not)` |
* | **Nullability** | Optional |
*/
readonly id_not?: $Scalars.Int<_$Context>
/**
* Filter by the media id (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(id_in)` |
* | **Nullability** | Optional |
*/
readonly id_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* Filter by the media id (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(id_not_in)` |
* | **Nullability** | Optional |
*/
readonly id_not_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* Filter by the media's MyAnimeList id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(idMal_not)` |
* | **Nullability** | Optional |
*/
readonly idMal_not?: $Scalars.Int<_$Context>
/**
* Filter by the media's MyAnimeList id (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(idMal_in)` |
* | **Nullability** | Optional |
*/
readonly idMal_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* Filter by the media's MyAnimeList id (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(idMal_not_in)` |
* | **Nullability** | Optional |
*/
readonly idMal_not_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* Filter by the start date of the media
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `FuzzyDateInt` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(startDate_greater)` |
* | **Nullability** | Optional |
*/
readonly startDate_greater?: $Scalars.FuzzyDateInt<_$Context>
/**
* Filter by the start date of the media
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `FuzzyDateInt` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(startDate_lesser)` |
* | **Nullability** | Optional |
*/
readonly startDate_lesser?: $Scalars.FuzzyDateInt<_$Context>
/**
* Filter by the start date of the media
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(startDate_like)` |
* | **Nullability** | Optional |
*/
readonly startDate_like?: $Scalars.String<_$Context>
/**
* Filter by the end date of the media
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `FuzzyDateInt` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(endDate_greater)` |
* | **Nullability** | Optional |
*/
readonly endDate_greater?: $Scalars.FuzzyDateInt<_$Context>
/**
* Filter by the end date of the media
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `FuzzyDateInt` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(endDate_lesser)` |
* | **Nullability** | Optional |
*/
readonly endDate_lesser?: $Scalars.FuzzyDateInt<_$Context>
/**
* Filter by the end date of the media
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(endDate_like)` |
* | **Nullability** | Optional |
*/
readonly endDate_like?: $Scalars.String<_$Context>
/**
* Filter by the media's format (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[MediaFormat]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(format_in)` |
* | **Nullability** | Optional |
*/
readonly $format_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaFormat | null | undefined>> | null | undefined>
/**
* Filter by the media's format
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `MediaFormat` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(format_not)` |
* | **Nullability** | Optional |
*/
readonly $format_not?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaFormat | null | undefined>
/**
* Filter by the media's format (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[MediaFormat]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(format_not_in)` |
* | **Nullability** | Optional |
*/
readonly $format_not_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaFormat | null | undefined>> | null | undefined>
/**
* Filter by the media's current release status (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[MediaStatus]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(status_in)` |
* | **Nullability** | Optional |
*/
readonly $status_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaStatus | null | undefined>> | null | undefined>
/**
* Filter by the media's current release status
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `MediaStatus` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(status_not)` |
* | **Nullability** | Optional |
*/
readonly $status_not?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaStatus | null | undefined>
/**
* Filter by the media's current release status (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[MediaStatus]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(status_not_in)` |
* | **Nullability** | Optional |
*/
readonly $status_not_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaStatus | null | undefined>> | null | undefined>
/**
* Filter by amount of episodes the media has
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(episodes_greater)` |
* | **Nullability** | Optional |
*/
readonly episodes_greater?: $Scalars.Int<_$Context>
/**
* Filter by amount of episodes the media has
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(episodes_lesser)` |
* | **Nullability** | Optional |
*/
readonly episodes_lesser?: $Scalars.Int<_$Context>
/**
* Filter by the media's episode length
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(duration_greater)` |
* | **Nullability** | Optional |
*/
readonly duration_greater?: $Scalars.Int<_$Context>
/**
* Filter by the media's episode length
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(duration_lesser)` |
* | **Nullability** | Optional |
*/
readonly duration_lesser?: $Scalars.Int<_$Context>
/**
* Filter by the media's chapter count
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(chapters_greater)` |
* | **Nullability** | Optional |
*/
readonly chapters_greater?: $Scalars.Int<_$Context>
/**
* Filter by the media's chapter count
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(chapters_lesser)` |
* | **Nullability** | Optional |
*/
readonly chapters_lesser?: $Scalars.Int<_$Context>
/**
* Filter by the media's volume count
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(volumes_greater)` |
* | **Nullability** | Optional |
*/
readonly volumes_greater?: $Scalars.Int<_$Context>
/**
* Filter by the media's volume count
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(volumes_lesser)` |
* | **Nullability** | Optional |
*/
readonly volumes_lesser?: $Scalars.Int<_$Context>
/**
* Filter by the media's genres (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[String]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(genre_in)` |
* | **Nullability** | Optional |
*/
readonly genre_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.String<_$Context>> | null | undefined>
/**
* Filter by the media's genres (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[String]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(genre_not_in)` |
* | **Nullability** | Optional |
*/
readonly genre_not_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.String<_$Context>> | null | undefined>
/**
* Filter by the media's tags (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[String]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(tag_in)` |
* | **Nullability** | Optional |
*/
readonly tag_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.String<_$Context>> | null | undefined>
/**
* Filter by the media's tags (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[String]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(tag_not_in)` |
* | **Nullability** | Optional |
*/
readonly tag_not_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.String<_$Context>> | null | undefined>
/**
* Filter by the media's tags with in a tag category (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[String]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(tagCategory_in)` |
* | **Nullability** | Optional |
*/
readonly tagCategory_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.String<_$Context>> | null | undefined>
/**
* Filter by the media's tags with in a tag category (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[String]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(tagCategory_not_in)` |
* | **Nullability** | Optional |
*/
readonly tagCategory_not_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.String<_$Context>> | null | undefined>
/**
* Filter media by sites name with a online streaming or reading license (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[String]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(licensedBy_in)` |
* | **Nullability** | Optional |
*/
readonly licensedBy_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.String<_$Context>> | null | undefined>
/**
* Filter media by sites id with a online streaming or reading license (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(licensedById_in)` |
* | **Nullability** | Optional |
*/
readonly licensedById_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* Filter by the media's average score
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(averageScore_not)` |
* | **Nullability** | Optional |
*/
readonly averageScore_not?: $Scalars.Int<_$Context>
/**
* Filter by the media's average score
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(averageScore_greater)` |
* | **Nullability** | Optional |
*/
readonly averageScore_greater?: $Scalars.Int<_$Context>
/**
* Filter by the media's average score
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(averageScore_lesser)` |
* | **Nullability** | Optional |
*/
readonly averageScore_lesser?: $Scalars.Int<_$Context>
/**
* Filter by the number of users with this media on their list
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(popularity_not)` |
* | **Nullability** | Optional |
*/
readonly popularity_not?: $Scalars.Int<_$Context>
/**
* Filter by the number of users with this media on their list
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(popularity_greater)` |
* | **Nullability** | Optional |
*/
readonly popularity_greater?: $Scalars.Int<_$Context>
/**
* Filter by the number of users with this media on their list
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(popularity_lesser)` |
* | **Nullability** | Optional |
*/
readonly popularity_lesser?: $Scalars.Int<_$Context>
/**
* Filter by the source type of the media (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[MediaSource]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(source_in)` |
* | **Nullability** | Optional |
*/
readonly $source_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaSource | null | undefined>> | null | undefined>
/**
* The order the results will be returned in
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[MediaSort]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.media |
* | **Path** | `InternalPage.media(sort)` |
* | **Nullability** | Optional |
*/
readonly $sort?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaSort | null | undefined>> | null | undefined>
}

/**
* This is the "expanded" version of the `media` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type characters<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = characters.$SelectionSet<_$Context>

export namespace characters {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.Character<_$Context> {
/**
* Arguments for `characters` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* Filter by character id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.characters |
* | **Path** | `InternalPage.characters(id)` |
* | **Nullability** | Optional |
*/
readonly id?: $Scalars.Int<_$Context>
/**
* Filter by character by if its their birthday today
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Boolean` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.characters |
* | **Path** | `InternalPage.characters(isBirthday)` |
* | **Nullability** | Optional |
*/
readonly isBirthday?: $Scalars.Boolean<_$Context>
/**
* Filter by search query
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.characters |
* | **Path** | `InternalPage.characters(search)` |
* | **Nullability** | Optional |
*/
readonly search?: $Scalars.String<_$Context>
/**
* Filter by character id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.characters |
* | **Path** | `InternalPage.characters(id_not)` |
* | **Nullability** | Optional |
*/
readonly id_not?: $Scalars.Int<_$Context>
/**
* Filter by character id (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.characters |
* | **Path** | `InternalPage.characters(id_in)` |
* | **Nullability** | Optional |
*/
readonly id_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* Filter by character id (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.characters |
* | **Path** | `InternalPage.characters(id_not_in)` |
* | **Nullability** | Optional |
*/
readonly id_not_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* The order the results will be returned in
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[CharacterSort]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.characters |
* | **Path** | `InternalPage.characters(sort)` |
* | **Nullability** | Optional |
*/
readonly $sort?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.CharacterSort | null | undefined>> | null | undefined>
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
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.Staff<_$Context> {
/**
* Arguments for `staff` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* Filter by the staff id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.staff |
* | **Path** | `InternalPage.staff(id)` |
* | **Nullability** | Optional |
*/
readonly id?: $Scalars.Int<_$Context>
/**
* Filter by staff by if its their birthday today
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Boolean` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.staff |
* | **Path** | `InternalPage.staff(isBirthday)` |
* | **Nullability** | Optional |
*/
readonly isBirthday?: $Scalars.Boolean<_$Context>
/**
* Filter by search query
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.staff |
* | **Path** | `InternalPage.staff(search)` |
* | **Nullability** | Optional |
*/
readonly search?: $Scalars.String<_$Context>
/**
* Filter by the staff id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.staff |
* | **Path** | `InternalPage.staff(id_not)` |
* | **Nullability** | Optional |
*/
readonly id_not?: $Scalars.Int<_$Context>
/**
* Filter by the staff id (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.staff |
* | **Path** | `InternalPage.staff(id_in)` |
* | **Nullability** | Optional |
*/
readonly id_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* Filter by the staff id (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.staff |
* | **Path** | `InternalPage.staff(id_not_in)` |
* | **Nullability** | Optional |
*/
readonly id_not_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* The order the results will be returned in
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[StaffSort]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.staff |
* | **Path** | `InternalPage.staff(sort)` |
* | **Nullability** | Optional |
*/
readonly $sort?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.StaffSort | null | undefined>> | null | undefined>
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
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.Studio<_$Context> {
/**
* Arguments for `studios` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* Filter by the studio id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.studios |
* | **Path** | `InternalPage.studios(id)` |
* | **Nullability** | Optional |
*/
readonly id?: $Scalars.Int<_$Context>
/**
* Filter by search query
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.studios |
* | **Path** | `InternalPage.studios(search)` |
* | **Nullability** | Optional |
*/
readonly search?: $Scalars.String<_$Context>
/**
* Filter by the studio id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.studios |
* | **Path** | `InternalPage.studios(id_not)` |
* | **Nullability** | Optional |
*/
readonly id_not?: $Scalars.Int<_$Context>
/**
* Filter by the studio id (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.studios |
* | **Path** | `InternalPage.studios(id_in)` |
* | **Nullability** | Optional |
*/
readonly id_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* Filter by the studio id (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.studios |
* | **Path** | `InternalPage.studios(id_not_in)` |
* | **Nullability** | Optional |
*/
readonly id_not_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* The order the results will be returned in
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[StudioSort]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.studios |
* | **Path** | `InternalPage.studios(sort)` |
* | **Nullability** | Optional |
*/
readonly $sort?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.StudioSort | null | undefined>> | null | undefined>
}

/**
* This is the "expanded" version of the `studios` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type mediaList<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = mediaList.$SelectionSet<_$Context>

export namespace mediaList {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.MediaList<_$Context> {
/**
* Arguments for `mediaList` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* Filter by a list entry's id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaList |
* | **Path** | `InternalPage.mediaList(id)` |
* | **Nullability** | Optional |
*/
readonly id?: $Scalars.Int<_$Context>
/**
* Filter by a user's id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaList |
* | **Path** | `InternalPage.mediaList(userId)` |
* | **Nullability** | Optional |
*/
readonly userId?: $Scalars.Int<_$Context>
/**
* Filter by a user's name
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaList |
* | **Path** | `InternalPage.mediaList(userName)` |
* | **Nullability** | Optional |
*/
readonly userName?: $Scalars.String<_$Context>
/**
* Filter by the list entries media type
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `MediaType` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaList |
* | **Path** | `InternalPage.mediaList(type)` |
* | **Nullability** | Optional |
*/
readonly $type?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaType | null | undefined>
/**
* Filter by the watching/reading status
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `MediaListStatus` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaList |
* | **Path** | `InternalPage.mediaList(status)` |
* | **Nullability** | Optional |
*/
readonly $status?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaListStatus | null | undefined>
/**
* Filter by the media id of the list entry
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaList |
* | **Path** | `InternalPage.mediaList(mediaId)` |
* | **Nullability** | Optional |
*/
readonly mediaId?: $Scalars.Int<_$Context>
/**
* Filter list entries to users who are being followed by the authenticated user
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Boolean` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaList |
* | **Path** | `InternalPage.mediaList(isFollowing)` |
* | **Nullability** | Optional |
*/
readonly isFollowing?: $Scalars.Boolean<_$Context>
/**
* Filter by note words and #tags
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaList |
* | **Path** | `InternalPage.mediaList(notes)` |
* | **Nullability** | Optional |
*/
readonly notes?: $Scalars.String<_$Context>
/**
* Filter by the date the user started the media
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `FuzzyDateInt` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaList |
* | **Path** | `InternalPage.mediaList(startedAt)` |
* | **Nullability** | Optional |
*/
readonly startedAt?: $Scalars.FuzzyDateInt<_$Context>
/**
* Filter by the date the user completed the media
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `FuzzyDateInt` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaList |
* | **Path** | `InternalPage.mediaList(completedAt)` |
* | **Nullability** | Optional |
*/
readonly completedAt?: $Scalars.FuzzyDateInt<_$Context>
/**
* Limit to only entries also on the auth user's list. Requires user id or name arguments.
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Boolean` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaList |
* | **Path** | `InternalPage.mediaList(compareWithAuthList)` |
* | **Nullability** | Optional |
*/
readonly compareWithAuthList?: $Scalars.Boolean<_$Context>
/**
* Filter by a user's id (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaList |
* | **Path** | `InternalPage.mediaList(userId_in)` |
* | **Nullability** | Optional |
*/
readonly userId_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* Filter by the watching/reading status (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[MediaListStatus]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaList |
* | **Path** | `InternalPage.mediaList(status_in)` |
* | **Nullability** | Optional |
*/
readonly $status_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaListStatus | null | undefined>> | null | undefined>
/**
* Filter by the watching/reading status (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[MediaListStatus]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaList |
* | **Path** | `InternalPage.mediaList(status_not_in)` |
* | **Nullability** | Optional |
*/
readonly $status_not_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaListStatus | null | undefined>> | null | undefined>
/**
* Filter by the watching/reading status
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `MediaListStatus` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaList |
* | **Path** | `InternalPage.mediaList(status_not)` |
* | **Nullability** | Optional |
*/
readonly $status_not?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaListStatus | null | undefined>
/**
* Filter by the media id of the list entry (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaList |
* | **Path** | `InternalPage.mediaList(mediaId_in)` |
* | **Nullability** | Optional |
*/
readonly mediaId_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* Filter by the media id of the list entry (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaList |
* | **Path** | `InternalPage.mediaList(mediaId_not_in)` |
* | **Nullability** | Optional |
*/
readonly mediaId_not_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* Filter by note words and #tags
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaList |
* | **Path** | `InternalPage.mediaList(notes_like)` |
* | **Nullability** | Optional |
*/
readonly notes_like?: $Scalars.String<_$Context>
/**
* Filter by the date the user started the media
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `FuzzyDateInt` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaList |
* | **Path** | `InternalPage.mediaList(startedAt_greater)` |
* | **Nullability** | Optional |
*/
readonly startedAt_greater?: $Scalars.FuzzyDateInt<_$Context>
/**
* Filter by the date the user started the media
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `FuzzyDateInt` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaList |
* | **Path** | `InternalPage.mediaList(startedAt_lesser)` |
* | **Nullability** | Optional |
*/
readonly startedAt_lesser?: $Scalars.FuzzyDateInt<_$Context>
/**
* Filter by the date the user started the media
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaList |
* | **Path** | `InternalPage.mediaList(startedAt_like)` |
* | **Nullability** | Optional |
*/
readonly startedAt_like?: $Scalars.String<_$Context>
/**
* Filter by the date the user completed the media
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `FuzzyDateInt` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaList |
* | **Path** | `InternalPage.mediaList(completedAt_greater)` |
* | **Nullability** | Optional |
*/
readonly completedAt_greater?: $Scalars.FuzzyDateInt<_$Context>
/**
* Filter by the date the user completed the media
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `FuzzyDateInt` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaList |
* | **Path** | `InternalPage.mediaList(completedAt_lesser)` |
* | **Nullability** | Optional |
*/
readonly completedAt_lesser?: $Scalars.FuzzyDateInt<_$Context>
/**
* Filter by the date the user completed the media
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaList |
* | **Path** | `InternalPage.mediaList(completedAt_like)` |
* | **Nullability** | Optional |
*/
readonly completedAt_like?: $Scalars.String<_$Context>
/**
* The order the results will be returned in
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[MediaListSort]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaList |
* | **Path** | `InternalPage.mediaList(sort)` |
* | **Nullability** | Optional |
*/
readonly $sort?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaListSort | null | undefined>> | null | undefined>
}

/**
* This is the "expanded" version of the `mediaList` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type airingSchedules<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = airingSchedules.$SelectionSet<_$Context>

export namespace airingSchedules {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.AiringSchedule<_$Context> {
/**
* Arguments for `airingSchedules` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* Filter by the id of the airing schedule item
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.airingSchedules |
* | **Path** | `InternalPage.airingSchedules(id)` |
* | **Nullability** | Optional |
*/
readonly id?: $Scalars.Int<_$Context>
/**
* Filter by the id of associated media
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.airingSchedules |
* | **Path** | `InternalPage.airingSchedules(mediaId)` |
* | **Nullability** | Optional |
*/
readonly mediaId?: $Scalars.Int<_$Context>
/**
* Filter by the airing episode number
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.airingSchedules |
* | **Path** | `InternalPage.airingSchedules(episode)` |
* | **Nullability** | Optional |
*/
readonly episode?: $Scalars.Int<_$Context>
/**
* Filter by the time of airing
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.airingSchedules |
* | **Path** | `InternalPage.airingSchedules(airingAt)` |
* | **Nullability** | Optional |
*/
readonly airingAt?: $Scalars.Int<_$Context>
/**
* Filter to episodes that haven't yet aired
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Boolean` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.airingSchedules |
* | **Path** | `InternalPage.airingSchedules(notYetAired)` |
* | **Nullability** | Optional |
*/
readonly notYetAired?: $Scalars.Boolean<_$Context>
/**
* Filter by the id of the airing schedule item
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.airingSchedules |
* | **Path** | `InternalPage.airingSchedules(id_not)` |
* | **Nullability** | Optional |
*/
readonly id_not?: $Scalars.Int<_$Context>
/**
* Filter by the id of the airing schedule item (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.airingSchedules |
* | **Path** | `InternalPage.airingSchedules(id_in)` |
* | **Nullability** | Optional |
*/
readonly id_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* Filter by the id of the airing schedule item (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.airingSchedules |
* | **Path** | `InternalPage.airingSchedules(id_not_in)` |
* | **Nullability** | Optional |
*/
readonly id_not_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* Filter by the id of associated media
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.airingSchedules |
* | **Path** | `InternalPage.airingSchedules(mediaId_not)` |
* | **Nullability** | Optional |
*/
readonly mediaId_not?: $Scalars.Int<_$Context>
/**
* Filter by the id of associated media (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.airingSchedules |
* | **Path** | `InternalPage.airingSchedules(mediaId_in)` |
* | **Nullability** | Optional |
*/
readonly mediaId_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* Filter by the id of associated media (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.airingSchedules |
* | **Path** | `InternalPage.airingSchedules(mediaId_not_in)` |
* | **Nullability** | Optional |
*/
readonly mediaId_not_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* Filter by the airing episode number
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.airingSchedules |
* | **Path** | `InternalPage.airingSchedules(episode_not)` |
* | **Nullability** | Optional |
*/
readonly episode_not?: $Scalars.Int<_$Context>
/**
* Filter by the airing episode number (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.airingSchedules |
* | **Path** | `InternalPage.airingSchedules(episode_in)` |
* | **Nullability** | Optional |
*/
readonly episode_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* Filter by the airing episode number (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.airingSchedules |
* | **Path** | `InternalPage.airingSchedules(episode_not_in)` |
* | **Nullability** | Optional |
*/
readonly episode_not_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* Filter by the airing episode number
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.airingSchedules |
* | **Path** | `InternalPage.airingSchedules(episode_greater)` |
* | **Nullability** | Optional |
*/
readonly episode_greater?: $Scalars.Int<_$Context>
/**
* Filter by the airing episode number
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.airingSchedules |
* | **Path** | `InternalPage.airingSchedules(episode_lesser)` |
* | **Nullability** | Optional |
*/
readonly episode_lesser?: $Scalars.Int<_$Context>
/**
* Filter by the time of airing
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.airingSchedules |
* | **Path** | `InternalPage.airingSchedules(airingAt_greater)` |
* | **Nullability** | Optional |
*/
readonly airingAt_greater?: $Scalars.Int<_$Context>
/**
* Filter by the time of airing
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.airingSchedules |
* | **Path** | `InternalPage.airingSchedules(airingAt_lesser)` |
* | **Nullability** | Optional |
*/
readonly airingAt_lesser?: $Scalars.Int<_$Context>
/**
* The order the results will be returned in
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[AiringSort]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.airingSchedules |
* | **Path** | `InternalPage.airingSchedules(sort)` |
* | **Nullability** | Optional |
*/
readonly $sort?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.AiringSort | null | undefined>> | null | undefined>
}

/**
* This is the "expanded" version of the `airingSchedules` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type mediaTrends<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = mediaTrends.$SelectionSet<_$Context>

export namespace mediaTrends {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.MediaTrend<_$Context> {
/**
* Arguments for `mediaTrends` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* Filter by the media id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaTrends |
* | **Path** | `InternalPage.mediaTrends(mediaId)` |
* | **Nullability** | Optional |
*/
readonly mediaId?: $Scalars.Int<_$Context>
/**
* Filter by date
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaTrends |
* | **Path** | `InternalPage.mediaTrends(date)` |
* | **Nullability** | Optional |
*/
readonly date?: $Scalars.Int<_$Context>
/**
* Filter by trending amount
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaTrends |
* | **Path** | `InternalPage.mediaTrends(trending)` |
* | **Nullability** | Optional |
*/
readonly trending?: $Scalars.Int<_$Context>
/**
* Filter by score
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaTrends |
* | **Path** | `InternalPage.mediaTrends(averageScore)` |
* | **Nullability** | Optional |
*/
readonly averageScore?: $Scalars.Int<_$Context>
/**
* Filter by popularity
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaTrends |
* | **Path** | `InternalPage.mediaTrends(popularity)` |
* | **Nullability** | Optional |
*/
readonly popularity?: $Scalars.Int<_$Context>
/**
* Filter by episode number
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaTrends |
* | **Path** | `InternalPage.mediaTrends(episode)` |
* | **Nullability** | Optional |
*/
readonly episode?: $Scalars.Int<_$Context>
/**
* Filter to stats recorded while the media was releasing
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Boolean` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaTrends |
* | **Path** | `InternalPage.mediaTrends(releasing)` |
* | **Nullability** | Optional |
*/
readonly releasing?: $Scalars.Boolean<_$Context>
/**
* Filter by the media id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaTrends |
* | **Path** | `InternalPage.mediaTrends(mediaId_not)` |
* | **Nullability** | Optional |
*/
readonly mediaId_not?: $Scalars.Int<_$Context>
/**
* Filter by the media id (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaTrends |
* | **Path** | `InternalPage.mediaTrends(mediaId_in)` |
* | **Nullability** | Optional |
*/
readonly mediaId_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* Filter by the media id (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaTrends |
* | **Path** | `InternalPage.mediaTrends(mediaId_not_in)` |
* | **Nullability** | Optional |
*/
readonly mediaId_not_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* Filter by date
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaTrends |
* | **Path** | `InternalPage.mediaTrends(date_greater)` |
* | **Nullability** | Optional |
*/
readonly date_greater?: $Scalars.Int<_$Context>
/**
* Filter by date
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaTrends |
* | **Path** | `InternalPage.mediaTrends(date_lesser)` |
* | **Nullability** | Optional |
*/
readonly date_lesser?: $Scalars.Int<_$Context>
/**
* Filter by trending amount
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaTrends |
* | **Path** | `InternalPage.mediaTrends(trending_greater)` |
* | **Nullability** | Optional |
*/
readonly trending_greater?: $Scalars.Int<_$Context>
/**
* Filter by trending amount
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaTrends |
* | **Path** | `InternalPage.mediaTrends(trending_lesser)` |
* | **Nullability** | Optional |
*/
readonly trending_lesser?: $Scalars.Int<_$Context>
/**
* Filter by trending amount
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaTrends |
* | **Path** | `InternalPage.mediaTrends(trending_not)` |
* | **Nullability** | Optional |
*/
readonly trending_not?: $Scalars.Int<_$Context>
/**
* Filter by score
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaTrends |
* | **Path** | `InternalPage.mediaTrends(averageScore_greater)` |
* | **Nullability** | Optional |
*/
readonly averageScore_greater?: $Scalars.Int<_$Context>
/**
* Filter by score
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaTrends |
* | **Path** | `InternalPage.mediaTrends(averageScore_lesser)` |
* | **Nullability** | Optional |
*/
readonly averageScore_lesser?: $Scalars.Int<_$Context>
/**
* Filter by score
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaTrends |
* | **Path** | `InternalPage.mediaTrends(averageScore_not)` |
* | **Nullability** | Optional |
*/
readonly averageScore_not?: $Scalars.Int<_$Context>
/**
* Filter by popularity
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaTrends |
* | **Path** | `InternalPage.mediaTrends(popularity_greater)` |
* | **Nullability** | Optional |
*/
readonly popularity_greater?: $Scalars.Int<_$Context>
/**
* Filter by popularity
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaTrends |
* | **Path** | `InternalPage.mediaTrends(popularity_lesser)` |
* | **Nullability** | Optional |
*/
readonly popularity_lesser?: $Scalars.Int<_$Context>
/**
* Filter by popularity
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaTrends |
* | **Path** | `InternalPage.mediaTrends(popularity_not)` |
* | **Nullability** | Optional |
*/
readonly popularity_not?: $Scalars.Int<_$Context>
/**
* Filter by episode number
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaTrends |
* | **Path** | `InternalPage.mediaTrends(episode_greater)` |
* | **Nullability** | Optional |
*/
readonly episode_greater?: $Scalars.Int<_$Context>
/**
* Filter by episode number
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaTrends |
* | **Path** | `InternalPage.mediaTrends(episode_lesser)` |
* | **Nullability** | Optional |
*/
readonly episode_lesser?: $Scalars.Int<_$Context>
/**
* Filter by episode number
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaTrends |
* | **Path** | `InternalPage.mediaTrends(episode_not)` |
* | **Nullability** | Optional |
*/
readonly episode_not?: $Scalars.Int<_$Context>
/**
* The order the results will be returned in
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[MediaTrendSort]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.mediaTrends |
* | **Path** | `InternalPage.mediaTrends(sort)` |
* | **Nullability** | Optional |
*/
readonly $sort?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaTrendSort | null | undefined>> | null | undefined>
}

/**
* This is the "expanded" version of the `mediaTrends` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type notifications<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = notifications.$SelectionSet<_$Context>

export namespace notifications {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.NotificationUnion<_$Context> {
/**
* Arguments for `notifications` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* Filter by the type of notifications
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `NotificationType` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.notifications |
* | **Path** | `InternalPage.notifications(type)` |
* | **Nullability** | Optional |
*/
readonly $type?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.NotificationType | null | undefined>
/**
* Reset the unread notification count to 0 on load
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Boolean` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.notifications |
* | **Path** | `InternalPage.notifications(resetNotificationCount)` |
* | **Nullability** | Optional |
*/
readonly resetNotificationCount?: $Scalars.Boolean<_$Context>
/**
* Filter by the type of notifications (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[NotificationType]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.notifications |
* | **Path** | `InternalPage.notifications(type_in)` |
* | **Nullability** | Optional |
*/
readonly $type_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.NotificationType | null | undefined>> | null | undefined>
}

/**
* This is the "expanded" version of the `notifications` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type followers<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = followers.$SelectionSet<_$Context>

export namespace followers {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.User<_$Context> {
/**
* Arguments for `followers` field. Some (1/2) arguments are required so you must include this.
*/
readonly $: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* User id of the follower/followed
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int!` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.followers |
* | **Path** | `InternalPage.followers(userId)` |
* | **Nullability** | Required |
*/
readonly userId: $Scalars.Int$NonNull<_$Context>
/**
* The order the results will be returned in
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[UserSort]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.followers |
* | **Path** | `InternalPage.followers(sort)` |
* | **Nullability** | Optional |
*/
readonly $sort?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.UserSort | null | undefined>> | null | undefined>
}

/**
* This is the "expanded" version of the `followers` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type following<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = following.$SelectionSet<_$Context>

export namespace following {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.User<_$Context> {
/**
* Arguments for `following` field. Some (1/2) arguments are required so you must include this.
*/
readonly $: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* User id of the follower/followed
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int!` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.following |
* | **Path** | `InternalPage.following(userId)` |
* | **Nullability** | Required |
*/
readonly userId: $Scalars.Int$NonNull<_$Context>
/**
* The order the results will be returned in
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[UserSort]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.following |
* | **Path** | `InternalPage.following(sort)` |
* | **Nullability** | Optional |
*/
readonly $sort?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.UserSort | null | undefined>> | null | undefined>
}

/**
* This is the "expanded" version of the `following` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type activities<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = activities.$SelectionSet<_$Context>

export namespace activities {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.ActivityUnion<_$Context> {
/**
* Arguments for `activities` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* Filter by the activity id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.activities |
* | **Path** | `InternalPage.activities(id)` |
* | **Nullability** | Optional |
*/
readonly id?: $Scalars.Int<_$Context>
/**
* Filter by the owner user id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.activities |
* | **Path** | `InternalPage.activities(userId)` |
* | **Nullability** | Optional |
*/
readonly userId?: $Scalars.Int<_$Context>
/**
* Filter by the id of the user who sent a message
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.activities |
* | **Path** | `InternalPage.activities(messengerId)` |
* | **Nullability** | Optional |
*/
readonly messengerId?: $Scalars.Int<_$Context>
/**
* Filter by the associated media id of the activity
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.activities |
* | **Path** | `InternalPage.activities(mediaId)` |
* | **Nullability** | Optional |
*/
readonly mediaId?: $Scalars.Int<_$Context>
/**
* Filter by the type of activity
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `ActivityType` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.activities |
* | **Path** | `InternalPage.activities(type)` |
* | **Nullability** | Optional |
*/
readonly $type?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.ActivityType | null | undefined>
/**
* Filter activity to users who are being followed by the authenticated user
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Boolean` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.activities |
* | **Path** | `InternalPage.activities(isFollowing)` |
* | **Nullability** | Optional |
*/
readonly isFollowing?: $Scalars.Boolean<_$Context>
/**
* Filter activity to only activity with replies
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Boolean` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.activities |
* | **Path** | `InternalPage.activities(hasReplies)` |
* | **Nullability** | Optional |
*/
readonly hasReplies?: $Scalars.Boolean<_$Context>
/**
* Filter activity to only activity with replies or is of type text
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Boolean` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.activities |
* | **Path** | `InternalPage.activities(hasRepliesOrTypeText)` |
* | **Nullability** | Optional |
*/
readonly hasRepliesOrTypeText?: $Scalars.Boolean<_$Context>
/**
* Filter by the time the activity was created
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.activities |
* | **Path** | `InternalPage.activities(createdAt)` |
* | **Nullability** | Optional |
*/
readonly createdAt?: $Scalars.Int<_$Context>
/**
* Filter by the activity id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.activities |
* | **Path** | `InternalPage.activities(id_not)` |
* | **Nullability** | Optional |
*/
readonly id_not?: $Scalars.Int<_$Context>
/**
* Filter by the activity id (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.activities |
* | **Path** | `InternalPage.activities(id_in)` |
* | **Nullability** | Optional |
*/
readonly id_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* Filter by the activity id (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.activities |
* | **Path** | `InternalPage.activities(id_not_in)` |
* | **Nullability** | Optional |
*/
readonly id_not_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* Filter by the owner user id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.activities |
* | **Path** | `InternalPage.activities(userId_not)` |
* | **Nullability** | Optional |
*/
readonly userId_not?: $Scalars.Int<_$Context>
/**
* Filter by the owner user id (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.activities |
* | **Path** | `InternalPage.activities(userId_in)` |
* | **Nullability** | Optional |
*/
readonly userId_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* Filter by the owner user id (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.activities |
* | **Path** | `InternalPage.activities(userId_not_in)` |
* | **Nullability** | Optional |
*/
readonly userId_not_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* Filter by the id of the user who sent a message
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.activities |
* | **Path** | `InternalPage.activities(messengerId_not)` |
* | **Nullability** | Optional |
*/
readonly messengerId_not?: $Scalars.Int<_$Context>
/**
* Filter by the id of the user who sent a message (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.activities |
* | **Path** | `InternalPage.activities(messengerId_in)` |
* | **Nullability** | Optional |
*/
readonly messengerId_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* Filter by the id of the user who sent a message (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.activities |
* | **Path** | `InternalPage.activities(messengerId_not_in)` |
* | **Nullability** | Optional |
*/
readonly messengerId_not_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* Filter by the associated media id of the activity
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.activities |
* | **Path** | `InternalPage.activities(mediaId_not)` |
* | **Nullability** | Optional |
*/
readonly mediaId_not?: $Scalars.Int<_$Context>
/**
* Filter by the associated media id of the activity (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.activities |
* | **Path** | `InternalPage.activities(mediaId_in)` |
* | **Nullability** | Optional |
*/
readonly mediaId_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* Filter by the associated media id of the activity (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.activities |
* | **Path** | `InternalPage.activities(mediaId_not_in)` |
* | **Nullability** | Optional |
*/
readonly mediaId_not_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* Filter by the type of activity
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `ActivityType` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.activities |
* | **Path** | `InternalPage.activities(type_not)` |
* | **Nullability** | Optional |
*/
readonly $type_not?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.ActivityType | null | undefined>
/**
* Filter by the type of activity (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[ActivityType]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.activities |
* | **Path** | `InternalPage.activities(type_in)` |
* | **Nullability** | Optional |
*/
readonly $type_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.ActivityType | null | undefined>> | null | undefined>
/**
* Filter by the type of activity (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[ActivityType]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.activities |
* | **Path** | `InternalPage.activities(type_not_in)` |
* | **Nullability** | Optional |
*/
readonly $type_not_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.ActivityType | null | undefined>> | null | undefined>
/**
* Filter by the time the activity was created
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.activities |
* | **Path** | `InternalPage.activities(createdAt_greater)` |
* | **Nullability** | Optional |
*/
readonly createdAt_greater?: $Scalars.Int<_$Context>
/**
* Filter by the time the activity was created
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.activities |
* | **Path** | `InternalPage.activities(createdAt_lesser)` |
* | **Nullability** | Optional |
*/
readonly createdAt_lesser?: $Scalars.Int<_$Context>
/**
* The order the results will be returned in
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[ActivitySort]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.activities |
* | **Path** | `InternalPage.activities(sort)` |
* | **Nullability** | Optional |
*/
readonly $sort?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.ActivitySort | null | undefined>> | null | undefined>
}

/**
* This is the "expanded" version of the `activities` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type activityReplies<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = activityReplies.$SelectionSet<_$Context>

export namespace activityReplies {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.ActivityReply<_$Context> {
/**
* Arguments for `activityReplies` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* Filter by the reply id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.activityReplies |
* | **Path** | `InternalPage.activityReplies(id)` |
* | **Nullability** | Optional |
*/
readonly id?: $Scalars.Int<_$Context>
/**
* Filter by the parent id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.activityReplies |
* | **Path** | `InternalPage.activityReplies(activityId)` |
* | **Nullability** | Optional |
*/
readonly activityId?: $Scalars.Int<_$Context>
}

/**
* This is the "expanded" version of the `activityReplies` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type threads<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = threads.$SelectionSet<_$Context>

export namespace threads {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.Thread<_$Context> {
/**
* Arguments for `threads` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* Filter by the thread id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.threads |
* | **Path** | `InternalPage.threads(id)` |
* | **Nullability** | Optional |
*/
readonly id?: $Scalars.Int<_$Context>
/**
* Filter by the user id of the thread's creator
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.threads |
* | **Path** | `InternalPage.threads(userId)` |
* | **Nullability** | Optional |
*/
readonly userId?: $Scalars.Int<_$Context>
/**
* Filter by the user id of the last user to comment on the thread
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.threads |
* | **Path** | `InternalPage.threads(replyUserId)` |
* | **Nullability** | Optional |
*/
readonly replyUserId?: $Scalars.Int<_$Context>
/**
* Filter by if the currently authenticated user's subscribed threads
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Boolean` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.threads |
* | **Path** | `InternalPage.threads(subscribed)` |
* | **Nullability** | Optional |
*/
readonly subscribed?: $Scalars.Boolean<_$Context>
/**
* Filter by thread category id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.threads |
* | **Path** | `InternalPage.threads(categoryId)` |
* | **Nullability** | Optional |
*/
readonly categoryId?: $Scalars.Int<_$Context>
/**
* Filter by thread media id category
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.threads |
* | **Path** | `InternalPage.threads(mediaCategoryId)` |
* | **Nullability** | Optional |
*/
readonly mediaCategoryId?: $Scalars.Int<_$Context>
/**
* Filter by search query
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.threads |
* | **Path** | `InternalPage.threads(search)` |
* | **Nullability** | Optional |
*/
readonly search?: $Scalars.String<_$Context>
/**
* Filter by the thread id (max 10,000 items)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.threads |
* | **Path** | `InternalPage.threads(id_in)` |
* | **Nullability** | Optional |
*/
readonly id_in?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* The order the results will be returned in
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[ThreadSort]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.threads |
* | **Path** | `InternalPage.threads(sort)` |
* | **Nullability** | Optional |
*/
readonly $sort?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.ThreadSort | null | undefined>> | null | undefined>
}

/**
* This is the "expanded" version of the `threads` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type threadComments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = threadComments.$SelectionSet<_$Context>

export namespace threadComments {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.ThreadComment<_$Context> {
/**
* Arguments for `threadComments` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* Filter by the comment id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.threadComments |
* | **Path** | `InternalPage.threadComments(id)` |
* | **Nullability** | Optional |
*/
readonly id?: $Scalars.Int<_$Context>
/**
* Filter by the thread id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.threadComments |
* | **Path** | `InternalPage.threadComments(threadId)` |
* | **Nullability** | Optional |
*/
readonly threadId?: $Scalars.Int<_$Context>
/**
* Filter by the user id of the comment's creator
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.threadComments |
* | **Path** | `InternalPage.threadComments(userId)` |
* | **Nullability** | Optional |
*/
readonly userId?: $Scalars.Int<_$Context>
/**
* The order the results will be returned in
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[ThreadCommentSort]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.threadComments |
* | **Path** | `InternalPage.threadComments(sort)` |
* | **Nullability** | Optional |
*/
readonly $sort?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.ThreadCommentSort | null | undefined>> | null | undefined>
}

/**
* This is the "expanded" version of the `threadComments` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type reviews<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = reviews.$SelectionSet<_$Context>

export namespace reviews {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.Review<_$Context> {
/**
* Arguments for `reviews` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* Filter by Review id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.reviews |
* | **Path** | `InternalPage.reviews(id)` |
* | **Nullability** | Optional |
*/
readonly id?: $Scalars.Int<_$Context>
/**
* Filter by media id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.reviews |
* | **Path** | `InternalPage.reviews(mediaId)` |
* | **Nullability** | Optional |
*/
readonly mediaId?: $Scalars.Int<_$Context>
/**
* Filter by user id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.reviews |
* | **Path** | `InternalPage.reviews(userId)` |
* | **Nullability** | Optional |
*/
readonly userId?: $Scalars.Int<_$Context>
/**
* Filter by media type
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `MediaType` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.reviews |
* | **Path** | `InternalPage.reviews(mediaType)` |
* | **Nullability** | Optional |
*/
readonly $mediaType?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaType | null | undefined>
/**
* The order the results will be returned in
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[ReviewSort]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.reviews |
* | **Path** | `InternalPage.reviews(sort)` |
* | **Nullability** | Optional |
*/
readonly $sort?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.ReviewSort | null | undefined>> | null | undefined>
}

/**
* This is the "expanded" version of the `reviews` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type recommendations<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = recommendations.$SelectionSet<_$Context>

export namespace recommendations {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.Recommendation<_$Context> {
/**
* Arguments for `recommendations` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* Filter by recommendation id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.recommendations |
* | **Path** | `InternalPage.recommendations(id)` |
* | **Nullability** | Optional |
*/
readonly id?: $Scalars.Int<_$Context>
/**
* Filter by media id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.recommendations |
* | **Path** | `InternalPage.recommendations(mediaId)` |
* | **Nullability** | Optional |
*/
readonly mediaId?: $Scalars.Int<_$Context>
/**
* Filter by media recommendation id
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.recommendations |
* | **Path** | `InternalPage.recommendations(mediaRecommendationId)` |
* | **Nullability** | Optional |
*/
readonly mediaRecommendationId?: $Scalars.Int<_$Context>
/**
* Filter by user who created the recommendation
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.recommendations |
* | **Path** | `InternalPage.recommendations(userId)` |
* | **Nullability** | Optional |
*/
readonly userId?: $Scalars.Int<_$Context>
/**
* Filter by total rating of the recommendation
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.recommendations |
* | **Path** | `InternalPage.recommendations(rating)` |
* | **Nullability** | Optional |
*/
readonly rating?: $Scalars.Int<_$Context>
/**
* Filter by the media on the authenticated user's lists
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Boolean` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.recommendations |
* | **Path** | `InternalPage.recommendations(onList)` |
* | **Nullability** | Optional |
*/
readonly onList?: $Scalars.Boolean<_$Context>
/**
* Filter by total rating of the recommendation
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.recommendations |
* | **Path** | `InternalPage.recommendations(rating_greater)` |
* | **Nullability** | Optional |
*/
readonly rating_greater?: $Scalars.Int<_$Context>
/**
* Filter by total rating of the recommendation
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.recommendations |
* | **Path** | `InternalPage.recommendations(rating_lesser)` |
* | **Nullability** | Optional |
*/
readonly rating_lesser?: $Scalars.Int<_$Context>
/**
* The order the results will be returned in
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[RecommendationSort]` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.recommendations |
* | **Path** | `InternalPage.recommendations(sort)` |
* | **Nullability** | Optional |
*/
readonly $sort?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.RecommendationSort | null | undefined>> | null | undefined>
}

/**
* This is the "expanded" version of the `recommendations` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type likes<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = likes.$SelectionSet<_$Context>

export namespace likes {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.User<_$Context> {
/**
* Arguments for `likes` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* The id of the likeable type
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.likes |
* | **Path** | `InternalPage.likes(likeableId)` |
* | **Nullability** | Optional |
*/
readonly likeableId?: $Scalars.Int<_$Context>
/**
* The type of model the id applies to
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `LikeableType` |
* | **Parent** | {@link $NamedTypes.$InternalPage}.likes |
* | **Path** | `InternalPage.likes(type)` |
* | **Nullability** | Optional |
*/
readonly $type?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.LikeableType | null | undefined>
}

/**
* This is the "expanded" version of the `likes` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}

