import type * as $Fields from './fields.js'

export * as MediaTrailer from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* Media trailer or advertisement
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 3 |
*/
export interface MediaTrailer {
kind: "Object",
name: "MediaTrailer",
fields: {
__typename: $Fields.__typename,
id: $Fields.id,
site: $Fields.site,
thumbnail: $Fields.thumbnail
}
}