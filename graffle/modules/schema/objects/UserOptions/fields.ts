import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"UserOptions"`
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
value: "UserOptions"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserOptions}.
*
* The language the user wants to see media titles in
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.UserTitleLanguage} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Parent** | {@link $Schema.UserOptions} |
* | **Path** | `UserOptions.titleLanguage` |
* | **Nullability** | Optional |
*/
export interface titleLanguage {
kind: "OutputField",
name: "titleLanguage",
arguments: {},
inlineType: [0, ],
namedType: $Schema.UserTitleLanguage
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserOptions}.
*
* Whether the user has enabled viewing of 18+ content
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.UserOptions} |
* | **Path** | `UserOptions.displayAdultContent` |
* | **Nullability** | Optional |
*/
export interface displayAdultContent {
kind: "OutputField",
name: "displayAdultContent",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Boolean
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserOptions}.
*
* Whether the user receives notifications when a show they are watching aires
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.UserOptions} |
* | **Path** | `UserOptions.airingNotifications` |
* | **Nullability** | Optional |
*/
export interface airingNotifications {
kind: "OutputField",
name: "airingNotifications",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Boolean
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserOptions}.
*
* Profile highlight color (blue, purple, pink, orange, red, green, gray)
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.UserOptions} |
* | **Path** | `UserOptions.profileColor` |
* | **Nullability** | Optional |
*/
export interface profileColor {
kind: "OutputField",
name: "profileColor",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserOptions}.
*
* Notification options
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.NotificationOption}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.UserOptions} |
* | **Path** | `UserOptions.notificationOptions` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface notificationOptions {
kind: "OutputField",
name: "notificationOptions",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.NotificationOption
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserOptions}.
*
* The user's timezone offset (Auth user only)
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.UserOptions} |
* | **Path** | `UserOptions.timezone` |
* | **Nullability** | Optional |
*/
export interface timezone {
kind: "OutputField",
name: "timezone",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserOptions}.
*
* Minutes between activity for them to be merged together. 0 is Never, Above 2 weeks (20160 mins) is Always.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.UserOptions} |
* | **Path** | `UserOptions.activityMergeTime` |
* | **Nullability** | Optional |
*/
export interface activityMergeTime {
kind: "OutputField",
name: "activityMergeTime",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserOptions}.
*
* The language the user wants to see staff and character names in
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.UserStaffNameLanguage} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Parent** | {@link $Schema.UserOptions} |
* | **Path** | `UserOptions.staffNameLanguage` |
* | **Nullability** | Optional |
*/
export interface staffNameLanguage {
kind: "OutputField",
name: "staffNameLanguage",
arguments: {},
inlineType: [0, ],
namedType: $Schema.UserStaffNameLanguage
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserOptions}.
*
* Whether the user only allow messages from users they follow
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.UserOptions} |
* | **Path** | `UserOptions.restrictMessagesToFollowing` |
* | **Nullability** | Optional |
*/
export interface restrictMessagesToFollowing {
kind: "OutputField",
name: "restrictMessagesToFollowing",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Boolean
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserOptions}.
*
* The list activity types the user has disabled from being created from list updates
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.ListActivityOption}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.UserOptions} |
* | **Path** | `UserOptions.disabledListActivity` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface disabledListActivity {
kind: "OutputField",
name: "disabledListActivity",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.ListActivityOption
}
