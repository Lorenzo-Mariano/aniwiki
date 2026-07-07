/**
* Values for {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.
*
* The current releasing status of the media
*
* **Members:**
* - `FINISHED` - Has completed and is no longer being released
* - `RELEASING` - Currently releasing
* - `NOT_YET_RELEASED` - To be released at a later date
* - `CANCELLED` - Ended before the work could be finished
* - `HIATUS` - Version 2 only. Is currently paused from releasing and will resume at a later date
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Members** | 5 |
*/
export type MediaStatus = "FINISHED"
| "RELEASING"
| "NOT_YET_RELEASED"
| "CANCELLED"
| "HIATUS"