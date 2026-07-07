import type * as $Fields from './fields.js'

export * as StaffNameInput from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#input-types | InputObject}.
*
* The names of the staff member
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinputobjecttype | InputObject ↗} |
* | **Fields** | 5 |
* | **All Fields Nullable** | Yes |
*/
export interface StaffNameInput {
kind: "InputObject",
name: "StaffNameInput",
isAllFieldsNullable: true,
fields: {
first: $Fields.first,
middle: $Fields.middle,
last: $Fields.last,
native: $Fields.native,
alternative: $Fields.alternative
},
type: {
first?: $Fields.first['type'],
middle?: $Fields.middle['type'],
last?: $Fields.last['type'],
native?: $Fields.native['type'],
alternative?: $Fields.alternative['type']
}
}