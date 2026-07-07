import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"Mutation"`
*
* {@link https://graphql.org/learn/queries/#meta-fields | GraphQL __typename documentation}
*/
export interface __typename {
kind: "OutputField",
name: "__typename",
arguments: {},
inlineType: [1],
namedType: {
kind: "__typename",
value: "Mutation"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Mutation}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.User} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.UpdateUser` |
* | **Nullability** | Optional |
* | **Arguments** | 16 |
*/
export interface UpdateUser {
kind: "OutputField",
name: "UpdateUser",
arguments: {
/**
* User's about/bio text
*/
about: {
kind: "InputField",
name: "about",
inlineType: [0, ],
namedType: $Schema.String
},
/**
* User's title language
*/
titleLanguage: {
kind: "InputField",
name: "titleLanguage",
inlineType: [0, ],
namedType: $Schema.UserTitleLanguage
},
/**
* If the user should see media marked as adult-only
*/
displayAdultContent: {
kind: "InputField",
name: "displayAdultContent",
inlineType: [0, ],
namedType: $Schema.Boolean
},
/**
* If the user should get notifications when a show they are watching aires
*/
airingNotifications: {
kind: "InputField",
name: "airingNotifications",
inlineType: [0, ],
namedType: $Schema.Boolean
},
/**
* The user's list scoring system
*/
scoreFormat: {
kind: "InputField",
name: "scoreFormat",
inlineType: [0, ],
namedType: $Schema.ScoreFormat
},
/**
* The user's default list order
*/
rowOrder: {
kind: "InputField",
name: "rowOrder",
inlineType: [0, ],
namedType: $Schema.String
},
/**
* Profile highlight color
*/
profileColor: {
kind: "InputField",
name: "profileColor",
inlineType: [0, ],
namedType: $Schema.String
},
/**
* Profile highlight color
*/
donatorBadge: {
kind: "InputField",
name: "donatorBadge",
inlineType: [0, ],
namedType: $Schema.String
},
/**
* Notification options
*/
notificationOptions: {
kind: "InputField",
name: "notificationOptions",
inlineType: [0, [0, ]],
namedType: $Schema.NotificationOptionInput
},
/**
* Timezone offset format: -?HH:MM
*/
timezone: {
kind: "InputField",
name: "timezone",
inlineType: [0, ],
namedType: $Schema.String
},
/**
* Minutes between activity for them to be merged together. 0 is Never, Above 2 weeks (20160 mins) is Always.
*/
activityMergeTime: {
kind: "InputField",
name: "activityMergeTime",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* The user's anime list options
*/
animeListOptions: {
kind: "InputField",
name: "animeListOptions",
inlineType: [0, ],
namedType: $Schema.MediaListOptionsInput
},
/**
* The user's anime list options
*/
mangaListOptions: {
kind: "InputField",
name: "mangaListOptions",
inlineType: [0, ],
namedType: $Schema.MediaListOptionsInput
},
/**
* The language the user wants to see staff and character names in
*/
staffNameLanguage: {
kind: "InputField",
name: "staffNameLanguage",
inlineType: [0, ],
namedType: $Schema.UserStaffNameLanguage
},
/**
* Only allow messages from other users the user follows
*/
restrictMessagesToFollowing: {
kind: "InputField",
name: "restrictMessagesToFollowing",
inlineType: [0, ],
namedType: $Schema.Boolean
},
disabledListActivity: {
kind: "InputField",
name: "disabledListActivity",
inlineType: [0, [0, ]],
namedType: $Schema.ListActivityOptionInput
}
},
inlineType: [0, ],
namedType: $Schema.User
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Mutation}.
*
* Create or update a media list entry
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaList} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.SaveMediaListEntry` |
* | **Nullability** | Optional |
* | **Arguments** | 16 |
*/
export interface SaveMediaListEntry {
kind: "OutputField",
name: "SaveMediaListEntry",
arguments: {
/**
* The list entry id, required for updating
*/
id: {
kind: "InputField",
name: "id",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* The id of the media the entry is of
*/
mediaId: {
kind: "InputField",
name: "mediaId",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* The watching/reading status
*/
status: {
kind: "InputField",
name: "status",
inlineType: [0, ],
namedType: $Schema.MediaListStatus
},
/**
* The score of the media in the user's chosen scoring method
*/
score: {
kind: "InputField",
name: "score",
inlineType: [0, ],
namedType: $Schema.Float
},
/**
* The score of the media in 100 point
*/
scoreRaw: {
kind: "InputField",
name: "scoreRaw",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* The amount of episodes/chapters consumed by the user
*/
progress: {
kind: "InputField",
name: "progress",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* The amount of volumes read by the user
*/
progressVolumes: {
kind: "InputField",
name: "progressVolumes",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* The amount of times the user has rewatched/read the media
*/
repeat: {
kind: "InputField",
name: "repeat",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Priority of planning
*/
priority: {
kind: "InputField",
name: "priority",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* If the entry should only be visible to authenticated user
*/
private: {
kind: "InputField",
name: "private",
inlineType: [0, ],
namedType: $Schema.Boolean
},
/**
* Text notes
*/
notes: {
kind: "InputField",
name: "notes",
inlineType: [0, ],
namedType: $Schema.String
},
/**
* If the entry shown be hidden from non-custom lists
*/
hiddenFromStatusLists: {
kind: "InputField",
name: "hiddenFromStatusLists",
inlineType: [0, ],
namedType: $Schema.Boolean
},
/**
* Array of custom list names which should be enabled for this entry
*/
customLists: {
kind: "InputField",
name: "customLists",
inlineType: [0, [0, ]],
namedType: $Schema.String
},
/**
* Array of advanced scores
*/
advancedScores: {
kind: "InputField",
name: "advancedScores",
inlineType: [0, [0, ]],
namedType: $Schema.Float
},
/**
* When the entry was started by the user
*/
startedAt: {
kind: "InputField",
name: "startedAt",
inlineType: [0, ],
namedType: $Schema.FuzzyDateInput
},
/**
* When the entry was completed by the user
*/
completedAt: {
kind: "InputField",
name: "completedAt",
inlineType: [0, ],
namedType: $Schema.FuzzyDateInput
}
},
inlineType: [0, ],
namedType: $Schema.MediaList
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Mutation}.
*
* Update multiple media list entries to the same values
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaList}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.UpdateMediaListEntries` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 14 |
*/
export interface UpdateMediaListEntries {
kind: "OutputField",
name: "UpdateMediaListEntries",
arguments: {
/**
* The watching/reading status
*/
status: {
kind: "InputField",
name: "status",
inlineType: [0, ],
namedType: $Schema.MediaListStatus
},
/**
* The score of the media in the user's chosen scoring method
*/
score: {
kind: "InputField",
name: "score",
inlineType: [0, ],
namedType: $Schema.Float
},
/**
* The score of the media in 100 point
*/
scoreRaw: {
kind: "InputField",
name: "scoreRaw",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* The amount of episodes/chapters consumed by the user
*/
progress: {
kind: "InputField",
name: "progress",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* The amount of volumes read by the user
*/
progressVolumes: {
kind: "InputField",
name: "progressVolumes",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* The amount of times the user has rewatched/read the media
*/
repeat: {
kind: "InputField",
name: "repeat",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Priority of planning
*/
priority: {
kind: "InputField",
name: "priority",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* If the entry should only be visible to authenticated user
*/
private: {
kind: "InputField",
name: "private",
inlineType: [0, ],
namedType: $Schema.Boolean
},
/**
* Text notes
*/
notes: {
kind: "InputField",
name: "notes",
inlineType: [0, ],
namedType: $Schema.String
},
/**
* If the entry shown be hidden from non-custom lists
*/
hiddenFromStatusLists: {
kind: "InputField",
name: "hiddenFromStatusLists",
inlineType: [0, ],
namedType: $Schema.Boolean
},
/**
* Array of advanced scores
*/
advancedScores: {
kind: "InputField",
name: "advancedScores",
inlineType: [0, [0, ]],
namedType: $Schema.Float
},
/**
* When the entry was started by the user
*/
startedAt: {
kind: "InputField",
name: "startedAt",
inlineType: [0, ],
namedType: $Schema.FuzzyDateInput
},
/**
* When the entry was completed by the user
*/
completedAt: {
kind: "InputField",
name: "completedAt",
inlineType: [0, ],
namedType: $Schema.FuzzyDateInput
},
/**
* The list entries ids to update
*/
ids: {
kind: "InputField",
name: "ids",
inlineType: [0, [0, ]],
namedType: $Schema.Int
}
},
inlineType: [0, [0, ]],
namedType: $Schema.MediaList
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Mutation}.
*
* Delete a media list entry
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Deleted} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.DeleteMediaListEntry` |
* | **Nullability** | Optional |
* | **Arguments** | 1 |
*/
export interface DeleteMediaListEntry {
kind: "OutputField",
name: "DeleteMediaListEntry",
arguments: {
/**
* The id of the media list entry to delete
*/
id: {
kind: "InputField",
name: "id",
inlineType: [0, ],
namedType: $Schema.Int
}
},
inlineType: [0, ],
namedType: $Schema.Deleted
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Mutation}.
*
* Delete a custom list and remove the list entries from it
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Deleted} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.DeleteCustomList` |
* | **Nullability** | Optional |
* | **Arguments** | 2 |
*/
export interface DeleteCustomList {
kind: "OutputField",
name: "DeleteCustomList",
arguments: {
/**
* The name of the custom list to delete
*/
customList: {
kind: "InputField",
name: "customList",
inlineType: [0, ],
namedType: $Schema.String
},
/**
* The media list type of the custom list
*/
type: {
kind: "InputField",
name: "type",
inlineType: [0, ],
namedType: $Schema.MediaType
}
},
inlineType: [0, ],
namedType: $Schema.Deleted
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Mutation}.
*
* Create or update text activity for the currently authenticated user
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.TextActivity} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.SaveTextActivity` |
* | **Nullability** | Optional |
* | **Arguments** | 3 |
*/
export interface SaveTextActivity {
kind: "OutputField",
name: "SaveTextActivity",
arguments: {
/**
* The activity's id, required for updating
*/
id: {
kind: "InputField",
name: "id",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* The activity text
*/
text: {
kind: "InputField",
name: "text",
inlineType: [0, ],
namedType: $Schema.String
},
/**
* If the activity should be locked. (Mod Only)
*/
locked: {
kind: "InputField",
name: "locked",
inlineType: [0, ],
namedType: $Schema.Boolean
}
},
inlineType: [0, ],
namedType: $Schema.TextActivity
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Mutation}.
*
* Create or update message activity for the currently authenticated user
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MessageActivity} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.SaveMessageActivity` |
* | **Nullability** | Optional |
* | **Arguments** | 6 |
*/
export interface SaveMessageActivity {
kind: "OutputField",
name: "SaveMessageActivity",
arguments: {
/**
* The activity id, required for updating
*/
id: {
kind: "InputField",
name: "id",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* The activity message text
*/
message: {
kind: "InputField",
name: "message",
inlineType: [0, ],
namedType: $Schema.String
},
/**
* The id of the user the message is being sent to
*/
recipientId: {
kind: "InputField",
name: "recipientId",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* If the activity should be private
*/
private: {
kind: "InputField",
name: "private",
inlineType: [0, ],
namedType: $Schema.Boolean
},
/**
* If the activity should be locked. (Mod Only)
*/
locked: {
kind: "InputField",
name: "locked",
inlineType: [0, ],
namedType: $Schema.Boolean
},
/**
* If the message should be sent from the Moderator account (Mod Only)
*/
asMod: {
kind: "InputField",
name: "asMod",
inlineType: [0, ],
namedType: $Schema.Boolean
}
},
inlineType: [0, ],
namedType: $Schema.MessageActivity
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Mutation}.
*
* Update list activity (Mod Only)
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.ListActivity} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.SaveListActivity` |
* | **Nullability** | Optional |
* | **Arguments** | 2 |
*/
export interface SaveListActivity {
kind: "OutputField",
name: "SaveListActivity",
arguments: {
/**
* The activity's id, required for updating
*/
id: {
kind: "InputField",
name: "id",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* If the activity should be locked. (Mod Only)
*/
locked: {
kind: "InputField",
name: "locked",
inlineType: [0, ],
namedType: $Schema.Boolean
}
},
inlineType: [0, ],
namedType: $Schema.ListActivity
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Mutation}.
*
* Delete an activity item of the authenticated users
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Deleted} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.DeleteActivity` |
* | **Nullability** | Optional |
* | **Arguments** | 1 |
*/
export interface DeleteActivity {
kind: "OutputField",
name: "DeleteActivity",
arguments: {
/**
* The id of the activity to delete
*/
id: {
kind: "InputField",
name: "id",
inlineType: [0, ],
namedType: $Schema.Int
}
},
inlineType: [0, ],
namedType: $Schema.Deleted
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Mutation}.
*
* Toggle activity to be pinned to the top of the user's activity feed
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.ActivityUnion} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.ToggleActivityPin` |
* | **Nullability** | Optional |
* | **Arguments** | 2 |
*/
export interface ToggleActivityPin {
kind: "OutputField",
name: "ToggleActivityPin",
arguments: {
/**
* Toggle activity id to be pinned
*/
id: {
kind: "InputField",
name: "id",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* If the activity should be pinned or unpinned
*/
pinned: {
kind: "InputField",
name: "pinned",
inlineType: [0, ],
namedType: $Schema.Boolean
}
},
inlineType: [0, ],
namedType: $Schema.ActivityUnion
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Mutation}.
*
* Toggle the subscription of an activity item
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.ActivityUnion} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.ToggleActivitySubscription` |
* | **Nullability** | Optional |
* | **Arguments** | 2 |
*/
export interface ToggleActivitySubscription {
kind: "OutputField",
name: "ToggleActivitySubscription",
arguments: {
/**
* The id of the activity to un/subscribe
*/
activityId: {
kind: "InputField",
name: "activityId",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Whether to subscribe or unsubscribe from the activity
*/
subscribe: {
kind: "InputField",
name: "subscribe",
inlineType: [0, ],
namedType: $Schema.Boolean
}
},
inlineType: [0, ],
namedType: $Schema.ActivityUnion
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Mutation}.
*
* Create or update an activity reply
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.ActivityReply} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.SaveActivityReply` |
* | **Nullability** | Optional |
* | **Arguments** | 4 |
*/
export interface SaveActivityReply {
kind: "OutputField",
name: "SaveActivityReply",
arguments: {
/**
* The activity reply id, required for updating
*/
id: {
kind: "InputField",
name: "id",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* The id of the parent activity being replied to
*/
activityId: {
kind: "InputField",
name: "activityId",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* The reply text
*/
text: {
kind: "InputField",
name: "text",
inlineType: [0, ],
namedType: $Schema.String
},
/**
* If the reply should be sent from the Moderator account (Mod Only)
*/
asMod: {
kind: "InputField",
name: "asMod",
inlineType: [0, ],
namedType: $Schema.Boolean
}
},
inlineType: [0, ],
namedType: $Schema.ActivityReply
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Mutation}.
*
* Delete an activity reply of the authenticated users
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Deleted} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.DeleteActivityReply` |
* | **Nullability** | Optional |
* | **Arguments** | 1 |
*/
export interface DeleteActivityReply {
kind: "OutputField",
name: "DeleteActivityReply",
arguments: {
/**
* The id of the reply to delete
*/
id: {
kind: "InputField",
name: "id",
inlineType: [0, ],
namedType: $Schema.Int
}
},
inlineType: [0, ],
namedType: $Schema.Deleted
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Mutation}.
*
* Add or remove a like from a likeable type.
* Returns all the users who liked the same model
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.User}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.ToggleLike` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 2 |
*/
export interface ToggleLike {
kind: "OutputField",
name: "ToggleLike",
arguments: {
/**
* The id of the likeable type
*/
id: {
kind: "InputField",
name: "id",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* The type of model to be un/liked
*/
type: {
kind: "InputField",
name: "type",
inlineType: [0, ],
namedType: $Schema.LikeableType
}
},
inlineType: [0, [0, ]],
namedType: $Schema.User
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Mutation}.
*
* Add or remove a like from a likeable type.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.LikeableUnion} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.ToggleLikeV2` |
* | **Nullability** | Optional |
* | **Arguments** | 2 |
*/
export interface ToggleLikeV2 {
kind: "OutputField",
name: "ToggleLikeV2",
arguments: {
/**
* The id of the likeable type
*/
id: {
kind: "InputField",
name: "id",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* The type of model to be un/liked
*/
type: {
kind: "InputField",
name: "type",
inlineType: [0, ],
namedType: $Schema.LikeableType
}
},
inlineType: [0, ],
namedType: $Schema.LikeableUnion
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Mutation}.
*
* Toggle the un/following of a user
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.User} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.ToggleFollow` |
* | **Nullability** | Optional |
* | **Arguments** | 1 |
*/
export interface ToggleFollow {
kind: "OutputField",
name: "ToggleFollow",
arguments: {
/**
* The id of the user to un/follow
*/
userId: {
kind: "InputField",
name: "userId",
inlineType: [0, ],
namedType: $Schema.Int
}
},
inlineType: [0, ],
namedType: $Schema.User
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Mutation}.
*
* Favourite or unfavourite an anime, manga, character, staff member, or studio
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Favourites} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.ToggleFavourite` |
* | **Nullability** | Optional |
* | **Arguments** | 5 |
*/
export interface ToggleFavourite {
kind: "OutputField",
name: "ToggleFavourite",
arguments: {
/**
* The id of the anime to un/favourite
*/
animeId: {
kind: "InputField",
name: "animeId",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* The id of the manga to un/favourite
*/
mangaId: {
kind: "InputField",
name: "mangaId",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* The id of the character to un/favourite
*/
characterId: {
kind: "InputField",
name: "characterId",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* The id of the staff to un/favourite
*/
staffId: {
kind: "InputField",
name: "staffId",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* The id of the studio to un/favourite
*/
studioId: {
kind: "InputField",
name: "studioId",
inlineType: [0, ],
namedType: $Schema.Int
}
},
inlineType: [0, ],
namedType: $Schema.Favourites
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Mutation}.
*
* Update the order favourites are displayed in
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Favourites} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.UpdateFavouriteOrder` |
* | **Nullability** | Optional |
* | **Arguments** | 10 |
*/
export interface UpdateFavouriteOrder {
kind: "OutputField",
name: "UpdateFavouriteOrder",
arguments: {
/**
* The id of the anime to un/favourite
*/
animeIds: {
kind: "InputField",
name: "animeIds",
inlineType: [0, [0, ]],
namedType: $Schema.Int
},
/**
* The id of the manga to un/favourite
*/
mangaIds: {
kind: "InputField",
name: "mangaIds",
inlineType: [0, [0, ]],
namedType: $Schema.Int
},
/**
* The id of the character to un/favourite
*/
characterIds: {
kind: "InputField",
name: "characterIds",
inlineType: [0, [0, ]],
namedType: $Schema.Int
},
/**
* The id of the staff to un/favourite
*/
staffIds: {
kind: "InputField",
name: "staffIds",
inlineType: [0, [0, ]],
namedType: $Schema.Int
},
/**
* The id of the studio to un/favourite
*/
studioIds: {
kind: "InputField",
name: "studioIds",
inlineType: [0, [0, ]],
namedType: $Schema.Int
},
/**
* List of integers which the anime should be ordered by (Asc)
*/
animeOrder: {
kind: "InputField",
name: "animeOrder",
inlineType: [0, [0, ]],
namedType: $Schema.Int
},
/**
* List of integers which the manga should be ordered by (Asc)
*/
mangaOrder: {
kind: "InputField",
name: "mangaOrder",
inlineType: [0, [0, ]],
namedType: $Schema.Int
},
/**
* List of integers which the character should be ordered by (Asc)
*/
characterOrder: {
kind: "InputField",
name: "characterOrder",
inlineType: [0, [0, ]],
namedType: $Schema.Int
},
/**
* List of integers which the staff should be ordered by (Asc)
*/
staffOrder: {
kind: "InputField",
name: "staffOrder",
inlineType: [0, [0, ]],
namedType: $Schema.Int
},
/**
* List of integers which the studio should be ordered by (Asc)
*/
studioOrder: {
kind: "InputField",
name: "studioOrder",
inlineType: [0, [0, ]],
namedType: $Schema.Int
}
},
inlineType: [0, ],
namedType: $Schema.Favourites
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Mutation}.
*
* Create or update a review
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Review} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.SaveReview` |
* | **Nullability** | Optional |
* | **Arguments** | 6 |
*/
export interface SaveReview {
kind: "OutputField",
name: "SaveReview",
arguments: {
/**
* The review id, required for updating
*/
id: {
kind: "InputField",
name: "id",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* The id of the media the review is of
*/
mediaId: {
kind: "InputField",
name: "mediaId",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* The main review text. Min:2200 characters
*/
body: {
kind: "InputField",
name: "body",
inlineType: [0, ],
namedType: $Schema.String
},
/**
* A short summary/preview of the review. Min:20, Max:120 characters
*/
summary: {
kind: "InputField",
name: "summary",
inlineType: [0, ],
namedType: $Schema.String
},
/**
* A short summary/preview of the review. Min:20, Max:120 characters
*/
score: {
kind: "InputField",
name: "score",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* If the review should only be visible to its creator
*/
private: {
kind: "InputField",
name: "private",
inlineType: [0, ],
namedType: $Schema.Boolean
}
},
inlineType: [0, ],
namedType: $Schema.Review
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Mutation}.
*
* Delete a review
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Deleted} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.DeleteReview` |
* | **Nullability** | Optional |
* | **Arguments** | 1 |
*/
export interface DeleteReview {
kind: "OutputField",
name: "DeleteReview",
arguments: {
/**
* The id of the review to delete
*/
id: {
kind: "InputField",
name: "id",
inlineType: [0, ],
namedType: $Schema.Int
}
},
inlineType: [0, ],
namedType: $Schema.Deleted
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Mutation}.
*
* Rate a review
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Review} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.RateReview` |
* | **Nullability** | Optional |
* | **Arguments** | 2 |
*/
export interface RateReview {
kind: "OutputField",
name: "RateReview",
arguments: {
/**
* The id of the review to rate
*/
reviewId: {
kind: "InputField",
name: "reviewId",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* The rating to apply to the review
*/
rating: {
kind: "InputField",
name: "rating",
inlineType: [0, ],
namedType: $Schema.ReviewRating
}
},
inlineType: [0, ],
namedType: $Schema.Review
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Mutation}.
*
* Recommendation a media
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Recommendation} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.SaveRecommendation` |
* | **Nullability** | Optional |
* | **Arguments** | 3 |
*/
export interface SaveRecommendation {
kind: "OutputField",
name: "SaveRecommendation",
arguments: {
/**
* The id of the base media
*/
mediaId: {
kind: "InputField",
name: "mediaId",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* The id of the media to recommend
*/
mediaRecommendationId: {
kind: "InputField",
name: "mediaRecommendationId",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* The rating to give the recommendation
*/
rating: {
kind: "InputField",
name: "rating",
inlineType: [0, ],
namedType: $Schema.RecommendationRating
}
},
inlineType: [0, ],
namedType: $Schema.Recommendation
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Mutation}.
*
* Create or update a forum thread
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Thread} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.SaveThread` |
* | **Nullability** | Optional |
* | **Arguments** | 7 |
*/
export interface SaveThread {
kind: "OutputField",
name: "SaveThread",
arguments: {
/**
* The thread id, required for updating
*/
id: {
kind: "InputField",
name: "id",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* The title of the thread
*/
title: {
kind: "InputField",
name: "title",
inlineType: [0, ],
namedType: $Schema.String
},
/**
* The main text body of the thread
*/
body: {
kind: "InputField",
name: "body",
inlineType: [0, ],
namedType: $Schema.String
},
/**
* Forum categories the thread should be within
*/
categories: {
kind: "InputField",
name: "categories",
inlineType: [0, [0, ]],
namedType: $Schema.Int
},
/**
* Media related to the contents of the thread
*/
mediaCategories: {
kind: "InputField",
name: "mediaCategories",
inlineType: [0, [0, ]],
namedType: $Schema.Int
},
/**
* If the thread should be stickied. (Mod Only)
*/
sticky: {
kind: "InputField",
name: "sticky",
inlineType: [0, ],
namedType: $Schema.Boolean
},
/**
* If the thread should be locked. (Mod Only)
*/
locked: {
kind: "InputField",
name: "locked",
inlineType: [0, ],
namedType: $Schema.Boolean
}
},
inlineType: [0, ],
namedType: $Schema.Thread
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Mutation}.
*
* Delete a thread
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Deleted} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.DeleteThread` |
* | **Nullability** | Optional |
* | **Arguments** | 1 |
*/
export interface DeleteThread {
kind: "OutputField",
name: "DeleteThread",
arguments: {
/**
* The id of the thread to delete
*/
id: {
kind: "InputField",
name: "id",
inlineType: [0, ],
namedType: $Schema.Int
}
},
inlineType: [0, ],
namedType: $Schema.Deleted
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Mutation}.
*
* Toggle the subscription of a forum thread
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Thread} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.ToggleThreadSubscription` |
* | **Nullability** | Optional |
* | **Arguments** | 2 |
*/
export interface ToggleThreadSubscription {
kind: "OutputField",
name: "ToggleThreadSubscription",
arguments: {
/**
* The id of the forum thread to un/subscribe
*/
threadId: {
kind: "InputField",
name: "threadId",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Whether to subscribe or unsubscribe from the forum thread
*/
subscribe: {
kind: "InputField",
name: "subscribe",
inlineType: [0, ],
namedType: $Schema.Boolean
}
},
inlineType: [0, ],
namedType: $Schema.Thread
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Mutation}.
*
* Create or update a thread comment
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.ThreadComment} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.SaveThreadComment` |
* | **Nullability** | Optional |
* | **Arguments** | 5 |
*/
export interface SaveThreadComment {
kind: "OutputField",
name: "SaveThreadComment",
arguments: {
/**
* The comment id, required for updating
*/
id: {
kind: "InputField",
name: "id",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* The id of thread the comment belongs to
*/
threadId: {
kind: "InputField",
name: "threadId",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* The id of thread comment to reply to
*/
parentCommentId: {
kind: "InputField",
name: "parentCommentId",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* The comment markdown text
*/
comment: {
kind: "InputField",
name: "comment",
inlineType: [0, ],
namedType: $Schema.String
},
/**
* If the comment tree should be locked. (Mod Only)
*/
locked: {
kind: "InputField",
name: "locked",
inlineType: [0, ],
namedType: $Schema.Boolean
}
},
inlineType: [0, ],
namedType: $Schema.ThreadComment
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Mutation}.
*
* Delete a thread comment
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Deleted} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.DeleteThreadComment` |
* | **Nullability** | Optional |
* | **Arguments** | 1 |
*/
export interface DeleteThreadComment {
kind: "OutputField",
name: "DeleteThreadComment",
arguments: {
/**
* The id of the thread comment to delete
*/
id: {
kind: "InputField",
name: "id",
inlineType: [0, ],
namedType: $Schema.Int
}
},
inlineType: [0, ],
namedType: $Schema.Deleted
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Mutation}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Json} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.UpdateAniChartSettings` |
* | **Nullability** | Optional |
* | **Arguments** | 4 |
*/
export interface UpdateAniChartSettings {
kind: "OutputField",
name: "UpdateAniChartSettings",
arguments: {
titleLanguage: {
kind: "InputField",
name: "titleLanguage",
inlineType: [0, ],
namedType: $Schema.String
},
outgoingLinkProvider: {
kind: "InputField",
name: "outgoingLinkProvider",
inlineType: [0, ],
namedType: $Schema.String
},
theme: {
kind: "InputField",
name: "theme",
inlineType: [0, ],
namedType: $Schema.String
},
sort: {
kind: "InputField",
name: "sort",
inlineType: [0, ],
namedType: $Schema.String
}
},
inlineType: [0, ],
namedType: $Schema.Json
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Mutation}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Json} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
* | **Parent** | {@link $Schema.Mutation} |
* | **Path** | `Mutation.UpdateAniChartHighlights` |
* | **Nullability** | Optional |
* | **Arguments** | 1 |
*/
export interface UpdateAniChartHighlights {
kind: "OutputField",
name: "UpdateAniChartHighlights",
arguments: {
highlights: {
kind: "InputField",
name: "highlights",
inlineType: [0, [0, ]],
namedType: $Schema.AniChartHighlightInput
}
},
inlineType: [0, ],
namedType: $Schema.Json
}
