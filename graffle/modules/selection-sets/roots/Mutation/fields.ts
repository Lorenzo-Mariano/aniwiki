import type * as $$Utilities from 'graffle/utilities-for-generated'
import type { GraphqlKit } from 'graffle/utilities-for-generated'
import type { $DefaultSelectionContext } from '../../_context.js'
import type * as $Named from '../../$named.js'
import type * as $Scalars from '../../scalars/_.js'

export type UpdateUser<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = UpdateUser.$SelectionSet<_$Context>

export namespace UpdateUser {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.User<_$Context> {
/**
* Arguments for `UpdateUser` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* User's about/bio text
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$Mutation}.UpdateUser |
* | **Path** | `Mutation.UpdateUser(about)` |
* | **Nullability** | Optional |
*/
readonly about?: $Scalars.String<_$Context>
/**
* User's title language
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `UserTitleLanguage` |
* | **Parent** | {@link $NamedTypes.$Mutation}.UpdateUser |
* | **Path** | `Mutation.UpdateUser(titleLanguage)` |
* | **Nullability** | Optional |
*/
readonly $titleLanguage?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.UserTitleLanguage | null | undefined>
/**
* If the user should see media marked as adult-only
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Boolean` |
* | **Parent** | {@link $NamedTypes.$Mutation}.UpdateUser |
* | **Path** | `Mutation.UpdateUser(displayAdultContent)` |
* | **Nullability** | Optional |
*/
readonly displayAdultContent?: $Scalars.Boolean<_$Context>
/**
* If the user should get notifications when a show they are watching aires
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Boolean` |
* | **Parent** | {@link $NamedTypes.$Mutation}.UpdateUser |
* | **Path** | `Mutation.UpdateUser(airingNotifications)` |
* | **Nullability** | Optional |
*/
readonly airingNotifications?: $Scalars.Boolean<_$Context>
/**
* The user's list scoring system
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `ScoreFormat` |
* | **Parent** | {@link $NamedTypes.$Mutation}.UpdateUser |
* | **Path** | `Mutation.UpdateUser(scoreFormat)` |
* | **Nullability** | Optional |
*/
readonly $scoreFormat?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.ScoreFormat | null | undefined>
/**
* The user's default list order
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$Mutation}.UpdateUser |
* | **Path** | `Mutation.UpdateUser(rowOrder)` |
* | **Nullability** | Optional |
*/
readonly rowOrder?: $Scalars.String<_$Context>
/**
* Profile highlight color
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$Mutation}.UpdateUser |
* | **Path** | `Mutation.UpdateUser(profileColor)` |
* | **Nullability** | Optional |
*/
readonly profileColor?: $Scalars.String<_$Context>
/**
* Profile highlight color
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$Mutation}.UpdateUser |
* | **Path** | `Mutation.UpdateUser(donatorBadge)` |
* | **Nullability** | Optional |
*/
readonly donatorBadge?: $Scalars.String<_$Context>
/**
* Notification options
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[NotificationOptionInput]` |
* | **Parent** | {@link $NamedTypes.$Mutation}.UpdateUser |
* | **Path** | `Mutation.UpdateUser(notificationOptions)` |
* | **Nullability** | Optional |
*/
readonly notificationOptions?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.NotificationOptionInput<_$Context> | null | undefined>> | null | undefined>
/**
* Timezone offset format: -?HH:MM
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$Mutation}.UpdateUser |
* | **Path** | `Mutation.UpdateUser(timezone)` |
* | **Nullability** | Optional |
*/
readonly timezone?: $Scalars.String<_$Context>
/**
* Minutes between activity for them to be merged together. 0 is Never, Above 2 weeks (20160 mins) is Always.
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Mutation}.UpdateUser |
* | **Path** | `Mutation.UpdateUser(activityMergeTime)` |
* | **Nullability** | Optional |
*/
readonly activityMergeTime?: $Scalars.Int<_$Context>
/**
* The user's anime list options
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `MediaListOptionsInput` |
* | **Parent** | {@link $NamedTypes.$Mutation}.UpdateUser |
* | **Path** | `Mutation.UpdateUser(animeListOptions)` |
* | **Nullability** | Optional |
*/
readonly animeListOptions?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaListOptionsInput<_$Context> | null | undefined>
/**
* The user's anime list options
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `MediaListOptionsInput` |
* | **Parent** | {@link $NamedTypes.$Mutation}.UpdateUser |
* | **Path** | `Mutation.UpdateUser(mangaListOptions)` |
* | **Nullability** | Optional |
*/
readonly mangaListOptions?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaListOptionsInput<_$Context> | null | undefined>
/**
* The language the user wants to see staff and character names in
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `UserStaffNameLanguage` |
* | **Parent** | {@link $NamedTypes.$Mutation}.UpdateUser |
* | **Path** | `Mutation.UpdateUser(staffNameLanguage)` |
* | **Nullability** | Optional |
*/
readonly $staffNameLanguage?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.UserStaffNameLanguage | null | undefined>
/**
* Only allow messages from other users the user follows
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Boolean` |
* | **Parent** | {@link $NamedTypes.$Mutation}.UpdateUser |
* | **Path** | `Mutation.UpdateUser(restrictMessagesToFollowing)` |
* | **Nullability** | Optional |
*/
readonly restrictMessagesToFollowing?: $Scalars.Boolean<_$Context>
/**
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[ListActivityOptionInput]` |
* | **Parent** | {@link $NamedTypes.$Mutation}.UpdateUser |
* | **Path** | `Mutation.UpdateUser(disabledListActivity)` |
* | **Nullability** | Optional |
*/
readonly disabledListActivity?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.ListActivityOptionInput<_$Context> | null | undefined>> | null | undefined>
}

/**
* This is the "expanded" version of the `UpdateUser` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type SaveMediaListEntry<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = SaveMediaListEntry.$SelectionSet<_$Context>

export namespace SaveMediaListEntry {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.MediaList<_$Context> {
/**
* Arguments for `SaveMediaListEntry` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* The list entry id, required for updating
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Mutation}.SaveMediaListEntry |
* | **Path** | `Mutation.SaveMediaListEntry(id)` |
* | **Nullability** | Optional |
*/
readonly id?: $Scalars.Int<_$Context>
/**
* The id of the media the entry is of
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Mutation}.SaveMediaListEntry |
* | **Path** | `Mutation.SaveMediaListEntry(mediaId)` |
* | **Nullability** | Optional |
*/
readonly mediaId?: $Scalars.Int<_$Context>
/**
* The watching/reading status
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `MediaListStatus` |
* | **Parent** | {@link $NamedTypes.$Mutation}.SaveMediaListEntry |
* | **Path** | `Mutation.SaveMediaListEntry(status)` |
* | **Nullability** | Optional |
*/
readonly $status?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaListStatus | null | undefined>
/**
* The score of the media in the user's chosen scoring method
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Float` |
* | **Parent** | {@link $NamedTypes.$Mutation}.SaveMediaListEntry |
* | **Path** | `Mutation.SaveMediaListEntry(score)` |
* | **Nullability** | Optional |
*/
readonly score?: $Scalars.Float<_$Context>
/**
* The score of the media in 100 point
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Mutation}.SaveMediaListEntry |
* | **Path** | `Mutation.SaveMediaListEntry(scoreRaw)` |
* | **Nullability** | Optional |
*/
readonly scoreRaw?: $Scalars.Int<_$Context>
/**
* The amount of episodes/chapters consumed by the user
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Mutation}.SaveMediaListEntry |
* | **Path** | `Mutation.SaveMediaListEntry(progress)` |
* | **Nullability** | Optional |
*/
readonly progress?: $Scalars.Int<_$Context>
/**
* The amount of volumes read by the user
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Mutation}.SaveMediaListEntry |
* | **Path** | `Mutation.SaveMediaListEntry(progressVolumes)` |
* | **Nullability** | Optional |
*/
readonly progressVolumes?: $Scalars.Int<_$Context>
/**
* The amount of times the user has rewatched/read the media
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Mutation}.SaveMediaListEntry |
* | **Path** | `Mutation.SaveMediaListEntry(repeat)` |
* | **Nullability** | Optional |
*/
readonly repeat?: $Scalars.Int<_$Context>
/**
* Priority of planning
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Mutation}.SaveMediaListEntry |
* | **Path** | `Mutation.SaveMediaListEntry(priority)` |
* | **Nullability** | Optional |
*/
readonly priority?: $Scalars.Int<_$Context>
/**
* If the entry should only be visible to authenticated user
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Boolean` |
* | **Parent** | {@link $NamedTypes.$Mutation}.SaveMediaListEntry |
* | **Path** | `Mutation.SaveMediaListEntry(private)` |
* | **Nullability** | Optional |
*/
readonly private?: $Scalars.Boolean<_$Context>
/**
* Text notes
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$Mutation}.SaveMediaListEntry |
* | **Path** | `Mutation.SaveMediaListEntry(notes)` |
* | **Nullability** | Optional |
*/
readonly notes?: $Scalars.String<_$Context>
/**
* If the entry shown be hidden from non-custom lists
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Boolean` |
* | **Parent** | {@link $NamedTypes.$Mutation}.SaveMediaListEntry |
* | **Path** | `Mutation.SaveMediaListEntry(hiddenFromStatusLists)` |
* | **Nullability** | Optional |
*/
readonly hiddenFromStatusLists?: $Scalars.Boolean<_$Context>
/**
* Array of custom list names which should be enabled for this entry
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[String]` |
* | **Parent** | {@link $NamedTypes.$Mutation}.SaveMediaListEntry |
* | **Path** | `Mutation.SaveMediaListEntry(customLists)` |
* | **Nullability** | Optional |
*/
readonly customLists?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.String<_$Context>> | null | undefined>
/**
* Array of advanced scores
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Float]` |
* | **Parent** | {@link $NamedTypes.$Mutation}.SaveMediaListEntry |
* | **Path** | `Mutation.SaveMediaListEntry(advancedScores)` |
* | **Nullability** | Optional |
*/
readonly advancedScores?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Float<_$Context>> | null | undefined>
/**
* When the entry was started by the user
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `FuzzyDateInput` |
* | **Parent** | {@link $NamedTypes.$Mutation}.SaveMediaListEntry |
* | **Path** | `Mutation.SaveMediaListEntry(startedAt)` |
* | **Nullability** | Optional |
*/
readonly startedAt?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.FuzzyDateInput<_$Context> | null | undefined>
/**
* When the entry was completed by the user
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `FuzzyDateInput` |
* | **Parent** | {@link $NamedTypes.$Mutation}.SaveMediaListEntry |
* | **Path** | `Mutation.SaveMediaListEntry(completedAt)` |
* | **Nullability** | Optional |
*/
readonly completedAt?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.FuzzyDateInput<_$Context> | null | undefined>
}

