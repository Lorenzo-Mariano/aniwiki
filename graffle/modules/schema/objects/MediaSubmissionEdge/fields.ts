import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"MediaSubmissionEdge"`
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
value: "MediaSubmissionEdge"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaSubmissionEdge}.
*
* The id of the direct submission
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaSubmissionEdge} |
* | **Path** | `MediaSubmissionEdge.id` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaSubmissionEdge}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.CharacterRole} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Parent** | {@link $Schema.MediaSubmissionEdge} |
* | **Path** | `MediaSubmissionEdge.characterRole` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaSubmissionEdge}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaSubmissionEdge} |
* | **Path** | `MediaSubmissionEdge.staffRole` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaSubmissionEdge}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaSubmissionEdge} |
* | **Path** | `MediaSubmissionEdge.roleNotes` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaSubmissionEdge}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaSubmissionEdge} |
* | **Path** | `MediaSubmissionEdge.dubGroup` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaSubmissionEdge}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaSubmissionEdge} |
* | **Path** | `MediaSubmissionEdge.characterName` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaSubmissionEdge}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaSubmissionEdge} |
* | **Path** | `MediaSubmissionEdge.isMain` |
* | **Nullability** | Optional |
*/
export interface isMain {
kind: "OutputField",
name: "isMain",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Boolean
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaSubmissionEdge}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Character} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.MediaSubmissionEdge} |
* | **Path** | `MediaSubmissionEdge.character` |
* | **Nullability** | Optional |
*/
export interface character {
kind: "OutputField",
name: "character",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Character
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaSubmissionEdge}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Character} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.MediaSubmissionEdge} |
* | **Path** | `MediaSubmissionEdge.characterSubmission` |
* | **Nullability** | Optional |
*/
export interface characterSubmission {
kind: "OutputField",
name: "characterSubmission",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Character
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaSubmissionEdge}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Staff} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.MediaSubmissionEdge} |
* | **Path** | `MediaSubmissionEdge.voiceActor` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaSubmissionEdge}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Staff} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.MediaSubmissionEdge} |
* | **Path** | `MediaSubmissionEdge.voiceActorSubmission` |
* | **Nullability** | Optional |
*/
export interface voiceActorSubmission {
kind: "OutputField",
name: "voiceActorSubmission",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Staff
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaSubmissionEdge}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Staff} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.MediaSubmissionEdge} |
* | **Path** | `MediaSubmissionEdge.staff` |
* | **Nullability** | Optional |
*/
export interface staff {
kind: "OutputField",
name: "staff",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Staff
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaSubmissionEdge}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Staff} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.MediaSubmissionEdge} |
* | **Path** | `MediaSubmissionEdge.staffSubmission` |
* | **Nullability** | Optional |
*/
export interface staffSubmission {
kind: "OutputField",
name: "staffSubmission",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Staff
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaSubmissionEdge}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Studio} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.MediaSubmissionEdge} |
* | **Path** | `MediaSubmissionEdge.studio` |
* | **Nullability** | Optional |
*/
export interface studio {
kind: "OutputField",
name: "studio",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Studio
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaSubmissionEdge}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaExternalLink} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.MediaSubmissionEdge} |
* | **Path** | `MediaSubmissionEdge.externalLink` |
* | **Nullability** | Optional |
*/
export interface externalLink {
kind: "OutputField",
name: "externalLink",
arguments: {},
inlineType: [0, ],
namedType: $Schema.MediaExternalLink
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaSubmissionEdge}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Media} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.MediaSubmissionEdge} |
* | **Path** | `MediaSubmissionEdge.media` |
* | **Nullability** | Optional |
*/
export interface media {
kind: "OutputField",
name: "media",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Media
}
