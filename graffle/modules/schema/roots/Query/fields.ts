import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"Query"`
*
* {@link https://graphql.org/learn/queries/#meta-fields | GraphQL __typename documentation}
*/
export interface __typename {
kind: "OutputField",
name: "__typename",
arguments: {},
inlineType: [1],
namedType: {
kind: "__typename",
value: "Query"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Page} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Query} |
* | **Path** | `Query.Page` |
* | **Nullability** | Optional |
* | **Arguments** | 2 |
*/
export interface Page {
kind: "OutputField",
name: "Page",
arguments: {
/**
* The page number
*/
page: {
kind: "InputField",
name: "page",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* The amount of entries per page, max 50
*/
perPage: {
kind: "InputField",
name: "perPage",
inlineType: [0, ],
namedType: $Schema.Int
}
},
inlineType: [0, ],
namedType: $Schema.Page
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
*
* Media query
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Media} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Query} |
* | **Path** | `Query.Media` |
* | **Nullability** | Optional |
* | **Arguments** | 69 |
*/
export interface Media {
kind: "OutputField",
name: "Media",
arguments: {
/**
* Filter by the media id
*/
id: {
kind: "InputField",
name: "id",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by the media's MyAnimeList id
*/
idMal: {
kind: "InputField",
name: "idMal",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by the start date of the media
*/
startDate: {
kind: "InputField",
name: "startDate",
inlineType: [0, ],
namedType: $Schema.FuzzyDateInt
},
/**
* Filter by the end date of the media
*/
endDate: {
kind: "InputField",
name: "endDate",
inlineType: [0, ],
namedType: $Schema.FuzzyDateInt
},
/**
* Filter by the season the media was released in
*/
season: {
kind: "InputField",
name: "season",
inlineType: [0, ],
namedType: $Schema.MediaSeason
},
/**
* The year of the season (Winter 2017 would also include December 2016 releases). Requires season argument
*/
seasonYear: {
kind: "InputField",
name: "seasonYear",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by the media's type
*/
type: {
kind: "InputField",
name: "type",
inlineType: [0, ],
namedType: $Schema.MediaType
},
/**
* Filter by the media's format
*/
format: {
kind: "InputField",
name: "format",
inlineType: [0, ],
namedType: $Schema.MediaFormat
},
/**
* Filter by the media's current release status
*/
status: {
kind: "InputField",
name: "status",
inlineType: [0, ],
namedType: $Schema.MediaStatus
},
/**
* Filter by amount of episodes the media has
*/
episodes: {
kind: "InputField",
name: "episodes",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by the media's episode length
*/
duration: {
kind: "InputField",
name: "duration",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by the media's chapter count
*/
chapters: {
kind: "InputField",
name: "chapters",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by the media's volume count
*/
volumes: {
kind: "InputField",
name: "volumes",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by if the media's intended for 18+ adult audiences
*/
isAdult: {
kind: "InputField",
name: "isAdult",
inlineType: [0, ],
namedType: $Schema.Boolean
},
/**
* Filter by the media's genres
*/
genre: {
kind: "InputField",
name: "genre",
inlineType: [0, ],
namedType: $Schema.String
},
/**
* Filter by the media's tags
*/
tag: {
kind: "InputField",
name: "tag",
inlineType: [0, ],
namedType: $Schema.String
},
/**
* Only apply the tags filter argument to tags above this rank. Default: 18
*/
minimumTagRank: {
kind: "InputField",
name: "minimumTagRank",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by the media's tags with in a tag category
*/
tagCategory: {
kind: "InputField",
name: "tagCategory",
inlineType: [0, ],
namedType: $Schema.String
},
/**
* Filter by the media on the authenticated user's lists
*/
onList: {
kind: "InputField",
name: "onList",
inlineType: [0, ],
namedType: $Schema.Boolean
},
/**
* Filter media by sites name with a online streaming or reading license
*/
licensedBy: {
kind: "InputField",
name: "licensedBy",
inlineType: [0, ],
namedType: $Schema.String
},
/**
* Filter media by sites id with a online streaming or reading license
*/
licensedById: {
kind: "InputField",
name: "licensedById",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by the media's average score
*/
averageScore: {
kind: "InputField",
name: "averageScore",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by the number of users with this media on their list
*/
popularity: {
kind: "InputField",
name: "popularity",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by the source type of the media
*/
source: {
kind: "InputField",
name: "source",
inlineType: [0, ],
namedType: $Schema.MediaSource
},
/**
* Filter by the media's country of origin
*/
countryOfOrigin: {
kind: "InputField",
name: "countryOfOrigin",
inlineType: [0, ],
namedType: $Schema.CountryCode
},
/**
* If the media is officially licensed or a self-published doujin release
*/
isLicensed: {
kind: "InputField",
name: "isLicensed",
inlineType: [0, ],
namedType: $Schema.Boolean
},
/**
* Filter by search query
*/
search: {
kind: "InputField",
name: "search",
inlineType: [0, ],
namedType: $Schema.String
},
/**
* Filter by the media id
*/
id_not: {
kind: "InputField",
name: "id_not",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by the media id (max 10,000 items)
*/
id_in: {
kind: "InputField",
name: "id_in",
inlineType: [0, [0, ]],
namedType: $Schema.Int
},
/**
* Filter by the media id (max 10,000 items)
*/
id_not_in: {
kind: "InputField",
name: "id_not_in",
inlineType: [0, [0, ]],
namedType: $Schema.Int
},
/**
* Filter by the media's MyAnimeList id
*/
idMal_not: {
kind: "InputField",
name: "idMal_not",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by the media's MyAnimeList id (max 10,000 items)
*/
idMal_in: {
kind: "InputField",
name: "idMal_in",
inlineType: [0, [0, ]],
namedType: $Schema.Int
},
/**
* Filter by the media's MyAnimeList id (max 10,000 items)
*/
idMal_not_in: {
kind: "InputField",
name: "idMal_not_in",
inlineType: [0, [0, ]],
namedType: $Schema.Int
},
/**
* Filter by the start date of the media
*/
startDate_greater: {
kind: "InputField",
name: "startDate_greater",
inlineType: [0, ],
namedType: $Schema.FuzzyDateInt
},
/**
* Filter by the start date of the media
*/
startDate_lesser: {
kind: "InputField",
name: "startDate_lesser",
inlineType: [0, ],
namedType: $Schema.FuzzyDateInt
},
/**
* Filter by the start date of the media
*/
startDate_like: {
kind: "InputField",
name: "startDate_like",
inlineType: [0, ],
namedType: $Schema.String
},
/**
* Filter by the end date of the media
*/
endDate_greater: {
kind: "InputField",
name: "endDate_greater",
inlineType: [0, ],
namedType: $Schema.FuzzyDateInt
},
/**
* Filter by the end date of the media
*/
endDate_lesser: {
kind: "InputField",
name: "endDate_lesser",
inlineType: [0, ],
namedType: $Schema.FuzzyDateInt
},
/**
* Filter by the end date of the media
*/
endDate_like: {
kind: "InputField",
name: "endDate_like",
inlineType: [0, ],
namedType: $Schema.String
},
/**
* Filter by the media's format (max 10,000 items)
*/
format_in: {
kind: "InputField",
name: "format_in",
inlineType: [0, [0, ]],
namedType: $Schema.MediaFormat
},
/**
* Filter by the media's format
*/
format_not: {
kind: "InputField",
name: "format_not",
inlineType: [0, ],
namedType: $Schema.MediaFormat
},
/**
* Filter by the media's format (max 10,000 items)
*/
format_not_in: {
kind: "InputField",
name: "format_not_in",
inlineType: [0, [0, ]],
namedType: $Schema.MediaFormat
},
/**
* Filter by the media's current release status (max 10,000 items)
*/
status_in: {
kind: "InputField",
name: "status_in",
inlineType: [0, [0, ]],
namedType: $Schema.MediaStatus
},
/**
* Filter by the media's current release status
*/
status_not: {
kind: "InputField",
name: "status_not",
inlineType: [0, ],
namedType: $Schema.MediaStatus
},
/**
* Filter by the media's current release status (max 10,000 items)
*/
status_not_in: {
kind: "InputField",
name: "status_not_in",
inlineType: [0, [0, ]],
namedType: $Schema.MediaStatus
},
/**
* Filter by amount of episodes the media has
*/
episodes_greater: {
kind: "InputField",
name: "episodes_greater",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by amount of episodes the media has
*/
episodes_lesser: {
kind: "InputField",
name: "episodes_lesser",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by the media's episode length
*/
duration_greater: {
kind: "InputField",
name: "duration_greater",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by the media's episode length
*/
duration_lesser: {
kind: "InputField",
name: "duration_lesser",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by the media's chapter count
*/
chapters_greater: {
kind: "InputField",
name: "chapters_greater",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by the media's chapter count
*/
chapters_lesser: {
kind: "InputField",
name: "chapters_lesser",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by the media's volume count
*/
volumes_greater: {
kind: "InputField",
name: "volumes_greater",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by the media's volume count
*/
volumes_lesser: {
kind: "InputField",
name: "volumes_lesser",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by the media's genres (max 10,000 items)
*/
genre_in: {
kind: "InputField",
name: "genre_in",
inlineType: [0, [0, ]],
namedType: $Schema.String
},
/**
* Filter by the media's genres (max 10,000 items)
*/
genre_not_in: {
kind: "InputField",
name: "genre_not_in",
inlineType: [0, [0, ]],
namedType: $Schema.String
},
/**
* Filter by the media's tags (max 10,000 items)
*/
tag_in: {
kind: "InputField",
name: "tag_in",
inlineType: [0, [0, ]],
namedType: $Schema.String
},
/**
* Filter by the media's tags (max 10,000 items)
*/
tag_not_in: {
kind: "InputField",
name: "tag_not_in",
inlineType: [0, [0, ]],
namedType: $Schema.String
},
/**
* Filter by the media's tags with in a tag category (max 10,000 items)
*/
tagCategory_in: {
kind: "InputField",
name: "tagCategory_in",
inlineType: [0, [0, ]],
namedType: $Schema.String
},
/**
* Filter by the media's tags with in a tag category (max 10,000 items)
*/
tagCategory_not_in: {
kind: "InputField",
name: "tagCategory_not_in",
inlineType: [0, [0, ]],
namedType: $Schema.String
},
/**
* Filter media by sites name with a online streaming or reading license (max 10,000 items)
*/
licensedBy_in: {
kind: "InputField",
name: "licensedBy_in",
inlineType: [0, [0, ]],
namedType: $Schema.String
},
/**
* Filter media by sites id with a online streaming or reading license (max 10,000 items)
*/
licensedById_in: {
kind: "InputField",
name: "licensedById_in",
inlineType: [0, [0, ]],
namedType: $Schema.Int
},
/**
* Filter by the media's average score
*/
averageScore_not: {
kind: "InputField",
name: "averageScore_not",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by the media's average score
*/
averageScore_greater: {
kind: "InputField",
name: "averageScore_greater",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by the media's average score
*/
averageScore_lesser: {
kind: "InputField",
name: "averageScore_lesser",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by the number of users with this media on their list
*/
popularity_not: {
kind: "InputField",
name: "popularity_not",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by the number of users with this media on their list
*/
popularity_greater: {
kind: "InputField",
name: "popularity_greater",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by the number of users with this media on their list
*/
popularity_lesser: {
kind: "InputField",
name: "popularity_lesser",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by the source type of the media (max 10,000 items)
*/
source_in: {
kind: "InputField",
name: "source_in",
inlineType: [0, [0, ]],
namedType: $Schema.MediaSource
},
/**
* The order the results will be returned in
*/
sort: {
kind: "InputField",
name: "sort",
inlineType: [0, [0, ]],
namedType: $Schema.MediaSort
}
},
inlineType: [0, ],
namedType: $Schema.Media
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
*
* Media Trend query
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaTrend} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Query} |
* | **Path** | `Query.MediaTrend` |
* | **Nullability** | Optional |
* | **Arguments** | 25 |
*/
export interface MediaTrend {
kind: "OutputField",
name: "MediaTrend",
arguments: {
/**
* Filter by the media id
*/
mediaId: {
kind: "InputField",
name: "mediaId",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by date
*/
date: {
kind: "InputField",
name: "date",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by trending amount
*/
trending: {
kind: "InputField",
name: "trending",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by score
*/
averageScore: {
kind: "InputField",
name: "averageScore",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by popularity
*/
popularity: {
kind: "InputField",
name: "popularity",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by episode number
*/
episode: {
kind: "InputField",
name: "episode",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter to stats recorded while the media was releasing
*/
releasing: {
kind: "InputField",
name: "releasing",
inlineType: [0, ],
namedType: $Schema.Boolean
},
/**
* Filter by the media id
*/
mediaId_not: {
kind: "InputField",
name: "mediaId_not",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by the media id (max 10,000 items)
*/
mediaId_in: {
kind: "InputField",
name: "mediaId_in",
inlineType: [0, [0, ]],
namedType: $Schema.Int
},
/**
* Filter by the media id (max 10,000 items)
*/
mediaId_not_in: {
kind: "InputField",
name: "mediaId_not_in",
inlineType: [0, [0, ]],
namedType: $Schema.Int
},
/**
* Filter by date
*/
date_greater: {
kind: "InputField",
name: "date_greater",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by date
*/
date_lesser: {
kind: "InputField",
name: "date_lesser",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by trending amount
*/
trending_greater: {
kind: "InputField",
name: "trending_greater",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by trending amount
*/
trending_lesser: {
kind: "InputField",
name: "trending_lesser",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by trending amount
*/
trending_not: {
kind: "InputField",
name: "trending_not",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by score
*/
averageScore_greater: {
kind: "InputField",
name: "averageScore_greater",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by score
*/
averageScore_lesser: {
kind: "InputField",
name: "averageScore_lesser",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by score
*/
averageScore_not: {
kind: "InputField",
name: "averageScore_not",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by popularity
*/
popularity_greater: {
kind: "InputField",
name: "popularity_greater",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by popularity
*/
popularity_lesser: {
kind: "InputField",
name: "popularity_lesser",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by popularity
*/
popularity_not: {
kind: "InputField",
name: "popularity_not",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by episode number
*/
episode_greater: {
kind: "InputField",
name: "episode_greater",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by episode number
*/
episode_lesser: {
kind: "InputField",
name: "episode_lesser",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by episode number
*/
episode_not: {
kind: "InputField",
name: "episode_not",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* The order the results will be returned in
*/
sort: {
kind: "InputField",
name: "sort",
inlineType: [0, [0, ]],
namedType: $Schema.MediaTrendSort
}
},
inlineType: [0, ],
namedType: $Schema.MediaTrend
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
*
* Airing schedule query
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.AiringSchedule} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Query} |
* | **Path** | `Query.AiringSchedule` |
* | **Nullability** | Optional |
* | **Arguments** | 19 |
*/
export interface AiringSchedule {
kind: "OutputField",
name: "AiringSchedule",
arguments: {
/**
* Filter by the id of the airing schedule item
*/
id: {
kind: "InputField",
name: "id",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by the id of associated media
*/
mediaId: {
kind: "InputField",
name: "mediaId",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by the airing episode number
*/
episode: {
kind: "InputField",
name: "episode",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by the time of airing
*/
airingAt: {
kind: "InputField",
name: "airingAt",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter to episodes that haven't yet aired
*/
notYetAired: {
kind: "InputField",
name: "notYetAired",
inlineType: [0, ],
namedType: $Schema.Boolean
},
/**
* Filter by the id of the airing schedule item
*/
id_not: {
kind: "InputField",
name: "id_not",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by the id of the airing schedule item (max 10,000 items)
*/
id_in: {
kind: "InputField",
name: "id_in",
inlineType: [0, [0, ]],
namedType: $Schema.Int
},
/**
* Filter by the id of the airing schedule item (max 10,000 items)
*/
id_not_in: {
kind: "InputField",
name: "id_not_in",
inlineType: [0, [0, ]],
namedType: $Schema.Int
},
/**
* Filter by the id of associated media
*/
mediaId_not: {
kind: "InputField",
name: "mediaId_not",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by the id of associated media (max 10,000 items)
*/
mediaId_in: {
kind: "InputField",
name: "mediaId_in",
inlineType: [0, [0, ]],
namedType: $Schema.Int
},
/**
* Filter by the id of associated media (max 10,000 items)
*/
mediaId_not_in: {
kind: "InputField",
name: "mediaId_not_in",
inlineType: [0, [0, ]],
namedType: $Schema.Int
},
/**
* Filter by the airing episode number
*/
episode_not: {
kind: "InputField",
name: "episode_not",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by the airing episode number (max 10,000 items)
*/
episode_in: {
kind: "InputField",
name: "episode_in",
inlineType: [0, [0, ]],
namedType: $Schema.Int
},
/**
* Filter by the airing episode number (max 10,000 items)
*/
episode_not_in: {
kind: "InputField",
name: "episode_not_in",
inlineType: [0, [0, ]],
namedType: $Schema.Int
},
/**
* Filter by the airing episode number
*/
episode_greater: {
kind: "InputField",
name: "episode_greater",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by the airing episode number
*/
episode_lesser: {
kind: "InputField",
name: "episode_lesser",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by the time of airing
*/
airingAt_greater: {
kind: "InputField",
name: "airingAt_greater",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by the time of airing
*/
airingAt_lesser: {
kind: "InputField",
name: "airingAt_lesser",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* The order the results will be returned in
*/
sort: {
kind: "InputField",
name: "sort",
inlineType: [0, [0, ]],
namedType: $Schema.AiringSort
}
},
inlineType: [0, ],
namedType: $Schema.AiringSchedule
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
*
* Character query
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Character} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Query} |
* | **Path** | `Query.Character` |
* | **Nullability** | Optional |
* | **Arguments** | 7 |
*/
export interface Character {
kind: "OutputField",
name: "Character",
arguments: {
/**
* Filter by character id
*/
id: {
kind: "InputField",
name: "id",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by character by if its their birthday today
*/
isBirthday: {
kind: "InputField",
name: "isBirthday",
inlineType: [0, ],
namedType: $Schema.Boolean
},
/**
* Filter by search query
*/
search: {
kind: "InputField",
name: "search",
inlineType: [0, ],
namedType: $Schema.String
},
/**
* Filter by character id
*/
id_not: {
kind: "InputField",
name: "id_not",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by character id (max 10,000 items)
*/
id_in: {
kind: "InputField",
name: "id_in",
inlineType: [0, [0, ]],
namedType: $Schema.Int
},
/**
* Filter by character id (max 10,000 items)
*/
id_not_in: {
kind: "InputField",
name: "id_not_in",
inlineType: [0, [0, ]],
namedType: $Schema.Int
},
/**
* The order the results will be returned in
*/
sort: {
kind: "InputField",
name: "sort",
inlineType: [0, [0, ]],
namedType: $Schema.CharacterSort
}
},
inlineType: [0, ],
namedType: $Schema.Character
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
*
* Staff query
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Staff} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Query} |
* | **Path** | `Query.Staff` |
* | **Nullability** | Optional |
* | **Arguments** | 7 |
*/
export interface Staff {
kind: "OutputField",
name: "Staff",
arguments: {
/**
* Filter by the staff id
*/
id: {
kind: "InputField",
name: "id",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by staff by if its their birthday today
*/
isBirthday: {
kind: "InputField",
name: "isBirthday",
inlineType: [0, ],
namedType: $Schema.Boolean
},
/**
* Filter by search query
*/
search: {
kind: "InputField",
name: "search",
inlineType: [0, ],
namedType: $Schema.String
},
/**
* Filter by the staff id
*/
id_not: {
kind: "InputField",
name: "id_not",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by the staff id (max 10,000 items)
*/
id_in: {
kind: "InputField",
name: "id_in",
inlineType: [0, [0, ]],
namedType: $Schema.Int
},
/**
* Filter by the staff id (max 10,000 items)
*/
id_not_in: {
kind: "InputField",
name: "id_not_in",
inlineType: [0, [0, ]],
namedType: $Schema.Int
},
/**
* The order the results will be returned in
*/
sort: {
kind: "InputField",
name: "sort",
inlineType: [0, [0, ]],
namedType: $Schema.StaffSort
}
},
inlineType: [0, ],
namedType: $Schema.Staff
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
*
* Media list query
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaList} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Query} |
* | **Path** | `Query.MediaList` |
* | **Nullability** | Optional |
* | **Arguments** | 25 |
*/
export interface MediaList {
kind: "OutputField",
name: "MediaList",
arguments: {
/**
* Filter by a list entry's id
*/
id: {
kind: "InputField",
name: "id",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by a user's id
*/
userId: {
kind: "InputField",
name: "userId",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by a user's name
*/
userName: {
kind: "InputField",
name: "userName",
inlineType: [0, ],
namedType: $Schema.String
},
/**
* Filter by the list entries media type
*/
type: {
kind: "InputField",
name: "type",
inlineType: [0, ],
namedType: $Schema.MediaType
},
/**
* Filter by the watching/reading status
*/
status: {
kind: "InputField",
name: "status",
inlineType: [0, ],
namedType: $Schema.MediaListStatus
},
/**
* Filter by the media id of the list entry
*/
mediaId: {
kind: "InputField",
name: "mediaId",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter list entries to users who are being followed by the authenticated user
*/
isFollowing: {
kind: "InputField",
name: "isFollowing",
inlineType: [0, ],
namedType: $Schema.Boolean
},
/**
* Filter by note words and #tags
*/
notes: {
kind: "InputField",
name: "notes",
inlineType: [0, ],
namedType: $Schema.String
},
/**
* Filter by the date the user started the media
*/
startedAt: {
kind: "InputField",
name: "startedAt",
inlineType: [0, ],
namedType: $Schema.FuzzyDateInt
},
/**
* Filter by the date the user completed the media
*/
completedAt: {
kind: "InputField",
name: "completedAt",
inlineType: [0, ],
namedType: $Schema.FuzzyDateInt
},
/**
* Limit to only entries also on the auth user's list. Requires user id or name arguments.
*/
compareWithAuthList: {
kind: "InputField",
name: "compareWithAuthList",
inlineType: [0, ],
namedType: $Schema.Boolean
},
/**
* Filter by a user's id (max 10,000 items)
*/
userId_in: {
kind: "InputField",
name: "userId_in",
inlineType: [0, [0, ]],
namedType: $Schema.Int
},
/**
* Filter by the watching/reading status (max 10,000 items)
*/
status_in: {
kind: "InputField",
name: "status_in",
inlineType: [0, [0, ]],
namedType: $Schema.MediaListStatus
},
/**
* Filter by the watching/reading status (max 10,000 items)
*/
status_not_in: {
kind: "InputField",
name: "status_not_in",
inlineType: [0, [0, ]],
namedType: $Schema.MediaListStatus
},
/**
* Filter by the watching/reading status
*/
status_not: {
kind: "InputField",
name: "status_not",
inlineType: [0, ],
namedType: $Schema.MediaListStatus
},
/**
* Filter by the media id of the list entry (max 10,000 items)
*/
mediaId_in: {
kind: "InputField",
name: "mediaId_in",
inlineType: [0, [0, ]],
namedType: $Schema.Int
},
/**
* Filter by the media id of the list entry (max 10,000 items)
*/
mediaId_not_in: {
kind: "InputField",
name: "mediaId_not_in",
inlineType: [0, [0, ]],
namedType: $Schema.Int
},
/**
* Filter by note words and #tags
*/
notes_like: {
kind: "InputField",
name: "notes_like",
inlineType: [0, ],
namedType: $Schema.String
},
/**
* Filter by the date the user started the media
*/
startedAt_greater: {
kind: "InputField",
name: "startedAt_greater",
inlineType: [0, ],
namedType: $Schema.FuzzyDateInt
},
/**
* Filter by the date the user started the media
*/
startedAt_lesser: {
kind: "InputField",
name: "startedAt_lesser",
inlineType: [0, ],
namedType: $Schema.FuzzyDateInt
},
/**
* Filter by the date the user started the media
*/
startedAt_like: {
kind: "InputField",
name: "startedAt_like",
inlineType: [0, ],
namedType: $Schema.String
},
/**
* Filter by the date the user completed the media
*/
completedAt_greater: {
kind: "InputField",
name: "completedAt_greater",
inlineType: [0, ],
namedType: $Schema.FuzzyDateInt
},
/**
* Filter by the date the user completed the media
*/
completedAt_lesser: {
kind: "InputField",
name: "completedAt_lesser",
inlineType: [0, ],
namedType: $Schema.FuzzyDateInt
},
/**
* Filter by the date the user completed the media
*/
completedAt_like: {
kind: "InputField",
name: "completedAt_like",
inlineType: [0, ],
namedType: $Schema.String
},
/**
* The order the results will be returned in
*/
sort: {
kind: "InputField",
name: "sort",
inlineType: [0, [0, ]],
namedType: $Schema.MediaListSort
}
},
inlineType: [0, ],
namedType: $Schema.MediaList
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
*
* Media list collection query, provides list pre-grouped by status & custom
* lists. User ID and Media Type arguments required.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaListCollection} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Query} |
* | **Path** | `Query.MediaListCollection` |
* | **Nullability** | Optional |
* | **Arguments** | 21 |
*/
export interface MediaListCollection {
kind: "OutputField",
name: "MediaListCollection",
arguments: {
/**
* Filter by a user's id
*/
userId: {
kind: "InputField",
name: "userId",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by a user's name
*/
userName: {
kind: "InputField",
name: "userName",
inlineType: [0, ],
namedType: $Schema.String
},
/**
* Filter by the list entries media type
*/
type: {
kind: "InputField",
name: "type",
inlineType: [0, ],
namedType: $Schema.MediaType
},
/**
* Filter by the watching/reading status
*/
status: {
kind: "InputField",
name: "status",
inlineType: [0, ],
namedType: $Schema.MediaListStatus
},
/**
* Filter by note words and #tags
*/
notes: {
kind: "InputField",
name: "notes",
inlineType: [0, ],
namedType: $Schema.String
},
/**
* Filter by the date the user started the media
*/
startedAt: {
kind: "InputField",
name: "startedAt",
inlineType: [0, ],
namedType: $Schema.FuzzyDateInt
},
/**
* Filter by the date the user completed the media
*/
completedAt: {
kind: "InputField",
name: "completedAt",
inlineType: [0, ],
namedType: $Schema.FuzzyDateInt
},
/**
* Always return completed list entries in one group, overriding the user's split completed option.
*/
forceSingleCompletedList: {
kind: "InputField",
name: "forceSingleCompletedList",
inlineType: [0, ],
namedType: $Schema.Boolean
},
/**
* Which chunk of list entries to load
*/
chunk: {
kind: "InputField",
name: "chunk",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* The amount of entries per chunk, max 500
*/
perChunk: {
kind: "InputField",
name: "perChunk",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by the watching/reading status (max 10,000 items)
*/
status_in: {
kind: "InputField",
name: "status_in",
inlineType: [0, [0, ]],
namedType: $Schema.MediaListStatus
},
/**
* Filter by the watching/reading status (max 10,000 items)
*/
status_not_in: {
kind: "InputField",
name: "status_not_in",
inlineType: [0, [0, ]],
namedType: $Schema.MediaListStatus
},
/**
* Filter by the watching/reading status
*/
status_not: {
kind: "InputField",
name: "status_not",
inlineType: [0, ],
namedType: $Schema.MediaListStatus
},
/**
* Filter by note words and #tags
*/
notes_like: {
kind: "InputField",
name: "notes_like",
inlineType: [0, ],
namedType: $Schema.String
},
/**
* Filter by the date the user started the media
*/
startedAt_greater: {
kind: "InputField",
name: "startedAt_greater",
inlineType: [0, ],
namedType: $Schema.FuzzyDateInt
},
/**
* Filter by the date the user started the media
*/
startedAt_lesser: {
kind: "InputField",
name: "startedAt_lesser",
inlineType: [0, ],
namedType: $Schema.FuzzyDateInt
},
/**
* Filter by the date the user started the media
*/
startedAt_like: {
kind: "InputField",
name: "startedAt_like",
inlineType: [0, ],
namedType: $Schema.String
},
/**
* Filter by the date the user completed the media
*/
completedAt_greater: {
kind: "InputField",
name: "completedAt_greater",
inlineType: [0, ],
namedType: $Schema.FuzzyDateInt
},
/**
* Filter by the date the user completed the media
*/
completedAt_lesser: {
kind: "InputField",
name: "completedAt_lesser",
inlineType: [0, ],
namedType: $Schema.FuzzyDateInt
},
/**
* Filter by the date the user completed the media
*/
completedAt_like: {
kind: "InputField",
name: "completedAt_like",
inlineType: [0, ],
namedType: $Schema.String
},
/**
* The order the results will be returned in
*/
sort: {
kind: "InputField",
name: "sort",
inlineType: [0, [0, ]],
namedType: $Schema.MediaListSort
}
},
inlineType: [0, ],
namedType: $Schema.MediaListCollection
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
*
* Collection of all the possible media genres
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Query} |
* | **Path** | `Query.GenreCollection` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface GenreCollection {
kind: "OutputField",
name: "GenreCollection",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
*
* Collection of all the possible media tags
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaTag}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Query} |
* | **Path** | `Query.MediaTagCollection` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 1 |
*/
export interface MediaTagCollection {
kind: "OutputField",
name: "MediaTagCollection",
arguments: {
/**
* Mod Only
*/
status: {
kind: "InputField",
name: "status",
inlineType: [0, ],
namedType: $Schema.Int
}
},
inlineType: [0, [0, ]],
namedType: $Schema.MediaTag
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
*
* User query
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.User} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Query} |
* | **Path** | `Query.User` |
* | **Nullability** | Optional |
* | **Arguments** | 5 |
*/
export interface User {
kind: "OutputField",
name: "User",
arguments: {
/**
* Filter by the user id
*/
id: {
kind: "InputField",
name: "id",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by the name of the user
*/
name: {
kind: "InputField",
name: "name",
inlineType: [0, ],
namedType: $Schema.String
},
/**
* Filter to moderators only if true
*/
isModerator: {
kind: "InputField",
name: "isModerator",
inlineType: [0, ],
namedType: $Schema.Boolean
},
/**
* Filter by search query
*/
search: {
kind: "InputField",
name: "search",
inlineType: [0, ],
namedType: $Schema.String
},
/**
* The order the results will be returned in
*/
sort: {
kind: "InputField",
name: "sort",
inlineType: [0, [0, ]],
namedType: $Schema.UserSort
}
},
inlineType: [0, ],
namedType: $Schema.User
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
*
* Get the currently authenticated user
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.User} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Query} |
* | **Path** | `Query.Viewer` |
* | **Nullability** | Optional |
*/
export interface Viewer {
kind: "OutputField",
name: "Viewer",
arguments: {},
inlineType: [0, ],
namedType: $Schema.User
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
*
* Notification query
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.NotificationUnion} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
* | **Parent** | {@link $Schema.Query} |
* | **Path** | `Query.Notification` |
* | **Nullability** | Optional |
* | **Arguments** | 3 |
*/
export interface Notification {
kind: "OutputField",
name: "Notification",
arguments: {
/**
* Filter by the type of notifications
*/
type: {
kind: "InputField",
name: "type",
inlineType: [0, ],
namedType: $Schema.NotificationType
},
/**
* Reset the unread notification count to 0 on load
*/
resetNotificationCount: {
kind: "InputField",
name: "resetNotificationCount",
inlineType: [0, ],
namedType: $Schema.Boolean
},
/**
* Filter by the type of notifications (max 10,000 items)
*/
type_in: {
kind: "InputField",
name: "type_in",
inlineType: [0, [0, ]],
namedType: $Schema.NotificationType
}
},
inlineType: [0, ],
namedType: $Schema.NotificationUnion
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
*
* Studio query
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Studio} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Query} |
* | **Path** | `Query.Studio` |
* | **Nullability** | Optional |
* | **Arguments** | 6 |
*/
export interface Studio {
kind: "OutputField",
name: "Studio",
arguments: {
/**
* Filter by the studio id
*/
id: {
kind: "InputField",
name: "id",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by search query
*/
search: {
kind: "InputField",
name: "search",
inlineType: [0, ],
namedType: $Schema.String
},
/**
* Filter by the studio id
*/
id_not: {
kind: "InputField",
name: "id_not",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by the studio id (max 10,000 items)
*/
id_in: {
kind: "InputField",
name: "id_in",
inlineType: [0, [0, ]],
namedType: $Schema.Int
},
/**
* Filter by the studio id (max 10,000 items)
*/
id_not_in: {
kind: "InputField",
name: "id_not_in",
inlineType: [0, [0, ]],
namedType: $Schema.Int
},
/**
* The order the results will be returned in
*/
sort: {
kind: "InputField",
name: "sort",
inlineType: [0, [0, ]],
namedType: $Schema.StudioSort
}
},
inlineType: [0, ],
namedType: $Schema.Studio
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
*
* Review query
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Review} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Query} |
* | **Path** | `Query.Review` |
* | **Nullability** | Optional |
* | **Arguments** | 5 |
*/
export interface Review {
kind: "OutputField",
name: "Review",
arguments: {
/**
* Filter by Review id
*/
id: {
kind: "InputField",
name: "id",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by media id
*/
mediaId: {
kind: "InputField",
name: "mediaId",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by user id
*/
userId: {
kind: "InputField",
name: "userId",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by media type
*/
mediaType: {
kind: "InputField",
name: "mediaType",
inlineType: [0, ],
namedType: $Schema.MediaType
},
/**
* The order the results will be returned in
*/
sort: {
kind: "InputField",
name: "sort",
inlineType: [0, [0, ]],
namedType: $Schema.ReviewSort
}
},
inlineType: [0, ],
namedType: $Schema.Review
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
*
* Activity query
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.ActivityUnion} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
* | **Parent** | {@link $Schema.Query} |
* | **Path** | `Query.Activity` |
* | **Nullability** | Optional |
* | **Arguments** | 27 |
*/
export interface Activity {
kind: "OutputField",
name: "Activity",
arguments: {
/**
* Filter by the activity id
*/
id: {
kind: "InputField",
name: "id",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by the owner user id
*/
userId: {
kind: "InputField",
name: "userId",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by the id of the user who sent a message
*/
messengerId: {
kind: "InputField",
name: "messengerId",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by the associated media id of the activity
*/
mediaId: {
kind: "InputField",
name: "mediaId",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by the type of activity
*/
type: {
kind: "InputField",
name: "type",
inlineType: [0, ],
namedType: $Schema.ActivityType
},
/**
* Filter activity to users who are being followed by the authenticated user
*/
isFollowing: {
kind: "InputField",
name: "isFollowing",
inlineType: [0, ],
namedType: $Schema.Boolean
},
/**
* Filter activity to only activity with replies
*/
hasReplies: {
kind: "InputField",
name: "hasReplies",
inlineType: [0, ],
namedType: $Schema.Boolean
},
/**
* Filter activity to only activity with replies or is of type text
*/
hasRepliesOrTypeText: {
kind: "InputField",
name: "hasRepliesOrTypeText",
inlineType: [0, ],
namedType: $Schema.Boolean
},
/**
* Filter by the time the activity was created
*/
createdAt: {
kind: "InputField",
name: "createdAt",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by the activity id
*/
id_not: {
kind: "InputField",
name: "id_not",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by the activity id (max 10,000 items)
*/
id_in: {
kind: "InputField",
name: "id_in",
inlineType: [0, [0, ]],
namedType: $Schema.Int
},
/**
* Filter by the activity id (max 10,000 items)
*/
id_not_in: {
kind: "InputField",
name: "id_not_in",
inlineType: [0, [0, ]],
namedType: $Schema.Int
},
/**
* Filter by the owner user id
*/
userId_not: {
kind: "InputField",
name: "userId_not",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by the owner user id (max 10,000 items)
*/
userId_in: {
kind: "InputField",
name: "userId_in",
inlineType: [0, [0, ]],
namedType: $Schema.Int
},
/**
* Filter by the owner user id (max 10,000 items)
*/
userId_not_in: {
kind: "InputField",
name: "userId_not_in",
inlineType: [0, [0, ]],
namedType: $Schema.Int
},
/**
* Filter by the id of the user who sent a message
*/
messengerId_not: {
kind: "InputField",
name: "messengerId_not",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by the id of the user who sent a message (max 10,000 items)
*/
messengerId_in: {
kind: "InputField",
name: "messengerId_in",
inlineType: [0, [0, ]],
namedType: $Schema.Int
},
/**
* Filter by the id of the user who sent a message (max 10,000 items)
*/
messengerId_not_in: {
kind: "InputField",
name: "messengerId_not_in",
inlineType: [0, [0, ]],
namedType: $Schema.Int
},
/**
* Filter by the associated media id of the activity
*/
mediaId_not: {
kind: "InputField",
name: "mediaId_not",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by the associated media id of the activity (max 10,000 items)
*/
mediaId_in: {
kind: "InputField",
name: "mediaId_in",
inlineType: [0, [0, ]],
namedType: $Schema.Int
},
/**
* Filter by the associated media id of the activity (max 10,000 items)
*/
mediaId_not_in: {
kind: "InputField",
name: "mediaId_not_in",
inlineType: [0, [0, ]],
namedType: $Schema.Int
},
/**
* Filter by the type of activity
*/
type_not: {
kind: "InputField",
name: "type_not",
inlineType: [0, ],
namedType: $Schema.ActivityType
},
/**
* Filter by the type of activity (max 10,000 items)
*/
type_in: {
kind: "InputField",
name: "type_in",
inlineType: [0, [0, ]],
namedType: $Schema.ActivityType
},
/**
* Filter by the type of activity (max 10,000 items)
*/
type_not_in: {
kind: "InputField",
name: "type_not_in",
inlineType: [0, [0, ]],
namedType: $Schema.ActivityType
},
/**
* Filter by the time the activity was created
*/
createdAt_greater: {
kind: "InputField",
name: "createdAt_greater",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by the time the activity was created
*/
createdAt_lesser: {
kind: "InputField",
name: "createdAt_lesser",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* The order the results will be returned in
*/
sort: {
kind: "InputField",
name: "sort",
inlineType: [0, [0, ]],
namedType: $Schema.ActivitySort
}
},
inlineType: [0, ],
namedType: $Schema.ActivityUnion
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
*
* Activity reply query
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.ActivityReply} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Query} |
* | **Path** | `Query.ActivityReply` |
* | **Nullability** | Optional |
* | **Arguments** | 2 |
*/
export interface ActivityReply {
kind: "OutputField",
name: "ActivityReply",
arguments: {
/**
* Filter by the reply id
*/
id: {
kind: "InputField",
name: "id",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by the parent id
*/
activityId: {
kind: "InputField",
name: "activityId",
inlineType: [0, ],
namedType: $Schema.Int
}
},
inlineType: [0, ],
namedType: $Schema.ActivityReply
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
*
* Following query
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.User} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Query} |
* | **Path** | `Query.Following` |
* | **Nullability** | Optional |
* | **Arguments** | 2 |
*/
export interface Following {
kind: "OutputField",
name: "Following",
arguments: {
/**
* User id of the follower/followed
*/
userId: {
kind: "InputField",
name: "userId",
inlineType: [1, ],
namedType: $Schema.Int
},
/**
* The order the results will be returned in
*/
sort: {
kind: "InputField",
name: "sort",
inlineType: [0, [0, ]],
namedType: $Schema.UserSort
}
},
inlineType: [0, ],
namedType: $Schema.User
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
*
* Follower query
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.User} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Query} |
* | **Path** | `Query.Follower` |
* | **Nullability** | Optional |
* | **Arguments** | 2 |
*/
export interface Follower {
kind: "OutputField",
name: "Follower",
arguments: {
/**
* User id of the follower/followed
*/
userId: {
kind: "InputField",
name: "userId",
inlineType: [1, ],
namedType: $Schema.Int
},
/**
* The order the results will be returned in
*/
sort: {
kind: "InputField",
name: "sort",
inlineType: [0, [0, ]],
namedType: $Schema.UserSort
}
},
inlineType: [0, ],
namedType: $Schema.User
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
*
* Thread query
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Thread} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Query} |
* | **Path** | `Query.Thread` |
* | **Nullability** | Optional |
* | **Arguments** | 9 |
*/
export interface Thread {
kind: "OutputField",
name: "Thread",
arguments: {
/**
* Filter by the thread id
*/
id: {
kind: "InputField",
name: "id",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by the user id of the thread's creator
*/
userId: {
kind: "InputField",
name: "userId",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by the user id of the last user to comment on the thread
*/
replyUserId: {
kind: "InputField",
name: "replyUserId",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by if the currently authenticated user's subscribed threads
*/
subscribed: {
kind: "InputField",
name: "subscribed",
inlineType: [0, ],
namedType: $Schema.Boolean
},
/**
* Filter by thread category id
*/
categoryId: {
kind: "InputField",
name: "categoryId",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by thread media id category
*/
mediaCategoryId: {
kind: "InputField",
name: "mediaCategoryId",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by search query
*/
search: {
kind: "InputField",
name: "search",
inlineType: [0, ],
namedType: $Schema.String
},
/**
* Filter by the thread id (max 10,000 items)
*/
id_in: {
kind: "InputField",
name: "id_in",
inlineType: [0, [0, ]],
namedType: $Schema.Int
},
/**
* The order the results will be returned in
*/
sort: {
kind: "InputField",
name: "sort",
inlineType: [0, [0, ]],
namedType: $Schema.ThreadSort
}
},
inlineType: [0, ],
namedType: $Schema.Thread
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
*
* Comment query
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.ThreadComment}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Query} |
* | **Path** | `Query.ThreadComment` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 4 |
*/
export interface ThreadComment {
kind: "OutputField",
name: "ThreadComment",
arguments: {
/**
* Filter by the comment id
*/
id: {
kind: "InputField",
name: "id",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by the thread id
*/
threadId: {
kind: "InputField",
name: "threadId",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by the user id of the comment's creator
*/
userId: {
kind: "InputField",
name: "userId",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* The order the results will be returned in
*/
sort: {
kind: "InputField",
name: "sort",
inlineType: [0, [0, ]],
namedType: $Schema.ThreadCommentSort
}
},
inlineType: [0, [0, ]],
namedType: $Schema.ThreadComment
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
*
* Recommendation query
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Recommendation} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Query} |
* | **Path** | `Query.Recommendation` |
* | **Nullability** | Optional |
* | **Arguments** | 9 |
*/
export interface Recommendation {
kind: "OutputField",
name: "Recommendation",
arguments: {
/**
* Filter by recommendation id
*/
id: {
kind: "InputField",
name: "id",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by media id
*/
mediaId: {
kind: "InputField",
name: "mediaId",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by media recommendation id
*/
mediaRecommendationId: {
kind: "InputField",
name: "mediaRecommendationId",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by user who created the recommendation
*/
userId: {
kind: "InputField",
name: "userId",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by total rating of the recommendation
*/
rating: {
kind: "InputField",
name: "rating",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by the media on the authenticated user's lists
*/
onList: {
kind: "InputField",
name: "onList",
inlineType: [0, ],
namedType: $Schema.Boolean
},
/**
* Filter by total rating of the recommendation
*/
rating_greater: {
kind: "InputField",
name: "rating_greater",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* Filter by total rating of the recommendation
*/
rating_lesser: {
kind: "InputField",
name: "rating_lesser",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* The order the results will be returned in
*/
sort: {
kind: "InputField",
name: "sort",
inlineType: [0, [0, ]],
namedType: $Schema.RecommendationSort
}
},
inlineType: [0, ],
namedType: $Schema.Recommendation
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
*
* Like query
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.User} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Query} |
* | **Path** | `Query.Like` |
* | **Nullability** | Optional |
* | **Arguments** | 2 |
*/
export interface Like {
kind: "OutputField",
name: "Like",
arguments: {
/**
* The id of the likeable type
*/
likeableId: {
kind: "InputField",
name: "likeableId",
inlineType: [0, ],
namedType: $Schema.Int
},
/**
* The type of model the id applies to
*/
type: {
kind: "InputField",
name: "type",
inlineType: [0, ],
namedType: $Schema.LikeableType
}
},
inlineType: [0, ],
namedType: $Schema.User
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
*
* Provide AniList markdown to be converted to html (Requires auth)
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.ParsedMarkdown} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Query} |
* | **Path** | `Query.Markdown` |
* | **Nullability** | Optional |
* | **Arguments** | 1 |
*/
export interface Markdown {
kind: "OutputField",
name: "Markdown",
arguments: {
/**
* The markdown to be parsed to html
*/
markdown: {
kind: "InputField",
name: "markdown",
inlineType: [1, ],
namedType: $Schema.String
}
},
inlineType: [0, ],
namedType: $Schema.ParsedMarkdown
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.AniChartUser} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Query} |
* | **Path** | `Query.AniChartUser` |
* | **Nullability** | Optional |
*/
export interface AniChartUser {
kind: "OutputField",
name: "AniChartUser",
arguments: {},
inlineType: [0, ],
namedType: $Schema.AniChartUser
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
*
* Site statistics query
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.SiteStatistics} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Query} |
* | **Path** | `Query.SiteStatistics` |
* | **Nullability** | Optional |
*/
export interface SiteStatistics {
kind: "OutputField",
name: "SiteStatistics",
arguments: {},
inlineType: [0, ],
namedType: $Schema.SiteStatistics
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Query}.
*
* ExternalLinkSource collection query
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaExternalLink}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Query} |
* | **Path** | `Query.ExternalLinkSourceCollection` |
* | **Nullability** | Optional |
* | **List** | Yes |
* | **Arguments** | 3 |
*/
export interface ExternalLinkSourceCollection {
kind: "OutputField",
name: "ExternalLinkSourceCollection",
arguments: {
/**
* Filter by the link id
*/
id: {
kind: "InputField",
name: "id",
inlineType: [0, ],
namedType: $Schema.Int
},
type: {
kind: "InputField",
name: "type",
inlineType: [0, ],
namedType: $Schema.ExternalLinkType
},
mediaType: {
kind: "InputField",
name: "mediaType",
inlineType: [0, ],
namedType: $Schema.ExternalLinkMediaType
}
},
inlineType: [0, [0, ]],
namedType: $Schema.MediaExternalLink
}
