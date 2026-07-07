import type * as $Fields from './fields.js'

export * as UserOptions from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* A user's general options
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 10 |
*/
export interface UserOptions {
kind: "Object",
name: "UserOptions",
fields: {
__typename: $Fields.__typename,
titleLanguage: $Fields.titleLanguage,
displayAdultContent: $Fields.displayAdultContent,
airingNotifications: $Fields.airingNotifications,
profileColor: $Fields.profileColor,
notificationOptions: $Fields.notificationOptions,
timezone: $Fields.timezone,
activityMergeTime: $Fields.activityMergeTime,
staffNameLanguage: $Fields.staffNameLanguage,
restrictMessagesToFollowing: $Fields.restrictMessagesToFollowing,
disabledListActivity: $Fields.disabledListActivity
}
}