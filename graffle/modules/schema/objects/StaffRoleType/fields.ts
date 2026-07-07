import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"StaffRoleType"`
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
value: "StaffRoleType"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.StaffRoleType}.
*
* The voice actors of the character
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Staff} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.StaffRoleType} |
* | **Path** | `StaffRoleType.voiceActor` |
* | **Nullability** | Optional |
*/
export interface voiceActor {
kind: "OutputField",
name: "voiceActor",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Staff
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.StaffRoleType}.
*
* Notes regarding the VA's role for the character
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.StaffRoleType} |
* | **Path** | `StaffRoleType.roleNotes` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.StaffRoleType}.
*
* Used for grouping roles where multiple dubs exist for the same language. Either dubbing company name or language variant.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.StaffRoleType} |
* | **Path** | `StaffRoleType.dubGroup` |
* | **Nullability** | Optional |
*/
export interface dubGroup {
kind: "OutputField",
name: "dubGroup",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}
