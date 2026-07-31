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


export type GetTrendingQuery = { Page: { __typename: 'Page', pageInfo: { __typename: 'PageInfo', currentPage: number | null, hasNextPage: boolean | null, lastPage: number | null } | null, media: Array<{ __typename: 'Media', id: number, status: MediaStatus | null, favourites: number | null, type: MediaType | null, coverImage: { __typename: 'MediaCoverImage', extraLarge: string | null } | null, startDate: { __typename: 'FuzzyDate', month: number | null, year: number | null } | null, title: { __typename: 'MediaTitle', english: string | null, native: string | null } | null } | null> | null } | null };

export type SearchMediaQueryVariables = Exact<{
  search: string;
  page: number;
}>;


export type SearchMediaQuery = { Page: { __typename: 'Page', pageInfo: { __typename: 'PageInfo', currentPage: number | null, hasNextPage: boolean | null, lastPage: number | null } | null, media: Array<{ __typename: 'Media', id: number, status: MediaStatus | null, favourites: number | null, type: MediaType | null, coverImage: { __typename: 'MediaCoverImage', extraLarge: string | null } | null, startDate: { __typename: 'FuzzyDate', month: number | null, year: number | null } | null, title: { __typename: 'MediaTitle', english: string | null, native: string | null } | null } | null> | null } | null };

export type GetCharactersQueryVariables = Exact<{
  mediaId: number;
  page: number;
}>;


export type GetCharactersQuery = { Media: { __typename: 'Media', id: number, characters: { __typename: 'CharacterConnection', edges: Array<{ __typename: 'CharacterEdge', node: { __typename: 'Character', id: number, name: { __typename: 'CharacterName', full: string | null } | null, image: { __typename: 'CharacterImage', large: string | null } | null } | null } | null> | null, pageInfo: { __typename: 'PageInfo', currentPage: number | null, hasNextPage: boolean | null } | null } | null } | null };

export type GetMediaQueryVariables = Exact<{
  id: number;
}>;


export type GetMediaQuery = { Media: { __typename: 'Media', id: number, description: string | null, type: MediaType | null, status: MediaStatus | null, bannerImage: string | null, title: { __typename: 'MediaTitle', english: string | null, romaji: string | null, native: string | null } | null, coverImage: { __typename: 'MediaCoverImage', extraLarge: string | null, large: string | null } | null } | null };

export type GetReviewsQueryVariables = Exact<{
  mediaId: number;
  page?: number | null | undefined;
}>;


export type GetReviewsQuery = { Media: { __typename: 'Media', id: number, reviews: { __typename: 'ReviewConnection', edges: Array<{ __typename: 'ReviewEdge', node: { __typename: 'Review', id: number, summary: string | null, body: string | null, score: number | null, rating: number | null, ratingAmount: number | null, user: { __typename: 'User', id: number, name: string, avatar: { __typename: 'UserAvatar', large: string | null } | null } | null } | null } | null> | null, pageInfo: { __typename: 'PageInfo', currentPage: number | null, hasNextPage: boolean | null } | null } | null } | null };
