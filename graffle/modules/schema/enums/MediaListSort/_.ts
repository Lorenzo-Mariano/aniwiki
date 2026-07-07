import type * as $Members from './members.js'

export * as MediaListSort from './members.js'

/**
* GraphQL {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.
*
* Media list sort enums
*
* **Members:**
* - `MEDIA_ID`
* - `MEDIA_ID_DESC`
* - `SCORE`
* - `SCORE_DESC`
* - `STATUS`
* - `STATUS_DESC`
* - `PROGRESS`
* - `PROGRESS_DESC`
* - `PROGRESS_VOLUMES`
* - `PROGRESS_VOLUMES_DESC`
* - `REPEAT`
* - `REPEAT_DESC`
* - `PRIORITY`
* - `PRIORITY_DESC`
* - `STARTED_ON`
* - `STARTED_ON_DESC`
* - `FINISHED_ON`
* - `FINISHED_ON_DESC`
* - `ADDED_TIME`
* - `ADDED_TIME_DESC`
* - `UPDATED_TIME`
* - `UPDATED_TIME_DESC`
* - `MEDIA_TITLE_ROMAJI`
* - `MEDIA_TITLE_ROMAJI_DESC`
* - `MEDIA_TITLE_ENGLISH`
* - `MEDIA_TITLE_ENGLISH_DESC`
* - `MEDIA_TITLE_NATIVE`
* - `MEDIA_TITLE_NATIVE_DESC`
* - `MEDIA_POPULARITY`
* - `MEDIA_POPULARITY_DESC`
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Members** | 30 |
*/
export interface MediaListSort {
kind: "Enum",
name: "MediaListSort",
members: $Members.MEDIA_ID
| $Members.MEDIA_ID_DESC
| $Members.SCORE
| $Members.SCORE_DESC
| $Members.STATUS
| $Members.STATUS_DESC
| $Members.PROGRESS
| $Members.PROGRESS_DESC
| $Members.PROGRESS_VOLUMES
| $Members.PROGRESS_VOLUMES_DESC
| $Members.REPEAT
| $Members.REPEAT_DESC
| $Members.PRIORITY
| $Members.PRIORITY_DESC
| $Members.STARTED_ON
| $Members.STARTED_ON_DESC
| $Members.FINISHED_ON
| $Members.FINISHED_ON_DESC
| $Members.ADDED_TIME
| $Members.ADDED_TIME_DESC
| $Members.UPDATED_TIME
| $Members.UPDATED_TIME_DESC
| $Members.MEDIA_TITLE_ROMAJI
| $Members.MEDIA_TITLE_ROMAJI_DESC
| $Members.MEDIA_TITLE_ENGLISH
| $Members.MEDIA_TITLE_ENGLISH_DESC
| $Members.MEDIA_TITLE_NATIVE
| $Members.MEDIA_TITLE_NATIVE_DESC
| $Members.MEDIA_POPULARITY
| $Members.MEDIA_POPULARITY_DESC
}