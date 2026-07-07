import type * as $Fields from './fields.js'

export * as MediaExternalLinkInput from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#input-types | InputObject}.
*
* An external link to another site related to the media
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinputobjecttype | InputObject ↗} |
* | **Fields** | 3 |
* | **All Fields Nullable** | No |
*/
export interface MediaExternalLinkInput {
kind: "InputObject",
name: "MediaExternalLinkInput",
isAllFieldsNullable: false,
fields: {
id: $Fields.id,
url: $Fields.url,
site: $Fields.site
},
type: {
id: $Fields.id['type'],
url: $Fields.url['type'],
site: $Fields.site['type']
}
}