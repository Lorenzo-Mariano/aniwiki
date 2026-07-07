import type * as $Members from './members.js'

export * as MediaSource from './members.js'

/**
* GraphQL {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.
*
* Source type the media was adapted from
*
* **Members:**
* - `ORIGINAL` - An original production not based of another work
* - `MANGA` - Asian comic book
* - `LIGHT_NOVEL` - Written work published in volumes
* - `VISUAL_NOVEL` - Video game driven primary by text and narrative
* - `VIDEO_GAME` - Video game
* - `OTHER` - Other
* - `NOVEL` - Version 2+ only. Written works not published in volumes
* - `DOUJINSHI` - Version 2+ only. Self-published works
* - `ANIME` - Version 2+ only. Japanese Anime
* - `WEB_NOVEL` - Version 3 only. Written works published online
* - `LIVE_ACTION` - Version 3 only. Live action media such as movies or TV show
* - `GAME` - Version 3 only. Games excluding video games
* - `COMIC` - Version 3 only. Comics excluding manga
* - `MULTIMEDIA_PROJECT` - Version 3 only. Multimedia project
* - `PICTURE_BOOK` - Version 3 only. Picture book
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Members** | 15 |
*/
export interface MediaSource {
kind: "Enum",
name: "MediaSource",
members: $Members.ORIGINAL
| $Members.MANGA
| $Members.LIGHT_NOVEL
| $Members.VISUAL_NOVEL
| $Members.VIDEO_GAME
| $Members.OTHER
| $Members.NOVEL
| $Members.DOUJINSHI
| $Members.ANIME
| $Members.WEB_NOVEL
| $Members.LIVE_ACTION
| $Members.GAME
| $Members.COMIC
| $Members.MULTIMEDIA_PROJECT
| $Members.PICTURE_BOOK
}