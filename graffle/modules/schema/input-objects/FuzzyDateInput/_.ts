import type * as $Fields from './fields.js'

export * as FuzzyDateInput from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#input-types | InputObject}.
*
* Date object that allows for incomplete date values (fuzzy)
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinputobjecttype | InputObject ↗} |
* | **Fields** | 3 |
* | **All Fields Nullable** | Yes |
*/
export interface FuzzyDateInput {
kind: "InputObject",
name: "FuzzyDateInput",
isAllFieldsNullable: true,
fields: {
year: $Fields.year,
month: $Fields.month,
day: $Fields.day
},
type: {
year?: $Fields.year['type'],
month?: $Fields.month['type'],
day?: $Fields.day['type']
}
}