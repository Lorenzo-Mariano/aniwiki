import type * as $Members from './members.js'

export * as StaffLanguage from './members.js'

/**
* GraphQL {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.
*
* The primary language of the voice actor
*
* **Members:**
* - `JAPANESE` - Japanese
* - `ENGLISH` - English
* - `KOREAN` - Korean
* - `ITALIAN` - Italian
* - `SPANISH` - Spanish
* - `PORTUGUESE` - Portuguese
* - `FRENCH` - French
* - `GERMAN` - German
* - `HEBREW` - Hebrew
* - `HUNGARIAN` - Hungarian
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Members** | 10 |
*/
export interface StaffLanguage {
kind: "Enum",
name: "StaffLanguage",
members: $Members.JAPANESE
| $Members.ENGLISH
| $Members.KOREAN
| $Members.ITALIAN
| $Members.SPANISH
| $Members.PORTUGUESE
| $Members.FRENCH
| $Members.GERMAN
| $Members.HEBREW
| $Members.HUNGARIAN
}