import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"SiteStatistics"`
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
value: "SiteStatistics"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.SiteStatistics}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.SiteTrendConnection} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.SiteStatistics} |
* | **Path** | `SiteStatistics.users` |
* | **Nullability** | Optional |
* | **Arguments** | 3 |
*/
export interface users {
kind: "OutputField",
name: "users",
arguments: {
sort: {
kind: "InputField",
name: "sort",
inlineType: [0, [0, ]],
namedType: $Schema.SiteTrendSort
},
/**
* The page
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
namedType: $Schema.SiteTrendConnection
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.SiteStatistics}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.SiteTrendConnection} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.SiteStatistics} |
* | **Path** | `SiteStatistics.anime` |
* | **Nullability** | Optional |
* | **Arguments** | 3 |
*/
export interface anime {
kind: "OutputField",
name: "anime",
arguments: {
sort: {
kind: "InputField",
name: "sort",
inlineType: [0, [0, ]],
namedType: $Schema.SiteTrendSort
},
/**
* The page
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
namedType: $Schema.SiteTrendConnection
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.SiteStatistics}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.SiteTrendConnection} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.SiteStatistics} |
* | **Path** | `SiteStatistics.manga` |
* | **Nullability** | Optional |
* | **Arguments** | 3 |
*/
export interface manga {
kind: "OutputField",
name: "manga",
arguments: {
sort: {
kind: "InputField",
name: "sort",
inlineType: [0, [0, ]],
namedType: $Schema.SiteTrendSort
},
/**
* The page
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
namedType: $Schema.SiteTrendConnection
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.SiteStatistics}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.SiteTrendConnection} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.SiteStatistics} |
* | **Path** | `SiteStatistics.characters` |
* | **Nullability** | Optional |
* | **Arguments** | 3 |
*/
export interface characters {
kind: "OutputField",
name: "characters",
arguments: {
sort: {
kind: "InputField",
name: "sort",
inlineType: [0, [0, ]],
namedType: $Schema.SiteTrendSort
},
/**
* The page
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
namedType: $Schema.SiteTrendConnection
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.SiteStatistics}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.SiteTrendConnection} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.SiteStatistics} |
* | **Path** | `SiteStatistics.staff` |
* | **Nullability** | Optional |
* | **Arguments** | 3 |
*/
export interface staff {
kind: "OutputField",
name: "staff",
arguments: {
sort: {
kind: "InputField",
name: "sort",
inlineType: [0, [0, ]],
namedType: $Schema.SiteTrendSort
},
/**
* The page
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
namedType: $Schema.SiteTrendConnection
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.SiteStatistics}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.SiteTrendConnection} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.SiteStatistics} |
* | **Path** | `SiteStatistics.studios` |
* | **Nullability** | Optional |
* | **Arguments** | 3 |
*/
export interface studios {
kind: "OutputField",
name: "studios",
arguments: {
sort: {
kind: "InputField",
name: "sort",
inlineType: [0, [0, ]],
namedType: $Schema.SiteTrendSort
},
/**
* The page
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
namedType: $Schema.SiteTrendConnection
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.SiteStatistics}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.SiteTrendConnection} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.SiteStatistics} |
* | **Path** | `SiteStatistics.reviews` |
* | **Nullability** | Optional |
* | **Arguments** | 3 |
*/
export interface reviews {
kind: "OutputField",
name: "reviews",
arguments: {
sort: {
kind: "InputField",
name: "sort",
inlineType: [0, [0, ]],
namedType: $Schema.SiteTrendSort
},
/**
* The page
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
namedType: $Schema.SiteTrendConnection
}
