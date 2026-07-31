"use client";

import { HttpLink } from "@apollo/client";
import {
    ApolloClient,
    ApolloNextAppProvider,
    InMemoryCache,
} from "@apollo/client-integration-nextjs";

function makeClient() {
    const httpLink = new HttpLink({
        // Use an absolute URL for SSR
        uri: "https://graphql.anilist.co",
        fetchOptions: {
            // Optional: Next.js-specific fetch options
            // Note: This doesn't work with `export const dynamic = "force-static"`
        },
    });

    return new ApolloClient({
        cache: new InMemoryCache({
            typePolicies: {
                Media: {
                    fields: {
                        characters: {
                            keyArgs: false,
                            merge(existing = { edges: [] }, incoming) {
                                return {
                                    ...incoming,
                                    edges: [
                                        ...(existing.edges ?? []),
                                        ...(incoming.edges ?? []),
                                    ],
                                };
                            },
                        },
                        reviews: {
                            keyArgs: false,
                            merge(existing, incoming) {
                                if (!existing) {
                                    return {
                                        ...incoming,
                                    };
                                }

                                const toAdd = [];

                                // grab individual obj in incoming.edges...
                                for (const edge of incoming.edges) {
                                    let foundDupe = false;

                                    for (const existingEdge of existing.edges) {
                                        // searching step; don't continue at all when found dupe
                                        console.log(existingEdge.node.__ref);

                                        if (
                                            existingEdge.node.__ref ===
                                            edge.node.__ref
                                        ) {
                                            foundDupe = true;
                                        }
                                    }

                                    if (!foundDupe) {
                                        toAdd.push(edge);
                                    }
                                }

                                console.log("our new reviews obj", {
                                    ...incoming,
                                    edges: [...existing.edges, ...toAdd],
                                });

                                // finally! Deo gratias. It was good to write it myself and not AI lol
                                return {
                                    ...incoming,
                                    edges: [...existing.edges, ...toAdd],
                                };
                            },
                        },
                    },
                },
            },
        }),
        link: httpLink,
    });
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
    return (
        <ApolloNextAppProvider makeClient={makeClient}>
            {children}
        </ApolloNextAppProvider>
    );
}
