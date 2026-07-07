import type * as $Fields from './fields.js'

export * as ListActivityOption from './fields.js'

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
export interface ListActivityOption {
kind: "Object",
name: "ListActivityOption",
fields: {
__typename: $Fields.__typename,
disabled: $Fields.disabled,
type: $Fields.type
}
}