import type * as $Fields from './fields.js'

export * as StudioEdge from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* Studio connection edge
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 4 |
*/
export interface StudioEdge {
kind: "Object",
name: "StudioEdge",
fields: {
__typename: $Fields.__typename,
node: $Fields.node,
id: $Fields.id,
isMain: $Fields.isMain,
favouriteOrder: $Fields.favouriteOrder
}
}