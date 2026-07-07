import type { TextActivity } from '../objects/TextActivity/_.js'
import type { ListActivity } from '../objects/ListActivity/_.js'
import type { MessageActivity } from '../objects/MessageActivity/_.js'

/**
* GraphQL {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union}.
*
* Activity union type
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
* | **Members** | 3 |
* | **Types** | {@link $Schema.TextActivity}, {@link $Schema.ListActivity}, {@link $Schema.MessageActivity} |
*/
export interface ActivityUnion {
kind: "Union",
name: "ActivityUnion",
members: [TextActivity, ListActivity, MessageActivity],
membersUnion: TextActivity
| ListActivity
| MessageActivity,
membersIndex: {
TextActivity: TextActivity,
ListActivity: ListActivity,
MessageActivity: MessageActivity
}
}