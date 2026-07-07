import type * as $Members from './members.js'

export * as UserTitleLanguage from './members.js'

/**
* GraphQL {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.
*
* The language the user wants to see media titles in
*
* **Members:**
* - `ROMAJI` - The romanization of the native language title
* - `ENGLISH` - The official english title
* - `NATIVE` - Official title in it's native language
* - `ROMAJI_STYLISED` - The romanization of the native language title, stylised by media creator
* - `ENGLISH_STYLISED` - The official english title, stylised by media creator
* - `NATIVE_STYLISED` - Official title in it's native language, stylised by media creator
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Members** | 6 |
*/
export interface UserTitleLanguage {
kind: "Enum",
name: "UserTitleLanguage",
members: $Members.ROMAJI
| $Members.ENGLISH
| $Members.NATIVE
| $Members.ROMAJI_STYLISED
| $Members.ENGLISH_STYLISED
| $Members.NATIVE_STYLISED
}