/**
* This is the "expanded" version of the `SaveMediaListEntry` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type UpdateMediaListEntries<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = UpdateMediaListEntries.$SelectionSet<_$Context>

export namespace UpdateMediaListEntries {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.MediaList<_$Context> {
/**
* Arguments for `UpdateMediaListEntries` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* The watching/reading status
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `MediaListStatus` |
* | **Parent** | {@link $NamedTypes.$Mutation}.UpdateMediaListEntries |
* | **Path** | `Mutation.UpdateMediaListEntries(status)` |
* | **Nullability** | Optional |
*/
readonly $status?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaListStatus | null | undefined>
/**
* The score of the media in the user's chosen scoring method
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Float` |
* | **Parent** | {@link $NamedTypes.$Mutation}.UpdateMediaListEntries |
* | **Path** | `Mutation.UpdateMediaListEntries(score)` |
* | **Nullability** | Optional |
*/
readonly score?: $Scalars.Float<_$Context>
/**
* The score of the media in 100 point
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Mutation}.UpdateMediaListEntries |
* | **Path** | `Mutation.UpdateMediaListEntries(scoreRaw)` |
* | **Nullability** | Optional |
*/
readonly scoreRaw?: $Scalars.Int<_$Context>
/**
* The amount of episodes/chapters consumed by the user
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Mutation}.UpdateMediaListEntries |
* | **Path** | `Mutation.UpdateMediaListEntries(progress)` |
* | **Nullability** | Optional |
*/
readonly progress?: $Scalars.Int<_$Context>
/**
* The amount of volumes read by the user
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Mutation}.UpdateMediaListEntries |
* | **Path** | `Mutation.UpdateMediaListEntries(progressVolumes)` |
* | **Nullability** | Optional |
*/
readonly progressVolumes?: $Scalars.Int<_$Context>
/**
* The amount of times the user has rewatched/read the media
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Mutation}.UpdateMediaListEntries |
* | **Path** | `Mutation.UpdateMediaListEntries(repeat)` |
* | **Nullability** | Optional |
*/
readonly repeat?: $Scalars.Int<_$Context>
/**
* Priority of planning
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Mutation}.UpdateMediaListEntries |
* | **Path** | `Mutation.UpdateMediaListEntries(priority)` |
* | **Nullability** | Optional |
*/
readonly priority?: $Scalars.Int<_$Context>
/**
* If the entry should only be visible to authenticated user
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Boolean` |
* | **Parent** | {@link $NamedTypes.$Mutation}.UpdateMediaListEntries |
* | **Path** | `Mutation.UpdateMediaListEntries(private)` |
* | **Nullability** | Optional |
*/
readonly private?: $Scalars.Boolean<_$Context>
/**
* Text notes
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$Mutation}.UpdateMediaListEntries |
* | **Path** | `Mutation.UpdateMediaListEntries(notes)` |
* | **Nullability** | Optional |
*/
readonly notes?: $Scalars.String<_$Context>
/**
* If the entry shown be hidden from non-custom lists
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Boolean` |
* | **Parent** | {@link $NamedTypes.$Mutation}.UpdateMediaListEntries |
* | **Path** | `Mutation.UpdateMediaListEntries(hiddenFromStatusLists)` |
* | **Nullability** | Optional |
*/
readonly hiddenFromStatusLists?: $Scalars.Boolean<_$Context>
/**
* Array of advanced scores
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Float]` |
* | **Parent** | {@link $NamedTypes.$Mutation}.UpdateMediaListEntries |
* | **Path** | `Mutation.UpdateMediaListEntries(advancedScores)` |
* | **Nullability** | Optional |
*/
readonly advancedScores?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Float<_$Context>> | null | undefined>
/**
* When the entry was started by the user
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `FuzzyDateInput` |
* | **Parent** | {@link $NamedTypes.$Mutation}.UpdateMediaListEntries |
* | **Path** | `Mutation.UpdateMediaListEntries(startedAt)` |
* | **Nullability** | Optional |
*/
readonly startedAt?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.FuzzyDateInput<_$Context> | null | undefined>
/**
* When the entry was completed by the user
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `FuzzyDateInput` |
* | **Parent** | {@link $NamedTypes.$Mutation}.UpdateMediaListEntries |
* | **Path** | `Mutation.UpdateMediaListEntries(completedAt)` |
* | **Nullability** | Optional |
*/
readonly completedAt?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.FuzzyDateInput<_$Context> | null | undefined>
/**
* The list entries ids to update
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$Mutation}.UpdateMediaListEntries |
* | **Path** | `Mutation.UpdateMediaListEntries(ids)` |
* | **Nullability** | Optional |
*/
readonly ids?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
}

