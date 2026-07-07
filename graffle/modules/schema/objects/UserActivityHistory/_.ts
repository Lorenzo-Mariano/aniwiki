import type * as $Fields from './fields.js'

export * as UserActivityHistory from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* A user's activity history stats.
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 3 |
*/
export interface UserActivityHistory {
kind: "Object",
name: "UserActivityHistory",
fields: {
__typename: $Fields.__typename,
date: $Fields.date,
amount: $Fields.amount,
level: $Fields.level
}
}