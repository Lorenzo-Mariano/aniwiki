import type * as $Members from './members.js'

export * as MediaFormat from './members.js'

/**
* GraphQL {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.
*
* The format the media was released in
*
* **Members:**
* - `TV` - Anime broadcast on television
* - `TV_SHORT` - Anime which are under 15 minutes in length and broadcast on television
* - `MOVIE` - Anime movies with a theatrical release
* - `SPECIAL` - Special episodes that have been included in DVD/Blu-ray releases, picture dramas, pilots, etc
* - `OVA` - (Original Video Animation) Anime that have been released directly on
* DVD/Blu-ray without originally going through a theatrical release or
* television broadcast
* - `ONA` - (Original Net Animation) Anime that have been originally released online or are only available through streaming services.
* - `MUSIC` - Short anime released as a music video
* - `MANGA` - Professionally published manga with more than one chapter
* - `NOVEL` - Written books released as a series of light novels
* - `ONE_SHOT` - Manga with just one chapter
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Members** | 10 |
*/
export interface MediaFormat {
kind: "Enum",
name: "MediaFormat",
members: $Members.TV
| $Members.TV_SHORT
| $Members.MOVIE
| $Members.SPECIAL
| $Members.OVA
| $Members.ONA
| $Members.MUSIC
| $Members.MANGA
| $Members.NOVEL
| $Members.ONE_SHOT
}