/**
* This is the "expanded" version of the `UpdateMediaListEntries` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type DeleteMediaListEntry<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = DeleteMediaListEntry.$SelectionSet<_$Context>

export namespace DeleteMediaListEntry {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.Deleted<_$Context> {
/**
* Arguments for `DeleteMediaListEntry` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* The id of the media list entry to delete
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Mutation}.DeleteMediaListEntry |
* | **Path** | `Mutation.DeleteMediaListEntry(id)` |
* | **Nullability** | Optional |
*/
readonly id?: $Scalars.Int<_$Context>
}

/**
* This is the "expanded" version of the `DeleteMediaListEntry` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type DeleteCustomList<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = DeleteCustomList.$SelectionSet<_$Context>

export namespace DeleteCustomList {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.Deleted<_$Context> {
/**
* Arguments for `DeleteCustomList` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* The name of the custom list to delete
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$Mutation}.DeleteCustomList |
* | **Path** | `Mutation.DeleteCustomList(customList)` |
* | **Nullability** | Optional |
*/
readonly customList?: $Scalars.String<_$Context>
/**
* The media list type of the custom list
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `MediaType` |
* | **Parent** | {@link $NamedTypes.$Mutation}.DeleteCustomList |
* | **Path** | `Mutation.DeleteCustomList(type)` |
* | **Nullability** | Optional |
*/
readonly $type?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.MediaType | null | undefined>
}

