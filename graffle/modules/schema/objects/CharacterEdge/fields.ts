import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"CharacterEdge"`
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
value: "CharacterEdge"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.CharacterEdge}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Character} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.CharacterEdge} |
* | **Path** | `CharacterEdge.node` |
* | **Nullability** | Optional |
*/
export interface node {
kind: "OutputField",
name: "node",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Character
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.CharacterEdge}.
*
* The id of the connection
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.CharacterEdge} |
* | **Path** | `CharacterEdge.id` |
* | **Nullability** | Optional |
*/
export interface id {
kind: "OutputField",
name: "id",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.CharacterEdge}.
*
* The characters role in the media
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.CharacterRole} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Parent** | {@link $Schema.CharacterEdge} |
* | **Path** | `CharacterEdge.role` |
* | **Nullability** | Optional |
*/
export interface role {
kind: "OutputField",
name: "role",
arguments: {},
inlineType: [0, ],
namedType: $Schema.CharacterRole
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.CharacterEdge}.
*
* Media specific character name
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.CharacterEdge} |
* | **Path** | `CharacterEdge.name` |
* | **Nullability** | Optional |
*/
export interface name {
kind: "OutputField",
name: "name",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.CharacterEdge}.
*
* The voice actors of the character
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Staff}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.CharacterEdge} |
* | **Path** | `CharacterEdge.voiceActors` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 2 |
*/
export interface voiceActors {
kind: "OutputField",
name: "voiceActors",
arguments: {
language: {
kind: "InputField",
name: "language",
inlineType: [0, ],
namedType: $Schema.StaffLanguage
},
sort: {
kind: "InputField",
name: "sort",
inlineType: [0, [0, ]],
namedType: $Schema.StaffSort
}
},
inlineType: [0, [0, ]],
namedType: $Schema.Staff
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.CharacterEdge}.
*
* The voice actors of the character with role date
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.StaffRoleType}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.CharacterEdge} |
* | **Path** | `CharacterEdge.voiceActorRoles` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 2 |
*/
export interface voiceActorRoles {
kind: "OutputField",
name: "voiceActorRoles",
arguments: {
language: {
kind: "InputField",
name: "language",
inlineType: [0, ],
namedType: $Schema.StaffLanguage
},
sort: {
kind: "InputField",
name: "sort",
inlineType: [0, [0, ]],
namedType: $Schema.StaffSort
}
},
inlineType: [0, [0, ]],
namedType: $Schema.StaffRoleType
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.CharacterEdge}.
*
* The media the character is in
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Media}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.CharacterEdge} |
* | **Path** | `CharacterEdge.media` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface media {
kind: "OutputField",
name: "media",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.Media
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.CharacterEdge}.
*
* The order the character should be displayed from the users favourites
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.CharacterEdge} |
* | **Path** | `CharacterEdge.favouriteOrder` |
* | **Nullability** | Optional |
*/
export interface favouriteOrder {
kind: "OutputField",
name: "favouriteOrder",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}
