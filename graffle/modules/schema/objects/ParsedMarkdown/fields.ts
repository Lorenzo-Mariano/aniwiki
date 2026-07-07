import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"ParsedMarkdown"`
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
value: "ParsedMarkdown"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ParsedMarkdown}.
*
* The parsed markdown as html
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.ParsedMarkdown} |
* | **Path** | `ParsedMarkdown.html` |
* | **Nullability** | Optional |
*/
export interface html {
kind: "OutputField",
name: "html",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}
