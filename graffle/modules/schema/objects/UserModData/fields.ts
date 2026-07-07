import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"UserModData"`
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
value: "UserModData"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserModData}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.User}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.UserModData} |
* | **Path** | `UserModData.alts` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface alts {
kind: "OutputField",
name: "alts",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.User
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserModData}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Json} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
* | **Parent** | {@link $Schema.UserModData} |
* | **Path** | `UserModData.bans` |
* | **Nullability** | Optional |
*/
export interface bans {
kind: "OutputField",
name: "bans",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Json
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserModData}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Json} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
* | **Parent** | {@link $Schema.UserModData} |
* | **Path** | `UserModData.ip` |
* | **Nullability** | Optional |
*/
export interface ip {
kind: "OutputField",
name: "ip",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Json
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserModData}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Json} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
* | **Parent** | {@link $Schema.UserModData} |
* | **Path** | `UserModData.counts` |
* | **Nullability** | Optional |
*/
export interface counts {
kind: "OutputField",
name: "counts",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Json
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserModData}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.UserModData} |
* | **Path** | `UserModData.privacy` |
* | **Nullability** | Optional |
*/
export interface privacy {
kind: "OutputField",
name: "privacy",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.UserModData}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.UserModData} |
* | **Path** | `UserModData.email` |
* | **Nullability** | Optional |
*/
export interface email {
kind: "OutputField",
name: "email",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}
