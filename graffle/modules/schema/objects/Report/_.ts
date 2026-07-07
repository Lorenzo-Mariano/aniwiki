import type * as $Fields from './fields.js'

export * as Report from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 6 |
*/
export interface Report {
kind: "Object",
name: "Report",
fields: {
__typename: $Fields.__typename,
id: $Fields.id,
reporter: $Fields.reporter,
reported: $Fields.reported,
reason: $Fields.reason,
createdAt: $Fields.createdAt,
cleared: $Fields.cleared
}
}