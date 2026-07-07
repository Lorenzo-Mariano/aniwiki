import type * as $Fields from './fields.js'

export * as AiringScheduleInput from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#input-types | InputObject}.
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinputobjecttype | InputObject ↗} |
* | **Fields** | 3 |
* | **All Fields Nullable** | Yes |
*/
export interface AiringScheduleInput {
kind: "InputObject",
name: "AiringScheduleInput",
isAllFieldsNullable: true,
fields: {
airingAt: $Fields.airingAt,
episode: $Fields.episode,
timeUntilAiring: $Fields.timeUntilAiring
},
type: {
airingAt?: $Fields.airingAt['type'],
episode?: $Fields.episode['type'],
timeUntilAiring?: $Fields.timeUntilAiring['type']
}
}