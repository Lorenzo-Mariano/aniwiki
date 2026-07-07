import type * as $Fields from './fields.js'

export * as StaffEdge from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* Staff connection edge
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 4 |
*/
export interface StaffEdge {
kind: "Object",
name: "StaffEdge",
fields: {
__typename: $Fields.__typename,
node: $Fields.node,
id: $Fields.id,
role: $Fields.role,
favouriteOrder: $Fields.favouriteOrder
}
}