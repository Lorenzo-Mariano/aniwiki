import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"Favourites"`
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
value: "Favourites"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Favourites}.
*
* Favourite anime
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaConnection} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Favourites} |
* | **Path** | `Favourites.anime` |
* | **Nullability** | Optional |
* | **Arguments** | 2 |
*/
export interface anime {
kind: "OutputField",
name: "anime",
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
* The amount of entries per page, max 25
*/
perPage: {
kind: "InputField",
name: "perPage",
inlineType: [0, ],
namedType: $Schema.Int
}
},
inlineType: [0, ],
namedType: $Schema.MediaConnection
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Favourites}.
*
* Favourite manga
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaConnection} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Favourites} |
* | **Path** | `Favourites.manga` |
* | **Nullability** | Optional |
* | **Arguments** | 2 |
*/
export interface manga {
kind: "OutputField",
name: "manga",
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
* The amount of entries per page, max 25
*/
perPage: {
kind: "InputField",
name: "perPage",
inlineType: [0, ],
namedType: $Schema.Int
}
},
inlineType: [0, ],
namedType: $Schema.MediaConnection
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Favourites}.
*
* Favourite characters
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.CharacterConnection} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Favourites} |
* | **Path** | `Favourites.characters` |
* | **Nullability** | Optional |
* | **Arguments** | 2 |
*/
export interface characters {
kind: "OutputField",
name: "characters",
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
* The amount of entries per page, max 25
*/
perPage: {
kind: "InputField",
name: "perPage",
inlineType: [0, ],
namedType: $Schema.Int
}
},
inlineType: [0, ],
namedType: $Schema.CharacterConnection
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Favourites}.
*
* Favourite staff
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.StaffConnection} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Favourites} |
* | **Path** | `Favourites.staff` |
* | **Nullability** | Optional |
* | **Arguments** | 2 |
*/
export interface staff {
kind: "OutputField",
name: "staff",
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
* The amount of entries per page, max 25
*/
perPage: {
kind: "InputField",
name: "perPage",
inlineType: [0, ],
namedType: $Schema.Int
}
},
inlineType: [0, ],
namedType: $Schema.StaffConnection
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Favourites}.
*
* Favourite studios
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.StudioConnection} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Favourites} |
* | **Path** | `Favourites.studios` |
* | **Nullability** | Optional |
* | **Arguments** | 2 |
*/
export interface studios {
kind: "OutputField",
name: "studios",
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
* The amount of entries per page, max 25
*/
perPage: {
kind: "InputField",
name: "perPage",
inlineType: [0, ],
namedType: $Schema.Int
}
},
inlineType: [0, ],
namedType: $Schema.StudioConnection
}
