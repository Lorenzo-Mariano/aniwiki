import type * as $Fields from './fields.js'

export * as ParsedMarkdown from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* Provides the parsed markdown as html
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 1 |
*/
export interface ParsedMarkdown {
kind: "Object",
name: "ParsedMarkdown",
fields: {
__typename: $Fields.__typename,
html: $Fields.html
}
}