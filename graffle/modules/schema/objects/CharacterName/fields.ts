import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"CharacterName"`
*
* {@link https://graphql.org/learn/queries/#meta-fields | GraphQL __typename documentation}
*/
export interface __typename {
kind: "OutputField",
name: "__typename",
arguments: {},
inlineType: [1],
namedType: {
kind: "__typename",
value: "CharacterName"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.CharacterName}.
*
* The character's given name
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.CharacterName} |
* | **Path** | `CharacterName.first` |
* | **Nullability** | Optional |
*/
export interface first {
kind: "OutputField",
name: "first",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.CharacterName}.
*
* The character's middle name
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.CharacterName} |
* | **Path** | `CharacterName.middle` |
* | **Nullability** | Optional |
*/
export interface middle {
kind: "OutputField",
name: "middle",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.CharacterName}.
*
* The character's surname
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.CharacterName} |
* | **Path** | `CharacterName.last` |
* | **Nullability** | Optional |
*/
export interface last {
kind: "OutputField",
name: "last",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.CharacterName}.
*
* The character's first and last name
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.CharacterName} |
* | **Path** | `CharacterName.full` |
* | **Nullability** | Optional |
*/
export interface full {
kind: "OutputField",
name: "full",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.CharacterName}.
*
* The character's full name in their native language
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.CharacterName} |
* | **Path** | `CharacterName.native` |
* | **Nullability** | Optional |
*/
export interface native {
kind: "OutputField",
name: "native",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.CharacterName}.
*
* Other names the character might be referred to as
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.CharacterName} |
* | **Path** | `CharacterName.alternative` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface alternative {
kind: "OutputField",
name: "alternative",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.CharacterName}.
*
* Other names the character might be referred to as but are spoilers
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.CharacterName} |
* | **Path** | `CharacterName.alternativeSpoiler` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface alternativeSpoiler {
kind: "OutputField",
name: "alternativeSpoiler",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.CharacterName}.
*
* The currently authenticated users preferred name language. Default romaji for non-authenticated
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.CharacterName} |
* | **Path** | `CharacterName.userPreferred` |
* | **Nullability** | Optional |
*/
export interface userPreferred {
kind: "OutputField",
name: "userPreferred",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}
