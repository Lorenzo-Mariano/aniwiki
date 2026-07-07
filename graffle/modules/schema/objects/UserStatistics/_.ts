import type * as $Fields from './fields.js'

export * as UserStatistics from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 19 |
*/
export interface UserStatistics {
kind: "Object",
name: "UserStatistics",
fields: {
__typename: $Fields.__typename,
count: $Fields.count,
meanScore: $Fields.meanScore,
standardDeviation: $Fields.standardDeviation,
minutesWatched: $Fields.minutesWatched,
episodesWatched: $Fields.episodesWatched,
chaptersRead: $Fields.chaptersRead,
volumesRead: $Fields.volumesRead,
formats: $Fields.formats,
statuses: $Fields.statuses,
scores: $Fields.scores,
lengths: $Fields.lengths,
releaseYears: $Fields.releaseYears,
startYears: $Fields.startYears,
genres: $Fields.genres,
tags: $Fields.tags,
countries: $Fields.countries,
voiceActors: $Fields.voiceActors,
staff: $Fields.staff,
studios: $Fields.studios
}
}