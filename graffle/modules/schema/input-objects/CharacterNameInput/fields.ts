import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#input-types | input field} ↗ on type {@link $Schema.CharacterNameInput}.
*
* The character's given name
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.CharacterNameInput} |
* | **Path** | `CharacterNameInput.first` |
* | **Nullability** | Optional |
*/
export interface first {
kind: "InputField",
name: "first",
inlineType: [0, ],
namedType: $Schema.String,
type: $Schema.String['codec']['_typeDecoded'] | null | undefined
}
/**
* GraphQL {@link https://graphql.org/learn/schema/#input-types | input field} ↗ on type {@link $Schema.CharacterNameInput}.
*
* The character's middle name
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.CharacterNameInput} |
* | **Path** | `CharacterNameInput.middle` |
* | **Nullability** | Optional |
*/
export interface middle {
kind: "InputField",
name: "middle",
inlineType: [0, ],
namedType: $Schema.String,
type: $Schema.String['codec']['_typeDecoded'] | null | undefined
}
/**
* GraphQL {@link https://graphql.org/learn/schema/#input-types | input field} ↗ on type {@link $Schema.CharacterNameInput}.
*
* The character's surname
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.CharacterNameInput} |
* | **Path** | `CharacterNameInput.last` |
* | **Nullability** | Optional |
*/
export interface last {
kind: "InputField",
name: "last",
inlineType: [0, ],
namedType: $Schema.String,
type: $Schema.String['codec']['_typeDecoded'] | null | undefined
}
/**
* GraphQL {@link https://graphql.org/learn/schema/#input-types | input field} ↗ on type {@link $Schema.CharacterNameInput}.
*
* The character's full name in their native language
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.CharacterNameInput} |
* | **Path** | `CharacterNameInput.native` |
* | **Nullability** | Optional |
*/
export interface native {
kind: "InputField",
name: "native",
inlineType: [0, ],
namedType: $Schema.String,
type: $Schema.String['codec']['_typeDecoded'] | null | undefined
}
/**
* GraphQL {@link https://graphql.org/learn/schema/#input-types | input field} ↗ on type {@link $Schema.CharacterNameInput}.
*
* Other names the character might be referred by
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.CharacterNameInput} |
* | **Path** | `CharacterNameInput.alternative` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface alternative {
kind: "InputField",
name: "alternative",
inlineType: [0, [0, ]],
namedType: $Schema.String,
type: readonly ($Schema.String['codec']['_typeDecoded'])[] | null | undefined
}
/**
* GraphQL {@link https://graphql.org/learn/schema/#input-types | input field} ↗ on type {@link $Schema.CharacterNameInput}.
*
* Other names the character might be referred to as but are spoilers
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.CharacterNameInput} |
* | **Path** | `CharacterNameInput.alternativeSpoiler` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface alternativeSpoiler {
kind: "InputField",
name: "alternativeSpoiler",
inlineType: [0, [0, ]],
namedType: $Schema.String,
type: readonly ($Schema.String['codec']['_typeDecoded'])[] | null | undefined
}