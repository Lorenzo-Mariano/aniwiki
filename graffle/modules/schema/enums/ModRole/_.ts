import type * as $Members from './members.js'

export * as ModRole from './members.js'

/**
* GraphQL {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.
*
* Mod role enums
*
* **Members:**
* - `ADMIN` - An AniList administrator
* - `LEAD_DEVELOPER` - A head developer of AniList
* - `DEVELOPER` - An AniList developer
* - `LEAD_COMMUNITY` - A lead community moderator
* - `COMMUNITY` - A community moderator
* - `DISCORD_COMMUNITY` - A discord community moderator
* - `LEAD_ANIME_DATA` - A lead anime data moderator
* - `ANIME_DATA` - An anime data moderator
* - `LEAD_MANGA_DATA` - A lead manga data moderator
* - `MANGA_DATA` - A manga data moderator
* - `LEAD_SOCIAL_MEDIA` - A lead social media moderator
* - `SOCIAL_MEDIA` - A social media moderator
* - `RETIRED` - A retired moderator
* - `CHARACTER_DATA` - A character data moderator
* - `STAFF_DATA` - A staff data moderator
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Members** | 15 |
*/
export interface ModRole {
kind: "Enum",
name: "ModRole",
members: $Members.ADMIN
| $Members.LEAD_DEVELOPER
| $Members.DEVELOPER
| $Members.LEAD_COMMUNITY
| $Members.COMMUNITY
| $Members.DISCORD_COMMUNITY
| $Members.LEAD_ANIME_DATA
| $Members.ANIME_DATA
| $Members.LEAD_MANGA_DATA
| $Members.MANGA_DATA
| $Members.LEAD_SOCIAL_MEDIA
| $Members.SOCIAL_MEDIA
| $Members.RETIRED
| $Members.CHARACTER_DATA
| $Members.STAFF_DATA
}