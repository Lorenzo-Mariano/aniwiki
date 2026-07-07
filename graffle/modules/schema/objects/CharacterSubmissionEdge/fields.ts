import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"CharacterSubmissionEdge"`
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
value: "CharacterSubmissionEdge"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.CharacterSubmissionEdge}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.CharacterSubmission} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.CharacterSubmissionEdge} |
* | **Path** | `CharacterSubmissionEdge.node` |
* | **Nullability** | Optional |
*/
export interface node {
kind: "OutputField",
name: "node",
arguments: {},
inlineType: [0, ],
namedType: $Schema.CharacterSubmission
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.CharacterSubmissionEdge}.
*
* The characters role in the media
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.CharacterRole} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Parent** | {@link $Schema.CharacterSubmissionEdge} |
* | **Path** | `CharacterSubmissionEdge.role` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.CharacterSubmissionEdge}.
*
* The voice actors of the character
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Staff}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.CharacterSubmissionEdge} |
* | **Path** | `CharacterSubmissionEdge.voiceActors` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface voiceActors {
kind: "OutputField",
name: "voiceActors",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.Staff
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.CharacterSubmissionEdge}.
*
* The submitted voice actors of the character
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.StaffSubmission}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.CharacterSubmissionEdge} |
* | **Path** | `CharacterSubmissionEdge.submittedVoiceActors` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface submittedVoiceActors {
kind: "OutputField",
name: "submittedVoiceActors",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.StaffSubmission
}
