import type * as $Fields from './fields.js'

export * as SiteStatistics from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 7 |
*/
export interface SiteStatistics {
kind: "Object",
name: "SiteStatistics",
fields: {
__typename: $Fields.__typename,
users: $Fields.users,
anime: $Fields.anime,
manga: $Fields.manga,
characters: $Fields.characters,
staff: $Fields.staff,
studios: $Fields.studios,
reviews: $Fields.reviews
}
}