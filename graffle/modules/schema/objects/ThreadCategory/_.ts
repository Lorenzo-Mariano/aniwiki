import type * as $Fields from './fields.js'

export * as ThreadCategory from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* A forum thread category
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 2 |
*/
export interface ThreadCategory {
kind: "Object",
name: "ThreadCategory",
fields: {
__typename: $Fields.__typename,
id: $Fields.id,
name: $Fields.name
}
}