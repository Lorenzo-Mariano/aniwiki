import type * as $Members from './members.js'

export * as MediaSort from './members.js'

/**
* GraphQL {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.
*
* Media sort enums
*
* **Members:**
* - `ID`
* - `ID_DESC`
* - `TITLE_ROMAJI`
* - `TITLE_ROMAJI_DESC`
* - `TITLE_ENGLISH`
* - `TITLE_ENGLISH_DESC`
* - `TITLE_NATIVE`
* - `TITLE_NATIVE_DESC`
* - `TYPE`
* - `TYPE_DESC`
* - `FORMAT`
* - `FORMAT_DESC`
* - `START_DATE`
* - `START_DATE_DESC`
* - `END_DATE`
* - `END_DATE_DESC`
* - `SCORE`
* - `SCORE_DESC`
* - `POPULARITY`
* - `POPULARITY_DESC`
* - `TRENDING`
* - `TRENDING_DESC`
* - `EPISODES`
* - `EPISODES_DESC`
* - `DURATION`
* - `DURATION_DESC`
* - `STATUS`
* - `STATUS_DESC`
* - `CHAPTERS`
* - `CHAPTERS_DESC`
* - `VOLUMES`
* - `VOLUMES_DESC`
* - `UPDATED_AT`
* - `UPDATED_AT_DESC`
* - `SEARCH_MATCH`
* - `FAVOURITES`
* - `FAVOURITES_DESC`
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Members** | 37 |
*/
export interface MediaSort {
kind: "Enum",
name: "MediaSort",
members: $Members.ID
| $Members.ID_DESC
| $Members.TITLE_ROMAJI
| $Members.TITLE_ROMAJI_DESC
| $Members.TITLE_ENGLISH
| $Members.TITLE_ENGLISH_DESC
| $Members.TITLE_NATIVE
| $Members.TITLE_NATIVE_DESC
| $Members.TYPE
| $Members.TYPE_DESC
| $Members.FORMAT
| $Members.FORMAT_DESC
| $Members.START_DATE
| $Members.START_DATE_DESC
| $Members.END_DATE
| $Members.END_DATE_DESC
| $Members.SCORE
| $Members.SCORE_DESC
| $Members.POPULARITY
| $Members.POPULARITY_DESC
| $Members.TRENDING
| $Members.TRENDING_DESC
| $Members.EPISODES
| $Members.EPISODES_DESC
| $Members.DURATION
| $Members.DURATION_DESC
| $Members.STATUS
| $Members.STATUS_DESC
| $Members.CHAPTERS
| $Members.CHAPTERS_DESC
| $Members.VOLUMES
| $Members.VOLUMES_DESC
| $Members.UPDATED_AT
| $Members.UPDATED_AT_DESC
| $Members.SEARCH_MATCH
| $Members.FAVOURITES
| $Members.FAVOURITES_DESC
}