/**
* This is the "expanded" version of the `DeleteCustomList` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type SaveTextActivity<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = SaveTextActivity.$SelectionSet<_$Context>

export namespace SaveTextActivity {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.TextActivity<_$Context> {
/**
* Arguments for `SaveTextActivity` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* The activity's id, required for updating
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Mutation}.SaveTextActivity |
* | **Path** | `Mutation.SaveTextActivity(id)` |
* | **Nullability** | Optional |
*/
readonly id?: $Scalars.Int<_$Context>
/**
* The activity text
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$Mutation}.SaveTextActivity |
* | **Path** | `Mutation.SaveTextActivity(text)` |
* | **Nullability** | Optional |
*/
readonly text?: $Scalars.String<_$Context>
/**
* If the activity should be locked. (Mod Only)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Boolean` |
* | **Parent** | {@link $NamedTypes.$Mutation}.SaveTextActivity |
* | **Path** | `Mutation.SaveTextActivity(locked)` |
* | **Nullability** | Optional |
*/
readonly locked?: $Scalars.Boolean<_$Context>
}

/**
* This is the "expanded" version of the `SaveTextActivity` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type SaveMessageActivity<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = SaveMessageActivity.$SelectionSet<_$Context>

export namespace SaveMessageActivity {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.MessageActivity<_$Context> {
/**
* Arguments for `SaveMessageActivity` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* The activity id, required for updating
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Mutation}.SaveMessageActivity |
* | **Path** | `Mutation.SaveMessageActivity(id)` |
* | **Nullability** | Optional |
*/
readonly id?: $Scalars.Int<_$Context>
/**
* The activity message text
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$Mutation}.SaveMessageActivity |
* | **Path** | `Mutation.SaveMessageActivity(message)` |
* | **Nullability** | Optional |
*/
readonly message?: $Scalars.String<_$Context>
/**
* The id of the user the message is being sent to
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Mutation}.SaveMessageActivity |
* | **Path** | `Mutation.SaveMessageActivity(recipientId)` |
* | **Nullability** | Optional |
*/
readonly recipientId?: $Scalars.Int<_$Context>
/**
* If the activity should be private
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Boolean` |
* | **Parent** | {@link $NamedTypes.$Mutation}.SaveMessageActivity |
* | **Path** | `Mutation.SaveMessageActivity(private)` |
* | **Nullability** | Optional |
*/
readonly private?: $Scalars.Boolean<_$Context>
/**
* If the activity should be locked. (Mod Only)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Boolean` |
* | **Parent** | {@link $NamedTypes.$Mutation}.SaveMessageActivity |
* | **Path** | `Mutation.SaveMessageActivity(locked)` |
* | **Nullability** | Optional |
*/
readonly locked?: $Scalars.Boolean<_$Context>
/**
* If the message should be sent from the Moderator account (Mod Only)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Boolean` |
* | **Parent** | {@link $NamedTypes.$Mutation}.SaveMessageActivity |
* | **Path** | `Mutation.SaveMessageActivity(asMod)` |
* | **Nullability** | Optional |
*/
readonly asMod?: $Scalars.Boolean<_$Context>
}

/**
* This is the "expanded" version of the `SaveMessageActivity` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type SaveListActivity<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = SaveListActivity.$SelectionSet<_$Context>

export namespace SaveListActivity {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.ListActivity<_$Context> {
/**
* Arguments for `SaveListActivity` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* The activity's id, required for updating
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Mutation}.SaveListActivity |
* | **Path** | `Mutation.SaveListActivity(id)` |
* | **Nullability** | Optional |
*/
readonly id?: $Scalars.Int<_$Context>
/**
* If the activity should be locked. (Mod Only)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Boolean` |
* | **Parent** | {@link $NamedTypes.$Mutation}.SaveListActivity |
* | **Path** | `Mutation.SaveListActivity(locked)` |
* | **Nullability** | Optional |
*/
readonly locked?: $Scalars.Boolean<_$Context>
}

/**
* This is the "expanded" version of the `SaveListActivity` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type DeleteActivity<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = DeleteActivity.$SelectionSet<_$Context>

export namespace DeleteActivity {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.Deleted<_$Context> {
/**
* Arguments for `DeleteActivity` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* The id of the activity to delete
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Mutation}.DeleteActivity |
* | **Path** | `Mutation.DeleteActivity(id)` |
* | **Nullability** | Optional |
*/
readonly id?: $Scalars.Int<_$Context>
}

/**
* This is the "expanded" version of the `DeleteActivity` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type ToggleActivityPin<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = ToggleActivityPin.$SelectionSet<_$Context>

export namespace ToggleActivityPin {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.ActivityUnion<_$Context> {
/**
* Arguments for `ToggleActivityPin` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* Toggle activity id to be pinned
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Mutation}.ToggleActivityPin |
* | **Path** | `Mutation.ToggleActivityPin(id)` |
* | **Nullability** | Optional |
*/
readonly id?: $Scalars.Int<_$Context>
/**
* If the activity should be pinned or unpinned
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Boolean` |
* | **Parent** | {@link $NamedTypes.$Mutation}.ToggleActivityPin |
* | **Path** | `Mutation.ToggleActivityPin(pinned)` |
* | **Nullability** | Optional |
*/
readonly pinned?: $Scalars.Boolean<_$Context>
}

