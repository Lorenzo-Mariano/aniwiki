import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"MediaEdge"`
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
value: "MediaEdge"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaEdge}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Media} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.MediaEdge} |
* | **Path** | `MediaEdge.node` |
* | **Nullability** | Optional |
*/
export interface node {
kind: "OutputField",
name: "node",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Media
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaEdge}.
*
* The id of the connection
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaEdge} |
* | **Path** | `MediaEdge.id` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaEdge}.
*
* The type of relation to the parent model
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaRelation} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Parent** | {@link $Schema.MediaEdge} |
* | **Path** | `MediaEdge.relationType` |
* | **Nullability** | Optional |
* | **Arguments** | 1 |
*/
export interface relationType {
kind: "OutputField",
name: "relationType",
arguments: {
/**
* Provide 2 to use new version 2 of relation enum
*/
version: {
kind: "InputField",
name: "version",
inlineType: [0, ],
namedType: $Schema.Int
}
},
inlineType: [0, ],
namedType: $Schema.MediaRelation
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaEdge}.
*
* If the studio is the main animation studio of the media (For Studio->MediaConnection field only)
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Boolean}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaEdge} |
* | **Path** | `MediaEdge.isMainStudio` |
* | **Nullability** | Required |
*/
export interface isMainStudio {
kind: "OutputField",
name: "isMainStudio",
arguments: {},
inlineType: [1, ],
namedType: $Schema.Boolean
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaEdge}.
*
* The characters in the media voiced by the parent actor
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Character}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.MediaEdge} |
* | **Path** | `MediaEdge.characters` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface characters {
kind: "OutputField",
name: "characters",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.Character
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaEdge}.
*
* The characters role in the media
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.CharacterRole} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Parent** | {@link $Schema.MediaEdge} |
* | **Path** | `MediaEdge.characterRole` |
* | **Nullability** | Optional |
*/
export interface characterRole {
kind: "OutputField",
name: "characterRole",
arguments: {},
inlineType: [0, ],
namedType: $Schema.CharacterRole
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaEdge}.
*
* Media specific character name
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaEdge} |
* | **Path** | `MediaEdge.characterName` |
* | **Nullability** | Optional |
*/
export interface characterName {
kind: "OutputField",
name: "characterName",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaEdge}.
*
* Notes regarding the VA's role for the character
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaEdge} |
* | **Path** | `MediaEdge.roleNotes` |
* | **Nullability** | Optional |
*/
export interface roleNotes {
kind: "OutputField",
name: "roleNotes",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaEdge}.
*
* Used for grouping roles where multiple dubs exist for the same language. Either dubbing company name or language variant.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaEdge} |
* | **Path** | `MediaEdge.dubGroup` |
* | **Nullability** | Optional |
*/
export interface dubGroup {
kind: "OutputField",
name: "dubGroup",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaEdge}.
*
* The role of the staff member in the production of the media
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaEdge} |
* | **Path** | `MediaEdge.staffRole` |
* | **Nullability** | Optional |
*/
export interface staffRole {
kind: "OutputField",
name: "staffRole",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaEdge}.
*
* The voice actors of the character
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Staff}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.MediaEdge} |
* | **Path** | `MediaEdge.voiceActors` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaEdge}.
*
* The voice actors of the character with role date
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.StaffRoleType}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.MediaEdge} |
* | **Path** | `MediaEdge.voiceActorRoles` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaEdge}.
*
* The order the media should be displayed from the users favourites
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaEdge} |
* | **Path** | `MediaEdge.favouriteOrder` |
* | **Nullability** | Optional |
*/
export interface favouriteOrder {
kind: "OutputField",
name: "favouriteOrder",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}
