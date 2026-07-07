import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"Studio"`
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
value: "Studio"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Studio}.
*
* The id of the studio
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Studio} |
* | **Path** | `Studio.id` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Studio}.
*
* The name of the studio
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Studio} |
* | **Path** | `Studio.name` |
* | **Nullability** | Required |
*/
export interface name {
kind: "OutputField",
name: "name",
arguments: {},
inlineType: [1, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Studio}.
*
* If the studio is an animation studio or a different kind of company
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Boolean}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Studio} |
* | **Path** | `Studio.isAnimationStudio` |
* | **Nullability** | Required |
*/
export interface isAnimationStudio {
kind: "OutputField",
name: "isAnimationStudio",
arguments: {},
inlineType: [1, ],
namedType: $Schema.Boolean
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Studio}.
*
* The media the studio has worked on
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaConnection} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Studio} |
* | **Path** | `Studio.media` |
* | **Nullability** | Optional |
* | **Arguments** | 5 |
*/
export interface media {
kind: "OutputField",
name: "media",
arguments: {
/**
* The order the results will be returned in
*/
sort: {
kind: "InputField",
name: "sort",
inlineType: [0, [0, ]],
namedType: $Schema.MediaSort
},
/**
* If the studio was the primary animation studio of the media
*/
isMain: {
kind: "InputField",
name: "isMain",
inlineType: [0, ],
namedType: $Schema.Boolean
},
onList: {
kind: "InputField",
name: "onList",
inlineType: [0, ],
namedType: $Schema.Boolean
},
/**
* The page
*/
page: {
kind: "InputField",
name: "page",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* The amount of entries per page, max 25
*/
perPage: {
kind: "InputField",
name: "perPage",
inlineType: [0, ],
namedType: $Schema.Int
}
},
inlineType: [0, ],
namedType: $Schema.MediaConnection
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Studio}.
*
* The url for the studio page on the AniList website
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Studio} |
* | **Path** | `Studio.siteUrl` |
* | **Nullability** | Optional |
*/
export interface siteUrl {
kind: "OutputField",
name: "siteUrl",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Studio}.
*
* If the studio is marked as favourite by the currently authenticated user
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Boolean}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Studio} |
* | **Path** | `Studio.isFavourite` |
* | **Nullability** | Required |
*/
export interface isFavourite {
kind: "OutputField",
name: "isFavourite",
arguments: {},
inlineType: [1, ],
namedType: $Schema.Boolean
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Studio}.
*
* The amount of user's who have favourited the studio
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Studio} |
* | **Path** | `Studio.favourites` |
* | **Nullability** | Optional |
*/
export interface favourites {
kind: "OutputField",
name: "favourites",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}
