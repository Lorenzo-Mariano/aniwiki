import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#input-types | input field} ↗ on type {@link $Schema.FuzzyDateInput}.
*
* Numeric Year (2017)
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.FuzzyDateInput} |
* | **Path** | `FuzzyDateInput.year` |
* | **Nullability** | Optional |
*/
export interface year {
kind: "InputField",
name: "year",
inlineType: [0, ],
namedType: $Schema.Int,
type: $Schema.Int['codec']['_typeDecoded'] | null | undefined
}
/**
* GraphQL {@link https://graphql.org/learn/schema/#input-types | input field} ↗ on type {@link $Schema.FuzzyDateInput}.
*
* Numeric Month (3)
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.FuzzyDateInput} |
* | **Path** | `FuzzyDateInput.month` |
* | **Nullability** | Optional |
*/
export interface month {
kind: "InputField",
name: "month",
inlineType: [0, ],
namedType: $Schema.Int,
type: $Schema.Int['codec']['_typeDecoded'] | null | undefined
}
/**
* GraphQL {@link https://graphql.org/learn/schema/#input-types | input field} ↗ on type {@link $Schema.FuzzyDateInput}.
*
* Numeric Day (24)
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.FuzzyDateInput} |
* | **Path** | `FuzzyDateInput.day` |
* | **Nullability** | Optional |
*/
export interface day {
kind: "InputField",
name: "day",
inlineType: [0, ],
namedType: $Schema.Int,
type: $Schema.Int['codec']['_typeDecoded'] | null | undefined
}