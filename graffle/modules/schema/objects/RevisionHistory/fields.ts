import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"RevisionHistory"`
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
value: "RevisionHistory"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.RevisionHistory}.
*
* The id of the media
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.RevisionHistory} |
* | **Path** | `RevisionHistory.id` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.RevisionHistory}.
*
* The action taken on the objects
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.RevisionHistoryAction} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Parent** | {@link $Schema.RevisionHistory} |
* | **Path** | `RevisionHistory.action` |
* | **Nullability** | Optional |
*/
export interface action {
kind: "OutputField",
name: "action",
arguments: {},
inlineType: [0, ],
namedType: $Schema.RevisionHistoryAction
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.RevisionHistory}.
*
* A JSON object of the fields that changed
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Json} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
* | **Parent** | {@link $Schema.RevisionHistory} |
* | **Path** | `RevisionHistory.changes` |
* | **Nullability** | Optional |
*/
export interface changes {
kind: "OutputField",
name: "changes",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Json
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.RevisionHistory}.
*
* The user who made the edit to the object
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.User} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.RevisionHistory} |
* | **Path** | `RevisionHistory.user` |
* | **Nullability** | Optional |
*/
export interface user {
kind: "OutputField",
name: "user",
arguments: {},
inlineType: [0, ],
namedType: $Schema.User
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.RevisionHistory}.
*
* The media the mod feed entry references
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Media} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.RevisionHistory} |
* | **Path** | `RevisionHistory.media` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.RevisionHistory}.
*
* The character the mod feed entry references
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Character} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.RevisionHistory} |
* | **Path** | `RevisionHistory.character` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.RevisionHistory}.
*
* The staff member the mod feed entry references
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Staff} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.RevisionHistory} |
* | **Path** | `RevisionHistory.staff` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.RevisionHistory}.
*
* The studio the mod feed entry references
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Studio} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.RevisionHistory} |
* | **Path** | `RevisionHistory.studio` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.RevisionHistory}.
*
* The external link source the mod feed entry references
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaExternalLink} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.RevisionHistory} |
* | **Path** | `RevisionHistory.externalLink` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.RevisionHistory}.
*
* When the mod feed entry was created
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.RevisionHistory} |
* | **Path** | `RevisionHistory.createdAt` |
* | **Nullability** | Optional |
*/
export interface createdAt {
kind: "OutputField",
name: "createdAt",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}