/**
* This is the "expanded" version of the `ToggleActivityPin` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type ToggleActivitySubscription<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = ToggleActivitySubscription.$SelectionSet<_$Context>

export namespace ToggleActivitySubscription {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.ActivityUnion<_$Context> {
/**
* Arguments for `ToggleActivitySubscription` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* The id of the activity to un/subscribe
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Mutation}.ToggleActivitySubscription |
* | **Path** | `Mutation.ToggleActivitySubscription(activityId)` |
* | **Nullability** | Optional |
*/
readonly activityId?: $Scalars.Int<_$Context>
/**
* Whether to subscribe or unsubscribe from the activity
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Boolean` |
* | **Parent** | {@link $NamedTypes.$Mutation}.ToggleActivitySubscription |
* | **Path** | `Mutation.ToggleActivitySubscription(subscribe)` |
* | **Nullability** | Optional |
*/
readonly subscribe?: $Scalars.Boolean<_$Context>
}

/**
* This is the "expanded" version of the `ToggleActivitySubscription` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type SaveActivityReply<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = SaveActivityReply.$SelectionSet<_$Context>

export namespace SaveActivityReply {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.ActivityReply<_$Context> {
/**
* Arguments for `SaveActivityReply` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* The activity reply id, required for updating
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Mutation}.SaveActivityReply |
* | **Path** | `Mutation.SaveActivityReply(id)` |
* | **Nullability** | Optional |
*/
readonly id?: $Scalars.Int<_$Context>
/**
* The id of the parent activity being replied to
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Mutation}.SaveActivityReply |
* | **Path** | `Mutation.SaveActivityReply(activityId)` |
* | **Nullability** | Optional |
*/
readonly activityId?: $Scalars.Int<_$Context>
/**
* The reply text
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$Mutation}.SaveActivityReply |
* | **Path** | `Mutation.SaveActivityReply(text)` |
* | **Nullability** | Optional |
*/
readonly text?: $Scalars.String<_$Context>
/**
* If the reply should be sent from the Moderator account (Mod Only)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Boolean` |
* | **Parent** | {@link $NamedTypes.$Mutation}.SaveActivityReply |
* | **Path** | `Mutation.SaveActivityReply(asMod)` |
* | **Nullability** | Optional |
*/
readonly asMod?: $Scalars.Boolean<_$Context>
}

/**
* This is the "expanded" version of the `SaveActivityReply` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type DeleteActivityReply<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = DeleteActivityReply.$SelectionSet<_$Context>

export namespace DeleteActivityReply {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.Deleted<_$Context> {
/**
* Arguments for `DeleteActivityReply` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* The id of the reply to delete
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Mutation}.DeleteActivityReply |
* | **Path** | `Mutation.DeleteActivityReply(id)` |
* | **Nullability** | Optional |
*/
readonly id?: $Scalars.Int<_$Context>
}

/**
* This is the "expanded" version of the `DeleteActivityReply` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type ToggleLike<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = ToggleLike.$SelectionSet<_$Context>

export namespace ToggleLike {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.User<_$Context> {
/**
* Arguments for `ToggleLike` field. No arguments are required so you may omit this.
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
* | **Parent** | {@link $NamedTypes.$Mutation}.ToggleLike |
* | **Path** | `Mutation.ToggleLike(id)` |
* | **Nullability** | Optional |
*/
readonly id?: $Scalars.Int<_$Context>
/**
* The type of model to be un/liked
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `LikeableType` |
* | **Parent** | {@link $NamedTypes.$Mutation}.ToggleLike |
* | **Path** | `Mutation.ToggleLike(type)` |
* | **Nullability** | Optional |
*/
readonly $type?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.LikeableType | null | undefined>
}

/**
* This is the "expanded" version of the `ToggleLike` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type ToggleLikeV2<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = ToggleLikeV2.$SelectionSet<_$Context>

export namespace ToggleLikeV2 {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.LikeableUnion<_$Context> {
/**
* Arguments for `ToggleLikeV2` field. No arguments are required so you may omit this.
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
* | **Parent** | {@link $NamedTypes.$Mutation}.ToggleLikeV2 |
* | **Path** | `Mutation.ToggleLikeV2(id)` |
* | **Nullability** | Optional |
*/
readonly id?: $Scalars.Int<_$Context>
/**
* The type of model to be un/liked
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `LikeableType` |
* | **Parent** | {@link $NamedTypes.$Mutation}.ToggleLikeV2 |
* | **Path** | `Mutation.ToggleLikeV2(type)` |
* | **Nullability** | Optional |
*/
readonly $type?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.LikeableType | null | undefined>
}

/**
* This is the "expanded" version of the `ToggleLikeV2` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type ToggleFollow<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = ToggleFollow.$SelectionSet<_$Context>

export namespace ToggleFollow {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.User<_$Context> {
/**
* Arguments for `ToggleFollow` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* The id of the user to un/follow
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Mutation}.ToggleFollow |
* | **Path** | `Mutation.ToggleFollow(userId)` |
* | **Nullability** | Optional |
*/
readonly userId?: $Scalars.Int<_$Context>
}

