import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"MediaSubmissionComparison"`
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
value: "MediaSubmissionComparison"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaSubmissionComparison}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaSubmissionEdge} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.MediaSubmissionComparison} |
* | **Path** | `MediaSubmissionComparison.submission` |
* | **Nullability** | Optional |
*/
export interface submission {
kind: "OutputField",
name: "submission",
arguments: {},
inlineType: [0, ],
namedType: $Schema.MediaSubmissionEdge
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaSubmissionComparison}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaCharacter} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.MediaSubmissionComparison} |
* | **Path** | `MediaSubmissionComparison.character` |
* | **Nullability** | Optional |
*/
export interface character {
kind: "OutputField",
name: "character",
arguments: {},
inlineType: [0, ],
namedType: $Schema.MediaCharacter
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaSubmissionComparison}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.StaffEdge} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.MediaSubmissionComparison} |
* | **Path** | `MediaSubmissionComparison.staff` |
* | **Nullability** | Optional |
*/
export interface staff {
kind: "OutputField",
name: "staff",
arguments: {},
inlineType: [0, ],
namedType: $Schema.StaffEdge
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaSubmissionComparison}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.StudioEdge} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.MediaSubmissionComparison} |
* | **Path** | `MediaSubmissionComparison.studio` |
* | **Nullability** | Optional |
*/
export interface studio {
kind: "OutputField",
name: "studio",
arguments: {},
inlineType: [0, ],
namedType: $Schema.StudioEdge
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaSubmissionComparison}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaExternalLink} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.MediaSubmissionComparison} |
* | **Path** | `MediaSubmissionComparison.externalLink` |
* | **Nullability** | Optional |
*/
export interface externalLink {
kind: "OutputField",
name: "externalLink",
arguments: {},
inlineType: [0, ],
namedType: $Schema.MediaExternalLink
}
