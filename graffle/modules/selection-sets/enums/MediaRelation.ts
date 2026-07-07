/**
* Values for {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.
*
* Type of relation media has to its parent.
*
* **Members:**
* - `ADAPTATION` - An adaption of this media into a different format
* - `PREQUEL` - Released before the relation
* - `SEQUEL` - Released after the relation
* - `PARENT` - The media a side story is from
* - `SIDE_STORY` - A side story of the parent media
* - `CHARACTER` - Shares at least 1 character
* - `SUMMARY` - A shortened and summarized version
* - `ALTERNATIVE` - An alternative version of the same media
* - `SPIN_OFF` - An alternative version of the media with a different primary focus
* - `OTHER` - Other
* - `SOURCE` - Version 2 only. The source material the media was adapted from
* - `COMPILATION` - Version 2 only.
* - `CONTAINS` - Version 2 only.
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Members** | 13 |
*/
export type MediaRelation = "ADAPTATION"
| "PREQUEL"
| "SEQUEL"
| "PARENT"
| "SIDE_STORY"
| "CHARACTER"
| "SUMMARY"
| "ALTERNATIVE"
| "SPIN_OFF"
| "OTHER"
| "SOURCE"
| "COMPILATION"
| "CONTAINS"