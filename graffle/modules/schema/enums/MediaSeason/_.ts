import type * as $Members from './members.js'

export * as MediaSeason from './members.js'

/**
* GraphQL {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.
*
* **Members:**
* - `WINTER` - Predominantly started airing between January and March
* - `SPRING` - Predominantly started airing between April and June
* - `SUMMER` - Predominantly started airing between July and September
* - `FALL` - Predominantly started airing between October and November
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Members** | 4 |
*/
export interface MediaSeason {
kind: "Enum",
name: "MediaSeason",
members: $Members.WINTER
| $Members.SPRING
| $Members.SUMMER
| $Members.FALL
}