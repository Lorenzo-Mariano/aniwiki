import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"MediaCoverImage"`
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
value: "MediaCoverImage"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaCoverImage}.
*
* The cover image url of the media at its largest size. If this size isn't available, large will be provided instead.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaCoverImage} |
* | **Path** | `MediaCoverImage.extraLarge` |
* | **Nullability** | Optional |
*/
export interface extraLarge {
kind: "OutputField",
name: "extraLarge",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaCoverImage}.
*
* The cover image url of the media at a large size
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaCoverImage} |
* | **Path** | `MediaCoverImage.large` |
* | **Nullability** | Optional |
*/
export interface large {
kind: "OutputField",
name: "large",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaCoverImage}.
*
* The cover image url of the media at medium size
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaCoverImage} |
* | **Path** | `MediaCoverImage.medium` |
* | **Nullability** | Optional |
*/
export interface medium {
kind: "OutputField",
name: "medium",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.MediaCoverImage}.
*
* Average #hex color of cover image
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.MediaCoverImage} |
* | **Path** | `MediaCoverImage.color` |
* | **Nullability** | Optional |
*/
export interface color {
kind: "OutputField",
name: "color",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}
