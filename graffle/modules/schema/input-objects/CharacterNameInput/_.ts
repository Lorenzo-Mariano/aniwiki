import type * as $Fields from './fields.js'

export * as CharacterNameInput from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#input-types | InputObject}.
*
* The names of the character
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinputobjecttype | InputObject ↗} |
* | **Fields** | 6 |
* | **All Fields Nullable** | Yes |
*/
export interface CharacterNameInput {
kind: "InputObject",
name: "CharacterNameInput",
isAllFieldsNullable: true,
fields: {
first: $Fields.first,
middle: $Fields.middle,
last: $Fields.last,
native: $Fields.native,
alternative: $Fields.alternative,
alternativeSpoiler: $Fields.alternativeSpoiler
},
type: {
first?: $Fields.first['type'],
middle?: $Fields.middle['type'],
last?: $Fields.last['type'],
native?: $Fields.native['type'],
alternative?: $Fields.alternative['type'],
alternativeSpoiler?: $Fields.alternativeSpoiler['type']
}
}