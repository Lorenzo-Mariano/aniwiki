import type * as $Fields from './fields.js'

export * as UserPreviousName from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* A user's previous name
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 3 |
*/
export interface UserPreviousName {
kind: "Object",
name: "UserPreviousName",
fields: {
__typename: $Fields.__typename,
name: $Fields.name,
createdAt: $Fields.createdAt,
updatedAt: $Fields.updatedAt
}
}