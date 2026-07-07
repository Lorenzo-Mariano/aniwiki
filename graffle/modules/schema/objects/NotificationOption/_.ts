import type * as $Fields from './fields.js'

export * as NotificationOption from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* Notification option
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 2 |
*/
export interface NotificationOption {
kind: "Object",
name: "NotificationOption",
fields: {
__typename: $Fields.__typename,
type: $Fields.type,
enabled: $Fields.enabled
}
}