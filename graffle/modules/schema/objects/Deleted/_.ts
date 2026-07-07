import type * as $Fields from './fields.js'

export * as Deleted from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* Deleted data type
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 1 |
*/
export interface Deleted {
kind: "Object",
name: "Deleted",
fields: {
__typename: $Fields.__typename,
deleted: $Fields.deleted
}
}