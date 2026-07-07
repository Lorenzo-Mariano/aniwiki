/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** The current releasing status of the media */
export type MediaStatus =
  /** Ended before the work could be finished */
  | 'CANCELLED'
  /** Has completed and is no longer being released */
  | 'FINISHED'
  /** Version 2 only. Is currently paused from releasing and will resume at a later date */
  | 'HIATUS'
  /** To be released at a later date */
  | 'NOT_YET_RELEASED'
  /** Currently releasing */
  | 'RELEASING';

/** Media type enum, anime or manga. */
export type MediaType =
  /** Japanese Anime */
  | 'ANIME'
  /** Asian comic */
  | 'MANGA';

export type GetTrendingQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTrendingQuery = { Page: { __typename: 'Page', media: Array<{ __typename: 'Media', id: number, status: MediaStatus | null, favourites: number | null, type: MediaType | null, coverImage: { __typename: 'MediaCoverImage', extraLarge: string | null } | null, startDate: { __typename: 'FuzzyDate', month: number | null, year: number | null } | null, title: { __typename: 'MediaTitle', english: string | null, native: string | null } | null } | null> | null } | null };

export type SearchMediaQueryVariables = Exact<{
  search: string;
}>;


export type SearchMediaQuery = { Page: { __typename: 'Page', media: Array<{ __typename: 'Media', id: number, status: MediaStatus | null, favourites: number | null, type: MediaType | null, coverImage: { __typename: 'MediaCoverImage', extraLarge: string | null } | null, startDate: { __typename: 'FuzzyDate', month: number | null, year: number | null } | null, title: { __typename: 'MediaTitle', english: string | null, native: string | null } | null } | null> | null } | null };
