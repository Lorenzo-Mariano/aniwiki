import type * as $Fields from './fields.js'

export * as UserModData from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* User data for moderators
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 6 |
*/
export interface UserModData {
kind: "Object",
name: "UserModData",
fields: {
__typename: $Fields.__typename,
alts: $Fields.alts,
bans: $Fields.bans,
ip: $Fields.ip,
counts: $Fields.counts,
privacy: $Fields.privacy,
email: $Fields.email
}
}