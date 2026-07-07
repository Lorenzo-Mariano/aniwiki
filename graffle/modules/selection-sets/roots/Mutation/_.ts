import type * as $$Utilities from 'graffle/utilities-for-generated'
import type { GraphqlKit } from 'graffle/utilities-for-generated'
import type * as $Fields from './fields.js'
import type { $DefaultSelectionContext } from '../../_context.js'
import type { $FragmentInline } from './fragment.js'

export type * as Mutation from './__.js'

/**
* GraphQL root {@link https://graphql.org/learn/schema/#the-mutation-and-mutation-types | Mutation} type.
*/
export interface Mutation<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.RootObjectLike {

      /**
* ```graphql
* UpdateUser(about: String, titleLanguage: UserTitleLanguage, displayAdultContent: Boolean, airingNotifications: Boolean, scoreFormat: ScoreFormat, rowOrder: String, profileColor: String, donatorBadge: String, notificationOptions: [NotificationOptionInput], timezone: String, activityMergeTime: Int, animeListOptions: MediaListOptionsInput, mangaListOptions: MediaListOptionsInput, staffNameLanguage: UserStaffNameLanguage, restrictMessagesToFollowing: Boolean, disabledListActivity: [ListActivityOptionInput]): User
*
* type User {
* id: Int!
* name: String!
* about(asHtml: Boolean): String
* avatar: UserAvatar
* bannerImage: String
* isFollowing: Boolean
* isFollower: Boolean
* isBlocked: Boolean
* bans: Json
* options: UserOptions
* mediaListOptions: MediaListOptions
* favourites(page: Int): Favourites
* statistics: UserStatisticTypes
* unreadNotificationCount: Int
* siteUrl: String
* donatorTier: Int
* donatorBadge: String
* moderatorRoles: [ModRole]
* createdAt: Int
* updatedAt: Int
* stats: UserStats @deprecated(reason: "Deprecated. Replaced with statistics field.")
* moderatorStatus: String @deprecated(reason: "Deprecated. Replaced with moderatorRoles field.")
* previousNames: [UserPreviousName]
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$User} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Mutation} |
* | **Path** | `Mutation.UpdateUser` |
* | **Nullability** | Optional |
* | **Arguments** | 16 |
*/
UpdateUser?: $Fields.UpdateUser.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.UpdateUser<_$Context>>
/**
* Create or update a media list entry
*
* ```graphql
* SaveMediaListEntry(id: Int, mediaId: Int, status: MediaListStatus, score: Float, scoreRaw: Int, progress: Int, progressVolumes: Int, repeat: Int, priority: Int, private: Boolean, notes: String, hiddenFromStatusLists: Boolean, customLists: [String], advancedScores: [Float], startedAt: FuzzyDateInput, completedAt: FuzzyDateInput): MediaList
*
* type MediaList {
* id: Int!
* userId: Int!
* mediaId: Int!
* status: MediaListStatus
* score(format: ScoreFormat): Float
* progress: Int
* progressVolumes: Int
* repeat: Int
* priority: Int
* private: Boolean
* notes: String
* hiddenFromStatusLists: Boolean
* customLists(asArray: Boolean): Json
* advancedScores: Json
* startedAt: FuzzyDate
* completedAt: FuzzyDate
* updatedAt: Int
* createdAt: Int
* media: Media
* user: User
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$MediaList} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Mutation} |
* | **Path** | `Mutation.SaveMediaListEntry` |
* | **Nullability** | Optional |
* | **Arguments** | 16 |
*/
SaveMediaListEntry?: $Fields.SaveMediaListEntry.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.SaveMediaListEntry<_$Context>>
/**
* Update multiple media list entries to the same values
*
* ```graphql
* UpdateMediaListEntries(status: MediaListStatus, score: Float, scoreRaw: Int, progress: Int, progressVolumes: Int, repeat: Int, priority: Int, private: Boolean, notes: String, hiddenFromStatusLists: Boolean, advancedScores: [Float], startedAt: FuzzyDateInput, completedAt: FuzzyDateInput, ids: [Int]): [MediaList]
*
* type MediaList {
* id: Int!
* userId: Int!
* mediaId: Int!
* status: MediaListStatus
* score(format: ScoreFormat): Float
* progress: Int
* progressVolumes: Int
* repeat: Int
* priority: Int
* private: Boolean
* notes: String
* hiddenFromStatusLists: Boolean
* customLists(asArray: Boolean): Json
* advancedScores: Json
* startedAt: FuzzyDate
* completedAt: FuzzyDate
* updatedAt: Int
* createdAt: Int
* media: Media
* user: User
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$MediaList}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Mutation} |
* | **Path** | `Mutation.UpdateMediaListEntries` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 14 |
*/
UpdateMediaListEntries?: $Fields.UpdateMediaListEntries.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.UpdateMediaListEntries<_$Context>>
/**
* Delete a media list entry
*
* ```graphql
* DeleteMediaListEntry(id: Int): Deleted
*
* type Deleted {
* deleted: Boolean
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Deleted} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Mutation} |
* | **Path** | `Mutation.DeleteMediaListEntry` |
* | **Nullability** | Optional |
* | **Arguments** | 1 |
*/
DeleteMediaListEntry?: $Fields.DeleteMediaListEntry.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.DeleteMediaListEntry<_$Context>>
/**
* Delete a custom list and remove the list entries from it
*
* ```graphql
* DeleteCustomList(customList: String, type: MediaType): Deleted
*
* type Deleted {
* deleted: Boolean
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Deleted} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Mutation} |
* | **Path** | `Mutation.DeleteCustomList` |
* | **Nullability** | Optional |
* | **Arguments** | 2 |
*/
DeleteCustomList?: $Fields.DeleteCustomList.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.DeleteCustomList<_$Context>>
/**
* Create or update text activity for the currently authenticated user
*
* ```graphql
* SaveTextActivity(id: Int, text: String, locked: Boolean): TextActivity
*
* type TextActivity {
* id: Int!
* userId: Int
* type: ActivityType
* replyCount: Int!
* text(asHtml: Boolean): String
* siteUrl: String
* isLocked: Boolean
* isSubscribed: Boolean
* likeCount: Int!
* isLiked: Boolean
* isPinned: Boolean
* createdAt: Int!
* user: User
* replies: [ActivityReply]
* likes: [User]
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$TextActivity} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Mutation} |
* | **Path** | `Mutation.SaveTextActivity` |
* | **Nullability** | Optional |
* | **Arguments** | 3 |
*/
SaveTextActivity?: $Fields.SaveTextActivity.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.SaveTextActivity<_$Context>>
/**
* Create or update message activity for the currently authenticated user
*
* ```graphql
* SaveMessageActivity(id: Int, message: String, recipientId: Int, private: Boolean, locked: Boolean, asMod: Boolean): MessageActivity
*
* type MessageActivity {
* id: Int!
* recipientId: Int
* messengerId: Int
* type: ActivityType
* replyCount: Int!
* message(asHtml: Boolean): String
* isLocked: Boolean
* isSubscribed: Boolean
* likeCount: Int!
* isLiked: Boolean
* isPinned: Boolean
* isPrivate: Boolean
* siteUrl: String
* createdAt: Int!
* recipient: User
* messenger: User
* replies: [ActivityReply]
* likes: [User]
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$MessageActivity} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Mutation} |
* | **Path** | `Mutation.SaveMessageActivity` |
* | **Nullability** | Optional |
* | **Arguments** | 6 |
*/
SaveMessageActivity?: $Fields.SaveMessageActivity.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.SaveMessageActivity<_$Context>>
/**
* Update list activity (Mod Only)
*
* ```graphql
* SaveListActivity(id: Int, locked: Boolean): ListActivity
*
* type ListActivity {
* id: Int!
* userId: Int
* type: ActivityType
* replyCount: Int!
* status: String
* progress: String
* isLocked: Boolean
* isSubscribed: Boolean
* likeCount: Int!
* isLiked: Boolean
* isPinned: Boolean
* siteUrl: String
* createdAt: Int!
* user: User
* media: Media
* replies: [ActivityReply]
* likes: [User]
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$ListActivity} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Mutation} |
* | **Path** | `Mutation.SaveListActivity` |
* | **Nullability** | Optional |
* | **Arguments** | 2 |
*/
SaveListActivity?: $Fields.SaveListActivity.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.SaveListActivity<_$Context>>
/**
* Delete an activity item of the authenticated users
*
* ```graphql
* DeleteActivity(id: Int): Deleted
*
* type Deleted {
* deleted: Boolean
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Deleted} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Mutation} |
* | **Path** | `Mutation.DeleteActivity` |
* | **Nullability** | Optional |
* | **Arguments** | 1 |
*/
DeleteActivity?: $Fields.DeleteActivity.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.DeleteActivity<_$Context>>
/**
* Toggle activity to be pinned to the top of the user's activity feed
*
* ```graphql
* ToggleActivityPin(id: Int, pinned: Boolean): ActivityUnion
*
* union ActivityUnion = TextActivity | ListActivity | MessageActivity
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$ActivityUnion} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
* | **Parent** | {@link $NamedTypes.$Mutation} |
* | **Path** | `Mutation.ToggleActivityPin` |
* | **Nullability** | Optional |
* | **Arguments** | 2 |
*/
ToggleActivityPin?: $Fields.ToggleActivityPin.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.ToggleActivityPin<_$Context>>
/**
* Toggle the subscription of an activity item
*
* ```graphql
* ToggleActivitySubscription(activityId: Int, subscribe: Boolean): ActivityUnion
*
* union ActivityUnion = TextActivity | ListActivity | MessageActivity
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$ActivityUnion} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
* | **Parent** | {@link $NamedTypes.$Mutation} |
* | **Path** | `Mutation.ToggleActivitySubscription` |
* | **Nullability** | Optional |
* | **Arguments** | 2 |
*/
ToggleActivitySubscription?: $Fields.ToggleActivitySubscription.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.ToggleActivitySubscription<_$Context>>
/**
* Create or update an activity reply
*
* ```graphql
* SaveActivityReply(id: Int, activityId: Int, text: String, asMod: Boolean): ActivityReply
*
* type ActivityReply {
* id: Int!
* userId: Int
* activityId: Int
* text(asHtml: Boolean): String
* likeCount: Int!
* isLiked: Boolean
* createdAt: Int!
* user: User
* likes: [User]
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$ActivityReply} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Mutation} |
* | **Path** | `Mutation.SaveActivityReply` |
* | **Nullability** | Optional |
* | **Arguments** | 4 |
*/
SaveActivityReply?: $Fields.SaveActivityReply.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.SaveActivityReply<_$Context>>
/**
* Delete an activity reply of the authenticated users
*
* ```graphql
* DeleteActivityReply(id: Int): Deleted
*
* type Deleted {
* deleted: Boolean
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Deleted} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Mutation} |
* | **Path** | `Mutation.DeleteActivityReply` |
* | **Nullability** | Optional |
* | **Arguments** | 1 |
*/
DeleteActivityReply?: $Fields.DeleteActivityReply.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.DeleteActivityReply<_$Context>>
/**
* Add or remove a like from a likeable type.
* Returns all the users who liked the same model
*
* ```graphql
* ToggleLike(id: Int, type: LikeableType): [User]
*
* type User {
* id: Int!
* name: String!
* about(asHtml: Boolean): String
* avatar: UserAvatar
* bannerImage: String
* isFollowing: Boolean
* isFollower: Boolean
* isBlocked: Boolean
* bans: Json
* options: UserOptions
* mediaListOptions: MediaListOptions
* favourites(page: Int): Favourites
* statistics: UserStatisticTypes
* unreadNotificationCount: Int
* siteUrl: String
* donatorTier: Int
* donatorBadge: String
* moderatorRoles: [ModRole]
* createdAt: Int
* updatedAt: Int
* stats: UserStats @deprecated(reason: "Deprecated. Replaced with statistics field.")
* moderatorStatus: String @deprecated(reason: "Deprecated. Replaced with moderatorRoles field.")
* previousNames: [UserPreviousName]
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$User}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Mutation} |
* | **Path** | `Mutation.ToggleLike` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 2 |
*/
ToggleLike?: $Fields.ToggleLike.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.ToggleLike<_$Context>>
/**
* Add or remove a like from a likeable type.
*
* ```graphql
* ToggleLikeV2(id: Int, type: LikeableType): LikeableUnion
*
* union LikeableUnion = ListActivity | TextActivity | MessageActivity | ActivityReply | Thread | ThreadComment
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$LikeableUnion} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
* | **Parent** | {@link $NamedTypes.$Mutation} |
* | **Path** | `Mutation.ToggleLikeV2` |
* | **Nullability** | Optional |
* | **Arguments** | 2 |
*/
ToggleLikeV2?: $Fields.ToggleLikeV2.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.ToggleLikeV2<_$Context>>
/**
* Toggle the un/following of a user
*
* ```graphql
* ToggleFollow(userId: Int): User
*
* type User {
* id: Int!
* name: String!
* about(asHtml: Boolean): String
* avatar: UserAvatar
* bannerImage: String
* isFollowing: Boolean
* isFollower: Boolean
* isBlocked: Boolean
* bans: Json
* options: UserOptions
* mediaListOptions: MediaListOptions
* favourites(page: Int): Favourites
* statistics: UserStatisticTypes
* unreadNotificationCount: Int
* siteUrl: String
* donatorTier: Int
* donatorBadge: String
* moderatorRoles: [ModRole]
* createdAt: Int
* updatedAt: Int
* stats: UserStats @deprecated(reason: "Deprecated. Replaced with statistics field.")
* moderatorStatus: String @deprecated(reason: "Deprecated. Replaced with moderatorRoles field.")
* previousNames: [UserPreviousName]
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$User} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Mutation} |
* | **Path** | `Mutation.ToggleFollow` |
* | **Nullability** | Optional |
* | **Arguments** | 1 |
*/
ToggleFollow?: $Fields.ToggleFollow.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.ToggleFollow<_$Context>>
/**
* Favourite or unfavourite an anime, manga, character, staff member, or studio
*
* ```graphql
* ToggleFavourite(animeId: Int, mangaId: Int, characterId: Int, staffId: Int, studioId: Int): Favourites
*
* type Favourites {
* anime(page: Int, perPage: Int): MediaConnection
* manga(page: Int, perPage: Int): MediaConnection
* characters(page: Int, perPage: Int): CharacterConnection
* staff(page: Int, perPage: Int): StaffConnection
* studios(page: Int, perPage: Int): StudioConnection
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Favourites} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Mutation} |
* | **Path** | `Mutation.ToggleFavourite` |
* | **Nullability** | Optional |
* | **Arguments** | 5 |
*/
ToggleFavourite?: $Fields.ToggleFavourite.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.ToggleFavourite<_$Context>>
/**
* Update the order favourites are displayed in
*
* ```graphql
* UpdateFavouriteOrder(animeIds: [Int], mangaIds: [Int], characterIds: [Int], staffIds: [Int], studioIds: [Int], animeOrder: [Int], mangaOrder: [Int], characterOrder: [Int], staffOrder: [Int], studioOrder: [Int]): Favourites
*
* type Favourites {
* anime(page: Int, perPage: Int): MediaConnection
* manga(page: Int, perPage: Int): MediaConnection
* characters(page: Int, perPage: Int): CharacterConnection
* staff(page: Int, perPage: Int): StaffConnection
* studios(page: Int, perPage: Int): StudioConnection
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Favourites} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Mutation} |
* | **Path** | `Mutation.UpdateFavouriteOrder` |
* | **Nullability** | Optional |
* | **Arguments** | 10 |
*/
UpdateFavouriteOrder?: $Fields.UpdateFavouriteOrder.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.UpdateFavouriteOrder<_$Context>>
/**
* Create or update a review
*
* ```graphql
* SaveReview(id: Int, mediaId: Int, body: String, summary: String, score: Int, private: Boolean): Review
*
* type Review {
* id: Int!
* userId: Int!
* mediaId: Int!
* mediaType: MediaType
* summary: String
* body(asHtml: Boolean): String
* rating: Int
* ratingAmount: Int
* userRating: ReviewRating
* score: Int
* private: Boolean
* siteUrl: String
* createdAt: Int!
* updatedAt: Int!
* user: User
* media: Media
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Review} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Mutation} |
* | **Path** | `Mutation.SaveReview` |
* | **Nullability** | Optional |
* | **Arguments** | 6 |
*/
SaveReview?: $Fields.SaveReview.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.SaveReview<_$Context>>
/**
* Delete a review
*
* ```graphql
* DeleteReview(id: Int): Deleted
*
* type Deleted {
* deleted: Boolean
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Deleted} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Mutation} |
* | **Path** | `Mutation.DeleteReview` |
* | **Nullability** | Optional |
* | **Arguments** | 1 |
*/
DeleteReview?: $Fields.DeleteReview.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.DeleteReview<_$Context>>
/**
* Rate a review
*
* ```graphql
* RateReview(reviewId: Int, rating: ReviewRating): Review
*
* type Review {
* id: Int!
* userId: Int!
* mediaId: Int!
* mediaType: MediaType
* summary: String
* body(asHtml: Boolean): String
* rating: Int
* ratingAmount: Int
* userRating: ReviewRating
* score: Int
* private: Boolean
* siteUrl: String
* createdAt: Int!
* updatedAt: Int!
* user: User
* media: Media
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Review} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Mutation} |
* | **Path** | `Mutation.RateReview` |
* | **Nullability** | Optional |
* | **Arguments** | 2 |
*/
RateReview?: $Fields.RateReview.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.RateReview<_$Context>>
/**
* Recommendation a media
*
* ```graphql
* SaveRecommendation(mediaId: Int, mediaRecommendationId: Int, rating: RecommendationRating): Recommendation
*
* type Recommendation {
* id: Int!
* rating: Int
* userRating: RecommendationRating
* media: Media
* mediaRecommendation: Media
* user: User
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Recommendation} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Mutation} |
* | **Path** | `Mutation.SaveRecommendation` |
* | **Nullability** | Optional |
* | **Arguments** | 3 |
*/
SaveRecommendation?: $Fields.SaveRecommendation.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.SaveRecommendation<_$Context>>
/**
* Create or update a forum thread
*
* ```graphql
* SaveThread(id: Int, title: String, body: String, categories: [Int], mediaCategories: [Int], sticky: Boolean, locked: Boolean): Thread
*
* type Thread {
* id: Int!
* title: String
* body(asHtml: Boolean): String
* userId: Int!
* replyUserId: Int
* replyCommentId: Int
* replyCount: Int
* viewCount: Int
* isLocked: Boolean
* isSticky: Boolean
* isSubscribed: Boolean
* likeCount: Int!
* isLiked: Boolean
* repliedAt: Int
* createdAt: Int!
* updatedAt: Int!
* user: User
* replyUser: User
* likes: [User]
* siteUrl: String
* categories: [ThreadCategory]
* mediaCategories: [Media]
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Thread} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Mutation} |
* | **Path** | `Mutation.SaveThread` |
* | **Nullability** | Optional |
* | **Arguments** | 7 |
*/
SaveThread?: $Fields.SaveThread.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.SaveThread<_$Context>>
/**
* Delete a thread
*
* ```graphql
* DeleteThread(id: Int): Deleted
*
* type Deleted {
* deleted: Boolean
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Deleted} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Mutation} |
* | **Path** | `Mutation.DeleteThread` |
* | **Nullability** | Optional |
* | **Arguments** | 1 |
*/
DeleteThread?: $Fields.DeleteThread.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.DeleteThread<_$Context>>
/**
* Toggle the subscription of a forum thread
*
* ```graphql
* ToggleThreadSubscription(threadId: Int, subscribe: Boolean): Thread
*
* type Thread {
* id: Int!
* title: String
* body(asHtml: Boolean): String
* userId: Int!
* replyUserId: Int
* replyCommentId: Int
* replyCount: Int
* viewCount: Int
* isLocked: Boolean
* isSticky: Boolean
* isSubscribed: Boolean
* likeCount: Int!
* isLiked: Boolean
* repliedAt: Int
* createdAt: Int!
* updatedAt: Int!
* user: User
* replyUser: User
* likes: [User]
* siteUrl: String
* categories: [ThreadCategory]
* mediaCategories: [Media]
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Thread} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Mutation} |
* | **Path** | `Mutation.ToggleThreadSubscription` |
* | **Nullability** | Optional |
* | **Arguments** | 2 |
*/
ToggleThreadSubscription?: $Fields.ToggleThreadSubscription.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.ToggleThreadSubscription<_$Context>>
/**
* Create or update a thread comment
*
* ```graphql
* SaveThreadComment(id: Int, threadId: Int, parentCommentId: Int, comment: String, locked: Boolean): ThreadComment
*
* type ThreadComment {
* id: Int!
* userId: Int
* threadId: Int
* comment(asHtml: Boolean): String
* likeCount: Int!
* isLiked: Boolean
* siteUrl: String
* createdAt: Int!
* updatedAt: Int!
* thread: Thread
* user: User
* likes: [User]
* childComments: Json
* isLocked: Boolean
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$ThreadComment} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Mutation} |
* | **Path** | `Mutation.SaveThreadComment` |
* | **Nullability** | Optional |
* | **Arguments** | 5 |
*/
SaveThreadComment?: $Fields.SaveThreadComment.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.SaveThreadComment<_$Context>>
/**
* Delete a thread comment
*
* ```graphql
* DeleteThreadComment(id: Int): Deleted
*
* type Deleted {
* deleted: Boolean
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Deleted} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$Mutation} |
* | **Path** | `Mutation.DeleteThreadComment` |
* | **Nullability** | Optional |
* | **Arguments** | 1 |
*/
DeleteThreadComment?: $Fields.DeleteThreadComment.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.DeleteThreadComment<_$Context>>
/**
* ```graphql
* UpdateAniChartSettings(titleLanguage: String, outgoingLinkProvider: String, theme: String, sort: String): Json
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
* | **Parent** | {@link $NamedTypes.$Mutation} |
* | **Path** | `Mutation.UpdateAniChartSettings` |
* | **Nullability** | Optional |
* | **Arguments** | 4 |
*/
UpdateAniChartSettings?: $Fields.UpdateAniChartSettings.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.UpdateAniChartSettings<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* ```graphql
* UpdateAniChartHighlights(highlights: [AniChartHighlightInput]): Json
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
* | **Parent** | {@link $NamedTypes.$Mutation} |
* | **Path** | `Mutation.UpdateAniChartHighlights` |
* | **Nullability** | Optional |
* | **Arguments** | 1 |
*/
UpdateAniChartHighlights?: $Fields.UpdateAniChartHighlights.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.UpdateAniChartHighlights<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
      
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