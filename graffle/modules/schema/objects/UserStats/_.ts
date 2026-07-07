import type * as $Fields from './fields.js'

export * as UserStats from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* A user's statistics
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 17 |
*/
export interface UserStats {
kind: "Object",
name: "UserStats",
fields: {
__typename: $Fields.__typename,
watchedTime: $Fields.watchedTime,
chaptersRead: $Fields.chaptersRead,
activityHistory: $Fields.activityHistory,
animeStatusDistribution: $Fields.animeStatusDistribution,
mangaStatusDistribution: $Fields.mangaStatusDistribution,
animeScoreDistribution: $Fields.animeScoreDistribution,
mangaScoreDistribution: $Fields.mangaScoreDistribution,
animeListScores: $Fields.animeListScores,
mangaListScores: $Fields.mangaListScores,
favouredGenresOverview: $Fields.favouredGenresOverview,
favouredGenres: $Fields.favouredGenres,
favouredTags: $Fields.favouredTags,
favouredActors: $Fields.favouredActors,
favouredStaff: $Fields.favouredStaff,
favouredStudios: $Fields.favouredStudios,
favouredYears: $Fields.favouredYears,
favouredFormats: $Fields.favouredFormats
}
}