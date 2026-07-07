import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"StaffName"`
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
value: "StaffName"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.StaffName}.
*
* The person's given name
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.StaffName} |
* | **Path** | `StaffName.first` |
* | **Nullability** | Optional |
*/
export interface first {
kind: "OutputField",
name: "first",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.StaffName}.
*
* The person's middle name
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.StaffName} |
* | **Path** | `StaffName.middle` |
* | **Nullability** | Optional |
*/
export interface middle {
kind: "OutputField",
name: "middle",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.StaffName}.
*
* The person's surname
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.StaffName} |
* | **Path** | `StaffName.last` |
* | **Nullability** | Optional |
*/
export interface last {
kind: "OutputField",
name: "last",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.StaffName}.
*
* The person's first and last name
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.StaffName} |
* | **Path** | `StaffName.full` |
* | **Nullability** | Optional |
*/
export interface full {
kind: "OutputField",
name: "full",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.StaffName}.
*
* The person's full name in their native language
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.StaffName} |
* | **Path** | `StaffName.native` |
* | **Nullability** | Optional |
*/
export interface native {
kind: "OutputField",
name: "native",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.StaffName}.
*
* Other names the staff member might be referred to as (pen names)
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.StaffName} |
* | **Path** | `StaffName.alternative` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface alternative {
kind: "OutputField",
name: "alternative",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.StaffName}.
*
* The currently authenticated users preferred name language. Default romaji for non-authenticated
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.StaffName} |
* | **Path** | `StaffName.userPreferred` |
* | **Nullability** | Optional |
*/
export interface userPreferred {
kind: "OutputField",
name: "userPreferred",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}