/**
* This is the "expanded" version of the `ToggleFollow` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type ToggleFavourite<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = ToggleFavourite.$SelectionSet<_$Context>

export namespace ToggleFavourite {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.Favourites<_$Context> {
/**
* Arguments for `ToggleFavourite` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* The id of the anime to un/favourite
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Mutation}.ToggleFavourite |
* | **Path** | `Mutation.ToggleFavourite(animeId)` |
* | **Nullability** | Optional |
*/
readonly animeId?: $Scalars.Int<_$Context>
/**
* The id of the manga to un/favourite
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Mutation}.ToggleFavourite |
* | **Path** | `Mutation.ToggleFavourite(mangaId)` |
* | **Nullability** | Optional |
*/
readonly mangaId?: $Scalars.Int<_$Context>
/**
* The id of the character to un/favourite
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Mutation}.ToggleFavourite |
* | **Path** | `Mutation.ToggleFavourite(characterId)` |
* | **Nullability** | Optional |
*/
readonly characterId?: $Scalars.Int<_$Context>
/**
* The id of the staff to un/favourite
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Mutation}.ToggleFavourite |
* | **Path** | `Mutation.ToggleFavourite(staffId)` |
* | **Nullability** | Optional |
*/
readonly staffId?: $Scalars.Int<_$Context>
/**
* The id of the studio to un/favourite
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Mutation}.ToggleFavourite |
* | **Path** | `Mutation.ToggleFavourite(studioId)` |
* | **Nullability** | Optional |
*/
readonly studioId?: $Scalars.Int<_$Context>
}

/**
* This is the "expanded" version of the `ToggleFavourite` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type UpdateFavouriteOrder<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = UpdateFavouriteOrder.$SelectionSet<_$Context>

export namespace UpdateFavouriteOrder {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.Favourites<_$Context> {
/**
* Arguments for `UpdateFavouriteOrder` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* The id of the anime to un/favourite
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$Mutation}.UpdateFavouriteOrder |
* | **Path** | `Mutation.UpdateFavouriteOrder(animeIds)` |
* | **Nullability** | Optional |
*/
readonly animeIds?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* The id of the manga to un/favourite
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$Mutation}.UpdateFavouriteOrder |
* | **Path** | `Mutation.UpdateFavouriteOrder(mangaIds)` |
* | **Nullability** | Optional |
*/
readonly mangaIds?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* The id of the character to un/favourite
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$Mutation}.UpdateFavouriteOrder |
* | **Path** | `Mutation.UpdateFavouriteOrder(characterIds)` |
* | **Nullability** | Optional |
*/
readonly characterIds?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* The id of the staff to un/favourite
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$Mutation}.UpdateFavouriteOrder |
* | **Path** | `Mutation.UpdateFavouriteOrder(staffIds)` |
* | **Nullability** | Optional |
*/
readonly staffIds?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* The id of the studio to un/favourite
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$Mutation}.UpdateFavouriteOrder |
* | **Path** | `Mutation.UpdateFavouriteOrder(studioIds)` |
* | **Nullability** | Optional |
*/
readonly studioIds?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* List of integers which the anime should be ordered by (Asc)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$Mutation}.UpdateFavouriteOrder |
* | **Path** | `Mutation.UpdateFavouriteOrder(animeOrder)` |
* | **Nullability** | Optional |
*/
readonly animeOrder?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* List of integers which the manga should be ordered by (Asc)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$Mutation}.UpdateFavouriteOrder |
* | **Path** | `Mutation.UpdateFavouriteOrder(mangaOrder)` |
* | **Nullability** | Optional |
*/
readonly mangaOrder?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* List of integers which the character should be ordered by (Asc)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$Mutation}.UpdateFavouriteOrder |
* | **Path** | `Mutation.UpdateFavouriteOrder(characterOrder)` |
* | **Nullability** | Optional |
*/
readonly characterOrder?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* List of integers which the staff should be ordered by (Asc)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$Mutation}.UpdateFavouriteOrder |
* | **Path** | `Mutation.UpdateFavouriteOrder(staffOrder)` |
* | **Nullability** | Optional |
*/
readonly staffOrder?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* List of integers which the studio should be ordered by (Asc)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$Mutation}.UpdateFavouriteOrder |
* | **Path** | `Mutation.UpdateFavouriteOrder(studioOrder)` |
* | **Nullability** | Optional |
*/
readonly studioOrder?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
}

/**
* This is the "expanded" version of the `UpdateFavouriteOrder` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type SaveReview<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = SaveReview.$SelectionSet<_$Context>

export namespace SaveReview {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.Review<_$Context> {
/**
* Arguments for `SaveReview` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* The review id, required for updating
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Mutation}.SaveReview |
* | **Path** | `Mutation.SaveReview(id)` |
* | **Nullability** | Optional |
*/
readonly id?: $Scalars.Int<_$Context>
/**
* The id of the media the review is of
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Mutation}.SaveReview |
* | **Path** | `Mutation.SaveReview(mediaId)` |
* | **Nullability** | Optional |
*/
readonly mediaId?: $Scalars.Int<_$Context>
/**
* The main review text. Min:2200 characters
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$Mutation}.SaveReview |
* | **Path** | `Mutation.SaveReview(body)` |
* | **Nullability** | Optional |
*/
readonly body?: $Scalars.String<_$Context>
/**
* A short summary/preview of the review. Min:20, Max:120 characters
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$Mutation}.SaveReview |
* | **Path** | `Mutation.SaveReview(summary)` |
* | **Nullability** | Optional |
*/
readonly summary?: $Scalars.String<_$Context>
/**
* A short summary/preview of the review. Min:20, Max:120 characters
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Mutation}.SaveReview |
* | **Path** | `Mutation.SaveReview(score)` |
* | **Nullability** | Optional |
*/
readonly score?: $Scalars.Int<_$Context>
/**
* If the review should only be visible to its creator
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Boolean` |
* | **Parent** | {@link $NamedTypes.$Mutation}.SaveReview |
* | **Path** | `Mutation.SaveReview(private)` |
* | **Nullability** | Optional |
*/
readonly private?: $Scalars.Boolean<_$Context>
}

