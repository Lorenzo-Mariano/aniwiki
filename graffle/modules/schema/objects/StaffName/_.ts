import type * as $Fields from './fields.js'

export * as StaffName from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* The names of the staff member
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 7 |
*/
export interface StaffName {
kind: "Object",
name: "StaffName",
fields: {
__typename: $Fields.__typename,
first: $Fields.first,
middle: $Fields.middle,
last: $Fields.last,
full: $Fields.full,
native: $Fields.native,
alternative: $Fields.alternative,
userPreferred: $Fields.userPreferred
}
}