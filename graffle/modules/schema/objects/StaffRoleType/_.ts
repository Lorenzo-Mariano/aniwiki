import type * as $Fields from './fields.js'

export * as StaffRoleType from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* Voice actor role for a character
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 3 |
*/
export interface StaffRoleType {
kind: "Object",
name: "StaffRoleType",
fields: {
__typename: $Fields.__typename,
voiceActor: $Fields.voiceActor,
roleNotes: $Fields.roleNotes,
dubGroup: $Fields.dubGroup
}
}