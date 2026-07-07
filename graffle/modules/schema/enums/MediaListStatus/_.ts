import type * as $Members from './members.js'

export * as MediaListStatus from './members.js'

/**
* GraphQL {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.
*
* Media list watching/reading status enum.
*
* **Members:**
* - `CURRENT` - Currently watching/reading
* - `PLANNING` - Planning to watch/read
* - `COMPLETED` - Finished watching/reading
* - `DROPPED` - Stopped watching/reading before completing
* - `PAUSED` - Paused watching/reading
* - `REPEATING` - Re-watching/reading
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Members** | 6 |
*/
export interface MediaListStatus {
kind: "Enum",
name: "MediaListStatus",
members: $Members.CURRENT
| $Members.PLANNING
| $Members.COMPLETED
| $Members.DROPPED
| $Members.PAUSED
| $Members.REPEATING
}