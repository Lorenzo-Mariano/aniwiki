import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"StudioEdge"`
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
value: "StudioEdge"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.StudioEdge}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Studio} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.StudioEdge} |
* | **Path** | `StudioEdge.node` |
* | **Nullability** | Optional |
*/
export interface node {
kind: "OutputField",
name: "node",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Studio
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.StudioEdge}.
*
* The id of the connection
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.StudioEdge} |
* | **Path** | `StudioEdge.id` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.StudioEdge}.
*
* If the studio is the main animation studio of the anime
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Boolean}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.StudioEdge} |
* | **Path** | `StudioEdge.isMain` |
* | **Nullability** | Required |
*/
export interface isMain {
kind: "OutputField",
name: "isMain",
arguments: {},
inlineType: [1, ],
namedType: $Schema.Boolean
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.StudioEdge}.
*
* The order the character should be displayed from the users favourites
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.StudioEdge} |
* | **Path** | `StudioEdge.favouriteOrder` |
* | **Nullability** | Optional |
*/
export interface favouriteOrder {
kind: "OutputField",
name: "favouriteOrder",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}
