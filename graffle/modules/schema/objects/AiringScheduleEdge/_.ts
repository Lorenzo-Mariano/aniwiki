import type * as $Fields from './fields.js'

export * as AiringScheduleEdge from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* AiringSchedule connection edge
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 2 |
*/
export interface AiringScheduleEdge {
kind: "Object",
name: "AiringScheduleEdge",
fields: {
__typename: $Fields.__typename,
node: $Fields.node,
id: $Fields.id
}
}