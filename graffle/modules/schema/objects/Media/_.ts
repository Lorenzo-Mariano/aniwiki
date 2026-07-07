import type * as $Fields from './fields.js'

export * as Media from './fields.js'

/**
* GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* Anime or Manga
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 55 |
*/
export interface Media {
kind: "Object",
name: "Media",
fields: {
__typename: $Fields.__typename,
id: $Fields.id,
idMal: $Fields.idMal,
title: $Fields.title,
type: $Fields.type,
format: $Fields.format,
status: $Fields.status,
description: $Fields.description,
startDate: $Fields.startDate,
endDate: $Fields.endDate,
season: $Fields.season,
seasonYear: $Fields.seasonYear,
seasonInt: $Fields.seasonInt,
episodes: $Fields.episodes,
duration: $Fields.duration,
chapters: $Fields.chapters,
volumes: $Fields.volumes,
countryOfOrigin: $Fields.countryOfOrigin,
isLicensed: $Fields.isLicensed,
source: $Fields.source,
hashtag: $Fields.hashtag,
trailer: $Fields.trailer,
updatedAt: $Fields.updatedAt,
coverImage: $Fields.coverImage,
bannerImage: $Fields.bannerImage,
genres: $Fields.genres,
synonyms: $Fields.synonyms,
averageScore: $Fields.averageScore,
meanScore: $Fields.meanScore,
popularity: $Fields.popularity,
isLocked: $Fields.isLocked,
trending: $Fields.trending,
favourites: $Fields.favourites,
tags: $Fields.tags,
relations: $Fields.relations,
characters: $Fields.characters,
staff: $Fields.staff,
studios: $Fields.studios,
isFavourite: $Fields.isFavourite,
isFavouriteBlocked: $Fields.isFavouriteBlocked,
isAdult: $Fields.isAdult,
nextAiringEpisode: $Fields.nextAiringEpisode,
airingSchedule: $Fields.airingSchedule,
trends: $Fields.trends,
externalLinks: $Fields.externalLinks,
streamingEpisodes: $Fields.streamingEpisodes,
rankings: $Fields.rankings,
mediaListEntry: $Fields.mediaListEntry,
reviews: $Fields.reviews,
recommendations: $Fields.recommendations,
stats: $Fields.stats,
siteUrl: $Fields.siteUrl,
autoCreateForumThread: $Fields.autoCreateForumThread,
isRecommendationBlocked: $Fields.isRecommendationBlocked,
isReviewBlocked: $Fields.isReviewBlocked,
modNotes: $Fields.modNotes
}
}