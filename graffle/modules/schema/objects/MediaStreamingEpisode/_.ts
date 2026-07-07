import type * as $Fields from './fields.js'

export * as MediaStreamingEpisode from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* Data and links to legal streaming episodes on external sites
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 4 |
*/
export interface MediaStreamingEpisode {
kind: "Object",
name: "MediaStreamingEpisode",
fields: {
__typename: $Fields.__typename,
title: $Fields.title,
thumbnail: $Fields.thumbnail,
url: $Fields.url,
site: $Fields.site
}
}