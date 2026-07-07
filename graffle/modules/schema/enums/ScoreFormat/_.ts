import type * as $Members from './members.js'

export * as ScoreFormat from './members.js'

/**
* GraphQL {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.
*
* Media list scoring type
*
* **Members:**
* - `POINT_100` - An integer from 0-100
* - `POINT_10_DECIMAL` - A float from 0-10 with 1 decimal place
* - `POINT_10` - An integer from 0-10
* - `POINT_5` - An integer from 0-5. Should be represented in Stars
* - `POINT_3` - An integer from 0-3. Should be represented in Smileys. 0 => No Score, 1 => :(, 2 => :|, 3 => :)
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Members** | 5 |
*/
export interface ScoreFormat {
kind: "Enum",
name: "ScoreFormat",
members: $Members.POINT_100
| $Members.POINT_10_DECIMAL
| $Members.POINT_10
| $Members.POINT_5
| $Members.POINT_3
}