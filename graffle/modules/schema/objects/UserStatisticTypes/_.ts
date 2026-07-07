import type * as $Fields from './fields.js'

export * as UserStatisticTypes from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 2 |
*/
export interface UserStatisticTypes {
kind: "Object",
name: "UserStatisticTypes",
fields: {
__typename: $Fields.__typename,
anime: $Fields.anime,
manga: $Fields.manga
}
}