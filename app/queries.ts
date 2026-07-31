import { TypedDocumentNode, gql } from "@apollo/client";
import {
    GetCharactersQuery,
    GetCharactersQueryVariables,
    GetMediaQuery,
    GetMediaQueryVariables,
    GetReviewsQuery,
    GetReviewsQueryVariables,
    GetTrendingQuery,
    SearchMediaQuery,
    SearchMediaQueryVariables,
} from "./_types/__generated__/graphql";

export const GET_TRENDING_MEDIA: TypedDocumentNode<GetTrendingQuery> = gql`
    query getTrending {
        Page(perPage: 20) {
            pageInfo {
                currentPage
                hasNextPage
                lastPage
            }
            media(
                isAdult: false
                status_in: [HIATUS, RELEASING]
                sort: TRENDING_DESC
            ) {
                id
                coverImage {
                    extraLarge
                }
                status
                favourites
                startDate {
                    month
                    year
                }
                type
                title {
                    english
                    native
                }
            }
        }
    }
`;

export const SEARCH_MEDIA: TypedDocumentNode<
    SearchMediaQuery,
    SearchMediaQueryVariables
> = gql`
    query searchMedia($search: String!, $page: Int!) {
        Page(perPage: 12, page: $page) {
            pageInfo {
                currentPage
                hasNextPage
                lastPage
            }
            media(isAdult: false, search: $search, sort: FAVOURITES_DESC) {
                id
                coverImage {
                    extraLarge
                }
                status
                favourites
                startDate {
                    month
                    year
                }
                type
                title {
                    english
                    native
                }
            }
        }
    }
`;

export const GET_CHARACTERS: TypedDocumentNode<
    GetCharactersQuery,
    GetCharactersQueryVariables
> = gql`
    query GetCharacters($mediaId: Int!, $page: Int!) {
        Media(id: $mediaId) {
            id
            characters(page: $page, perPage: 8) {
                edges {
                    node {
                        id
                        name {
                            full
                        }
                        image {
                            large
                        }
                    }
                }
                pageInfo {
                    currentPage
                    hasNextPage
                }
            }
        }
    }
`;

export const GET_MEDIUM: TypedDocumentNode<
    GetMediaQuery,
    GetMediaQueryVariables
> = gql`
    query GetMedia($id: Int!) {
        Media(id: $id) {
            id
            title {
                english
                romaji
                native
            }
            description
            type
            status
            bannerImage
            coverImage {
                extraLarge
                large
            }
        }
    }
`;

export const GET_REVIEWS: TypedDocumentNode<
    GetReviewsQuery,
    GetReviewsQueryVariables
> = gql`
    query GetReviews($mediaId: Int!, $page: Int = 1) {
        Media(id: $mediaId) {
            id
            reviews(page: $page, perPage: 3, sort: RATING_DESC) {
                edges {
                    node {
                        id
                        summary
                        body(asHtml: true)
                        score
                        rating
                        ratingAmount
                        user {
                            id
                            name
                            avatar {
                                large
                            }
                        }
                    }
                }
                pageInfo {
                    currentPage
                    hasNextPage
                }
            }
        }
    }
`;
