import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"MediaSubmission"`
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
value: "MediaSubmission"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaSubmission}.
*
* The id of the submission
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaSubmission} |
* | **Path** | `MediaSubmission.id` |
* | **Nullability** | Required |
*/
export interface id {
kind: "OutputField",
name: "id",
arguments: {},
inlineType: [1, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaSubmission}.
*
* User submitter of the submission
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.User} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.MediaSubmission} |
* | **Path** | `MediaSubmission.submitter` |
* | **Nullability** | Optional |
*/
export interface submitter {
kind: "OutputField",
name: "submitter",
arguments: {},
inlineType: [0, ],
namedType: $Schema.User
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaSubmission}.
*
* Data Mod assigned to handle the submission
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.User} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.MediaSubmission} |
* | **Path** | `MediaSubmission.assignee` |
* | **Nullability** | Optional |
*/
export interface assignee {
kind: "OutputField",
name: "assignee",
arguments: {},
inlineType: [0, ],
namedType: $Schema.User
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaSubmission}.
*
* Status of the submission
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.SubmissionStatus} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Parent** | {@link $Schema.MediaSubmission} |
* | **Path** | `MediaSubmission.status` |
* | **Nullability** | Optional |
*/
export interface status {
kind: "OutputField",
name: "status",
arguments: {},
inlineType: [0, ],
namedType: $Schema.SubmissionStatus
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaSubmission}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Json} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
* | **Parent** | {@link $Schema.MediaSubmission} |
* | **Path** | `MediaSubmission.submitterStats` |
* | **Nullability** | Optional |
*/
export interface submitterStats {
kind: "OutputField",
name: "submitterStats",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Json
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaSubmission}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaSubmission} |
* | **Path** | `MediaSubmission.notes` |
* | **Nullability** | Optional |
*/
export interface notes {
kind: "OutputField",
name: "notes",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaSubmission}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaSubmission} |
* | **Path** | `MediaSubmission.source` |
* | **Nullability** | Optional |
*/
export interface source {
kind: "OutputField",
name: "source",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaSubmission}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaSubmission} |
* | **Path** | `MediaSubmission.changes` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface changes {
kind: "OutputField",
name: "changes",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaSubmission}.
*
* Whether the submission is locked
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaSubmission} |
* | **Path** | `MediaSubmission.locked` |
* | **Nullability** | Optional |
*/
export interface locked {
kind: "OutputField",
name: "locked",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Boolean
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaSubmission}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Media} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.MediaSubmission} |
* | **Path** | `MediaSubmission.media` |
* | **Nullability** | Optional |
*/
export interface media {
kind: "OutputField",
name: "media",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Media
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaSubmission}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Media} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.MediaSubmission} |
* | **Path** | `MediaSubmission.submission` |
* | **Nullability** | Optional |
*/
export interface submission {
kind: "OutputField",
name: "submission",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Media
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaSubmission}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaSubmissionComparison}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.MediaSubmission} |
* | **Path** | `MediaSubmission.characters` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface characters {
kind: "OutputField",
name: "characters",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.MediaSubmissionComparison
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaSubmission}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaSubmissionComparison}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.MediaSubmission} |
* | **Path** | `MediaSubmission.staff` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface staff {
kind: "OutputField",
name: "staff",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.MediaSubmissionComparison
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaSubmission}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaSubmissionComparison}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.MediaSubmission} |
* | **Path** | `MediaSubmission.studios` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface studios {
kind: "OutputField",
name: "studios",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.MediaSubmissionComparison
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaSubmission}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaEdge}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.MediaSubmission} |
* | **Path** | `MediaSubmission.relations` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface relations {
kind: "OutputField",
name: "relations",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.MediaEdge
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaSubmission}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaSubmissionComparison}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.MediaSubmission} |
* | **Path** | `MediaSubmission.externalLinks` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface externalLinks {
kind: "OutputField",
name: "externalLinks",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.MediaSubmissionComparison
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaSubmission}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaSubmission} |
* | **Path** | `MediaSubmission.createdAt` |
* | **Nullability** | Optional |
*/
export interface createdAt {
kind: "OutputField",
name: "createdAt",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}
