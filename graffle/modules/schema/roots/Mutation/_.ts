import type * as $Fields from './fields.js'

export * as Mutation from './fields.js'

/**
* GraphQL root {@link https://graphql.org/learn/schema/#the-mutation-and-mutation-types | Mutation} type.
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 29 |
*/
export interface Mutation {
kind: "Object",
name: "Mutation",
fields: {
__typename: $Fields.__typename,
UpdateUser: $Fields.UpdateUser,
SaveMediaListEntry: $Fields.SaveMediaListEntry,
UpdateMediaListEntries: $Fields.UpdateMediaListEntries,
DeleteMediaListEntry: $Fields.DeleteMediaListEntry,
DeleteCustomList: $Fields.DeleteCustomList,
SaveTextActivity: $Fields.SaveTextActivity,
SaveMessageActivity: $Fields.SaveMessageActivity,
SaveListActivity: $Fields.SaveListActivity,
DeleteActivity: $Fields.DeleteActivity,
ToggleActivityPin: $Fields.ToggleActivityPin,
ToggleActivitySubscription: $Fields.ToggleActivitySubscription,
SaveActivityReply: $Fields.SaveActivityReply,
DeleteActivityReply: $Fields.DeleteActivityReply,
ToggleLike: $Fields.ToggleLike,
ToggleLikeV2: $Fields.ToggleLikeV2,
ToggleFollow: $Fields.ToggleFollow,
ToggleFavourite: $Fields.ToggleFavourite,
UpdateFavouriteOrder: $Fields.UpdateFavouriteOrder,
SaveReview: $Fields.SaveReview,
DeleteReview: $Fields.DeleteReview,
RateReview: $Fields.RateReview,
SaveRecommendation: $Fields.SaveRecommendation,
SaveThread: $Fields.SaveThread,
DeleteThread: $Fields.DeleteThread,
ToggleThreadSubscription: $Fields.ToggleThreadSubscription,
SaveThreadComment: $Fields.SaveThreadComment,
DeleteThreadComment: $Fields.DeleteThreadComment,
UpdateAniChartSettings: $Fields.UpdateAniChartSettings,
UpdateAniChartHighlights: $Fields.UpdateAniChartHighlights
}
}