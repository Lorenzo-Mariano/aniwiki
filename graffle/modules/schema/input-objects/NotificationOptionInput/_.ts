import type * as $Fields from './fields.js'

export * as NotificationOptionInput from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#input-types | InputObject}.
*
* Notification option input
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinputobjecttype | InputObject ↗} |
* | **Fields** | 2 |
* | **All Fields Nullable** | Yes |
*/
export interface NotificationOptionInput {
kind: "InputObject",
name: "NotificationOptionInput",
isAllFieldsNullable: true,
fields: {
type: $Fields.type,
enabled: $Fields.enabled
},
type: {
type?: $Fields.type['type'],
enabled?: $Fields.enabled['type']
}
}