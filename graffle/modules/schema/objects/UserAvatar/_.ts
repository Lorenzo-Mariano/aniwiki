import type * as $Fields from './fields.js'

export * as UserAvatar from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* A user's avatars
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 2 |
*/
export interface UserAvatar {
kind: "Object",
name: "UserAvatar",
fields: {
__typename: $Fields.__typename,
large: $Fields.large,
medium: $Fields.medium
}
}