/**
* This is the "expanded" version of the `SaveReview` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type DeleteReview<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = DeleteReview.$SelectionSet<_$Context>

export namespace DeleteReview {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.Deleted<_$Context> {
/**
* Arguments for `DeleteReview` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* The id of the review to delete
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Mutation}.DeleteReview |
* | **Path** | `Mutation.DeleteReview(id)` |
* | **Nullability** | Optional |
*/
readonly id?: $Scalars.Int<_$Context>
}

/**
* This is the "expanded" version of the `DeleteReview` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type RateReview<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = RateReview.$SelectionSet<_$Context>

export namespace RateReview {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.Review<_$Context> {
/**
* Arguments for `RateReview` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* The id of the review to rate
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Mutation}.RateReview |
* | **Path** | `Mutation.RateReview(reviewId)` |
* | **Nullability** | Optional |
*/
readonly reviewId?: $Scalars.Int<_$Context>
/**
* The rating to apply to the review
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `ReviewRating` |
* | **Parent** | {@link $NamedTypes.$Mutation}.RateReview |
* | **Path** | `Mutation.RateReview(rating)` |
* | **Nullability** | Optional |
*/
readonly $rating?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.ReviewRating | null | undefined>
}

/**
* This is the "expanded" version of the `RateReview` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type SaveRecommendation<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = SaveRecommendation.$SelectionSet<_$Context>

export namespace SaveRecommendation {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.Recommendation<_$Context> {
/**
* Arguments for `SaveRecommendation` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* The id of the base media
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Mutation}.SaveRecommendation |
* | **Path** | `Mutation.SaveRecommendation(mediaId)` |
* | **Nullability** | Optional |
*/
readonly mediaId?: $Scalars.Int<_$Context>
/**
* The id of the media to recommend
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Mutation}.SaveRecommendation |
* | **Path** | `Mutation.SaveRecommendation(mediaRecommendationId)` |
* | **Nullability** | Optional |
*/
readonly mediaRecommendationId?: $Scalars.Int<_$Context>
/**
* The rating to give the recommendation
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `RecommendationRating` |
* | **Parent** | {@link $NamedTypes.$Mutation}.SaveRecommendation |
* | **Path** | `Mutation.SaveRecommendation(rating)` |
* | **Nullability** | Optional |
*/
readonly $rating?: GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.RecommendationRating | null | undefined>
}

/**
* This is the "expanded" version of the `SaveRecommendation` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type SaveThread<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = SaveThread.$SelectionSet<_$Context>

export namespace SaveThread {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.Thread<_$Context> {
/**
* Arguments for `SaveThread` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* The thread id, required for updating
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Mutation}.SaveThread |
* | **Path** | `Mutation.SaveThread(id)` |
* | **Nullability** | Optional |
*/
readonly id?: $Scalars.Int<_$Context>
/**
* The title of the thread
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$Mutation}.SaveThread |
* | **Path** | `Mutation.SaveThread(title)` |
* | **Nullability** | Optional |
*/
readonly title?: $Scalars.String<_$Context>
/**
* The main text body of the thread
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$Mutation}.SaveThread |
* | **Path** | `Mutation.SaveThread(body)` |
* | **Nullability** | Optional |
*/
readonly body?: $Scalars.String<_$Context>
/**
* Forum categories the thread should be within
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$Mutation}.SaveThread |
* | **Path** | `Mutation.SaveThread(categories)` |
* | **Nullability** | Optional |
*/
readonly categories?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* Media related to the contents of the thread
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[Int]` |
* | **Parent** | {@link $NamedTypes.$Mutation}.SaveThread |
* | **Path** | `Mutation.SaveThread(mediaCategories)` |
* | **Nullability** | Optional |
*/
readonly mediaCategories?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.Int<_$Context>> | null | undefined>
/**
* If the thread should be stickied. (Mod Only)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Boolean` |
* | **Parent** | {@link $NamedTypes.$Mutation}.SaveThread |
* | **Path** | `Mutation.SaveThread(sticky)` |
* | **Nullability** | Optional |
*/
readonly sticky?: $Scalars.Boolean<_$Context>
/**
* If the thread should be locked. (Mod Only)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Boolean` |
* | **Parent** | {@link $NamedTypes.$Mutation}.SaveThread |
* | **Path** | `Mutation.SaveThread(locked)` |
* | **Nullability** | Optional |
*/
readonly locked?: $Scalars.Boolean<_$Context>
}

/**
* This is the "expanded" version of the `SaveThread` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type DeleteThread<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = DeleteThread.$SelectionSet<_$Context>

export namespace DeleteThread {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.Deleted<_$Context> {
/**
* Arguments for `DeleteThread` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* The id of the thread to delete
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Mutation}.DeleteThread |
* | **Path** | `Mutation.DeleteThread(id)` |
* | **Nullability** | Optional |
*/
readonly id?: $Scalars.Int<_$Context>
}

