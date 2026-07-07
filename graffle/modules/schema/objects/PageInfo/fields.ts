import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"PageInfo"`
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
value: "PageInfo"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.PageInfo}.
*
* The total number of items. Note: This value is not guaranteed to be accurate, do not rely on this for logic
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.PageInfo} |
* | **Path** | `PageInfo.total` |
* | **Nullability** | Optional |
*/
export interface total {
kind: "OutputField",
name: "total",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.PageInfo}.
*
* The count on a page
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.PageInfo} |
* | **Path** | `PageInfo.perPage` |
* | **Nullability** | Optional |
*/
export interface perPage {
kind: "OutputField",
name: "perPage",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.PageInfo}.
*
* The current page
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.PageInfo} |
* | **Path** | `PageInfo.currentPage` |
* | **Nullability** | Optional |
*/
export interface currentPage {
kind: "OutputField",
name: "currentPage",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.PageInfo}.
*
* The last page
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.PageInfo} |
* | **Path** | `PageInfo.lastPage` |
* | **Nullability** | Optional |
*/
export interface lastPage {
kind: "OutputField",
name: "lastPage",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.PageInfo}.
*
* If there is another page
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.PageInfo} |
* | **Path** | `PageInfo.hasNextPage` |
* | **Nullability** | Optional |
*/
export interface hasNextPage {
kind: "OutputField",
name: "hasNextPage",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Boolean
}
