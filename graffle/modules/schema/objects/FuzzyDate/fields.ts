import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"FuzzyDate"`
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
value: "FuzzyDate"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.FuzzyDate}.
*
* Numeric Year (2017)
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.FuzzyDate} |
* | **Path** | `FuzzyDate.year` |
* | **Nullability** | Optional |
*/
export interface year {
kind: "OutputField",
name: "year",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.FuzzyDate}.
*
* Numeric Month (3)
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.FuzzyDate} |
* | **Path** | `FuzzyDate.month` |
* | **Nullability** | Optional |
*/
export interface month {
kind: "OutputField",
name: "month",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.FuzzyDate}.
*
* Numeric Day (24)
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.FuzzyDate} |
* | **Path** | `FuzzyDate.day` |
* | **Nullability** | Optional |
*/
export interface day {
kind: "OutputField",
name: "day",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}
