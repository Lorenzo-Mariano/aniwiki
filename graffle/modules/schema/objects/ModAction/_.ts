import type * as $Fields from './fields.js'

export * as ModAction from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 8 |
*/
export interface ModAction {
kind: "Object",
name: "ModAction",
fields: {
__typename: $Fields.__typename,
id: $Fields.id,
user: $Fields.user,
mod: $Fields.mod,
type: $Fields.type,
objectId: $Fields.objectId,
objectType: $Fields.objectType,
data: $Fields.data,
createdAt: $Fields.createdAt
}
}