/**
* This is the "expanded" version of the `DeleteThread` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type ToggleThreadSubscription<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = ToggleThreadSubscription.$SelectionSet<_$Context>

export namespace ToggleThreadSubscription {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.Thread<_$Context> {
/**
* Arguments for `ToggleThreadSubscription` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* The id of the forum thread to un/subscribe
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Mutation}.ToggleThreadSubscription |
* | **Path** | `Mutation.ToggleThreadSubscription(threadId)` |
* | **Nullability** | Optional |
*/
readonly threadId?: $Scalars.Int<_$Context>
/**
* Whether to subscribe or unsubscribe from the forum thread
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Boolean` |
* | **Parent** | {@link $NamedTypes.$Mutation}.ToggleThreadSubscription |
* | **Path** | `Mutation.ToggleThreadSubscription(subscribe)` |
* | **Nullability** | Optional |
*/
readonly subscribe?: $Scalars.Boolean<_$Context>
}

/**
* This is the "expanded" version of the `ToggleThreadSubscription` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type SaveThreadComment<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = SaveThreadComment.$SelectionSet<_$Context>

export namespace SaveThreadComment {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.ThreadComment<_$Context> {
/**
* Arguments for `SaveThreadComment` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* The comment id, required for updating
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Mutation}.SaveThreadComment |
* | **Path** | `Mutation.SaveThreadComment(id)` |
* | **Nullability** | Optional |
*/
readonly id?: $Scalars.Int<_$Context>
/**
* The id of thread the comment belongs to
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Mutation}.SaveThreadComment |
* | **Path** | `Mutation.SaveThreadComment(threadId)` |
* | **Nullability** | Optional |
*/
readonly threadId?: $Scalars.Int<_$Context>
/**
* The id of thread comment to reply to
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Mutation}.SaveThreadComment |
* | **Path** | `Mutation.SaveThreadComment(parentCommentId)` |
* | **Nullability** | Optional |
*/
readonly parentCommentId?: $Scalars.Int<_$Context>
/**
* The comment markdown text
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$Mutation}.SaveThreadComment |
* | **Path** | `Mutation.SaveThreadComment(comment)` |
* | **Nullability** | Optional |
*/
readonly comment?: $Scalars.String<_$Context>
/**
* If the comment tree should be locked. (Mod Only)
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Boolean` |
* | **Parent** | {@link $NamedTypes.$Mutation}.SaveThreadComment |
* | **Path** | `Mutation.SaveThreadComment(locked)` |
* | **Nullability** | Optional |
*/
readonly locked?: $Scalars.Boolean<_$Context>
}

/**
* This is the "expanded" version of the `SaveThreadComment` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type DeleteThreadComment<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = DeleteThreadComment.$SelectionSet<_$Context>

export namespace DeleteThreadComment {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base, $Named.Deleted<_$Context> {
/**
* Arguments for `DeleteThreadComment` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* The id of the thread comment to delete
*
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `Int` |
* | **Parent** | {@link $NamedTypes.$Mutation}.DeleteThreadComment |
* | **Path** | `Mutation.DeleteThreadComment(id)` |
* | **Nullability** | Optional |
*/
readonly id?: $Scalars.Int<_$Context>
}

/**
* This is the "expanded" version of the `DeleteThreadComment` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<$SelectionSet<_$Context>>
}


export type UpdateAniChartSettings<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
| UpdateAniChartSettings.$SelectionSet<_$Context>

export namespace UpdateAniChartSettings {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base {
/**
* Arguments for `UpdateAniChartSettings` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$Mutation}.UpdateAniChartSettings |
* | **Path** | `Mutation.UpdateAniChartSettings(titleLanguage)` |
* | **Nullability** | Optional |
*/
readonly titleLanguage?: $Scalars.String<_$Context>
/**
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$Mutation}.UpdateAniChartSettings |
* | **Path** | `Mutation.UpdateAniChartSettings(outgoingLinkProvider)` |
* | **Nullability** | Optional |
*/
readonly outgoingLinkProvider?: $Scalars.String<_$Context>
/**
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$Mutation}.UpdateAniChartSettings |
* | **Path** | `Mutation.UpdateAniChartSettings(theme)` |
* | **Nullability** | Optional |
*/
readonly theme?: $Scalars.String<_$Context>
/**
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `String` |
* | **Parent** | {@link $NamedTypes.$Mutation}.UpdateAniChartSettings |
* | **Path** | `Mutation.UpdateAniChartSettings(sort)` |
* | **Nullability** | Optional |
*/
readonly sort?: $Scalars.String<_$Context>
}

/**
* This is the "expanded" version of the `UpdateAniChartSettings` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
| $SelectionSet<_$Context>>
}


export type UpdateAniChartHighlights<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
| UpdateAniChartHighlights.$SelectionSet<_$Context>

export namespace UpdateAniChartHighlights {
export interface $SelectionSet<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.Base {
/**
* Arguments for `UpdateAniChartHighlights` field. No arguments are required so you may omit this.
*/
readonly $?: $Arguments<_$Context>
}

export interface $Arguments<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* # Info
*
* | | |
* | - | - |
* | **GraphQL Type** | `[AniChartHighlightInput]` |
* | **Parent** | {@link $NamedTypes.$Mutation}.UpdateAniChartHighlights |
* | **Path** | `Mutation.UpdateAniChartHighlights(highlights)` |
* | **Nullability** | Optional |
*/
readonly highlights?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<GraphqlKit.Document.Object.Var.MaybeSchemaful<$Named.AniChartHighlightInput<_$Context> | null | undefined>> | null | undefined>
}

/**
* This is the "expanded" version of the `UpdateAniChartHighlights` type. It is identical except for the fact
* that IDEs will display its contents (a union type) directly, rather than the name of this type.
* In some cases, this is a preferable DX, making the types easier to read for users.
*/
export type $Expanded<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> = $$Utilities.Simplify<GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort
| GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
| $SelectionSet<_$Context>>
}

