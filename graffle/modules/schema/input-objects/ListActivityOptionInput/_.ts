import type * as $Fields from './fields.js'

export * as ListActivityOptionInput from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#input-types | InputObject}.
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinputobjecttype | InputObject ↗} |
* | **Fields** | 2 |
* | **All Fields Nullable** | Yes |
*/
export interface ListActivityOptionInput {
kind: "InputObject",
name: "ListActivityOptionInput",
isAllFieldsNullable: true,
fields: {
disabled: $Fields.disabled,
type: $Fields.type
},
type: {
disabled?: $Fields.disabled['type'],
type?: $Fields.type['type']
}
}