import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"Media"`
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
value: "Media"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Media}.
*
* The id of the media
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Media} |
* | **Path** | `Media.id` |
* | **Nullability** | Required |
*/
export interface id {
kind: "OutputField",
name: "id",
arguments: {},
inlineType: [1, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Media}.
*
* The mal id of the media
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Media} |
* | **Path** | `Media.idMal` |
* | **Nullability** | Optional |
*/
export interface idMal {
kind: "OutputField",
name: "idMal",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Media}.
*
* The official titles of the media in various languages
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaTitle} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Media} |
* | **Path** | `Media.title` |
* | **Nullability** | Optional |
*/
export interface title {
kind: "OutputField",
name: "title",
arguments: {},
inlineType: [0, ],
namedType: $Schema.MediaTitle
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Media}.
*
* The type of the media; anime or manga
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaType} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Parent** | {@link $Schema.Media} |
* | **Path** | `Media.type` |
* | **Nullability** | Optional |
*/
export interface type {
kind: "OutputField",
name: "type",
arguments: {},
inlineType: [0, ],
namedType: $Schema.MediaType
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Media}.
*
* The format the media was released in
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaFormat} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Parent** | {@link $Schema.Media} |
* | **Path** | `Media.format` |
* | **Nullability** | Optional |
*/
export interface format {
kind: "OutputField",
name: "format",
arguments: {},
inlineType: [0, ],
namedType: $Schema.MediaFormat
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Media}.
*
* The current releasing status of the media
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaStatus} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Parent** | {@link $Schema.Media} |
* | **Path** | `Media.status` |
* | **Nullability** | Optional |
* | **Arguments** | 1 |
*/
export interface status {
kind: "OutputField",
name: "status",
arguments: {
/**
* Provide 2 to use new version 2 of sources enum
*/
version: {
kind: "InputField",
name: "version",
inlineType: [0, ],
namedType: $Schema.Int
}
},
inlineType: [0, ],
namedType: $Schema.MediaStatus
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Media}.
*
* Short description of the media's story and characters
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Media} |
* | **Path** | `Media.description` |
* | **Nullability** | Optional |
* | **Arguments** | 1 |
*/
export interface description {
kind: "OutputField",
name: "description",
arguments: {
/**
* Return the string in pre-parsed html instead of markdown
*/
asHtml: {
kind: "InputField",
name: "asHtml",
inlineType: [0, ],
namedType: $Schema.Boolean
}
},
inlineType: [0, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Media}.
*
* The first official release date of the media
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.FuzzyDate} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Media} |
* | **Path** | `Media.startDate` |
* | **Nullability** | Optional |
*/
export interface startDate {
kind: "OutputField",
name: "startDate",
arguments: {},
inlineType: [0, ],
namedType: $Schema.FuzzyDate
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Media}.
*
* The last official release date of the media
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.FuzzyDate} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Media} |
* | **Path** | `Media.endDate` |
* | **Nullability** | Optional |
*/
export interface endDate {
kind: "OutputField",
name: "endDate",
arguments: {},
inlineType: [0, ],
namedType: $Schema.FuzzyDate
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Media}.
*
* The season the media was initially released in
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaSeason} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Parent** | {@link $Schema.Media} |
* | **Path** | `Media.season` |
* | **Nullability** | Optional |
*/
export interface season {
kind: "OutputField",
name: "season",
arguments: {},
inlineType: [0, ],
namedType: $Schema.MediaSeason
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Media}.
*
* The season year the media was initially released in
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Media} |
* | **Path** | `Media.seasonYear` |
* | **Nullability** | Optional |
*/
export interface seasonYear {
kind: "OutputField",
name: "seasonYear",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Media}.
*
* The year & season the media was initially released in
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Media} |
* | **Path** | `Media.seasonInt` |
* | **Nullability** | Optional |
*/
export interface seasonInt {
kind: "OutputField",
name: "seasonInt",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Media}.
*
* The amount of episodes the anime has when complete
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Media} |
* | **Path** | `Media.episodes` |
* | **Nullability** | Optional |
*/
export interface episodes {
kind: "OutputField",
name: "episodes",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Media}.
*
* The general length of each anime episode in minutes
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Media} |
* | **Path** | `Media.duration` |
* | **Nullability** | Optional |
*/
export interface duration {
kind: "OutputField",
name: "duration",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Media}.
*
* The amount of chapters the manga has when complete
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Media} |
* | **Path** | `Media.chapters` |
* | **Nullability** | Optional |
*/
export interface chapters {
kind: "OutputField",
name: "chapters",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Media}.
*
* The amount of volumes the manga has when complete
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Media} |
* | **Path** | `Media.volumes` |
* | **Nullability** | Optional |
*/
export interface volumes {
kind: "OutputField",
name: "volumes",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Media}.
*
* Where the media was created. (ISO 3166-1 alpha-2)
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.CountryCode} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
* | **Parent** | {@link $Schema.Media} |
* | **Path** | `Media.countryOfOrigin` |
* | **Nullability** | Optional |
*/
export interface countryOfOrigin {
kind: "OutputField",
name: "countryOfOrigin",
arguments: {},
inlineType: [0, ],
namedType: $Schema.CountryCode
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Media}.
*
* If the media is officially licensed or a self-published doujin release
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Media} |
* | **Path** | `Media.isLicensed` |
* | **Nullability** | Optional |
*/
export interface isLicensed {
kind: "OutputField",
name: "isLicensed",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Boolean
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Media}.
*
* Source type the media was adapted from.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaSource} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Parent** | {@link $Schema.Media} |
* | **Path** | `Media.source` |
* | **Nullability** | Optional |
* | **Arguments** | 1 |
*/
export interface source {
kind: "OutputField",
name: "source",
arguments: {
/**
* Provide 2 or 3 to use new version 2 or 3 of sources enum
*/
version: {
kind: "InputField",
name: "version",
inlineType: [0, ],
namedType: $Schema.Int
}
},
inlineType: [0, ],
namedType: $Schema.MediaSource
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Media}.
*
* Official Twitter hashtags for the media
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Media} |
* | **Path** | `Media.hashtag` |
* | **Nullability** | Optional |
*/
export interface hashtag {
kind: "OutputField",
name: "hashtag",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Media}.
*
* Media trailer or advertisement
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaTrailer} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Media} |
* | **Path** | `Media.trailer` |
* | **Nullability** | Optional |
*/
export interface trailer {
kind: "OutputField",
name: "trailer",
arguments: {},
inlineType: [0, ],
namedType: $Schema.MediaTrailer
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Media}.
*
* When the media's data was last updated
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Media} |
* | **Path** | `Media.updatedAt` |
* | **Nullability** | Optional |
*/
export interface updatedAt {
kind: "OutputField",
name: "updatedAt",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Media}.
*
* The cover images of the media
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaCoverImage} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Media} |
* | **Path** | `Media.coverImage` |
* | **Nullability** | Optional |
*/
export interface coverImage {
kind: "OutputField",
name: "coverImage",
arguments: {},
inlineType: [0, ],
namedType: $Schema.MediaCoverImage
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Media}.
*
* The banner image of the media
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Media} |
* | **Path** | `Media.bannerImage` |
* | **Nullability** | Optional |
*/
export interface bannerImage {
kind: "OutputField",
name: "bannerImage",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Media}.
*
* The genres of the media
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Media} |
* | **Path** | `Media.genres` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface genres {
kind: "OutputField",
name: "genres",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Media}.
*
* Alternative titles of the media
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Media} |
* | **Path** | `Media.synonyms` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface synonyms {
kind: "OutputField",
name: "synonyms",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Media}.
*
* A weighted average score of all the user's scores of the media
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Media} |
* | **Path** | `Media.averageScore` |
* | **Nullability** | Optional |
*/
export interface averageScore {
kind: "OutputField",
name: "averageScore",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Media}.
*
* Mean score of all the user's scores of the media
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Media} |
* | **Path** | `Media.meanScore` |
* | **Nullability** | Optional |
*/
export interface meanScore {
kind: "OutputField",
name: "meanScore",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Media}.
*
* The number of users with the media on their list
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Media} |
* | **Path** | `Media.popularity` |
* | **Nullability** | Optional |
*/
export interface popularity {
kind: "OutputField",
name: "popularity",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Media}.
*
* Locked media may not be added to lists our favorited. This may be due to the entry pending for deletion or other reasons.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Media} |
* | **Path** | `Media.isLocked` |
* | **Nullability** | Optional |
*/
export interface isLocked {
kind: "OutputField",
name: "isLocked",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Boolean
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Media}.
*
* The amount of related activity in the past hour
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Media} |
* | **Path** | `Media.trending` |
* | **Nullability** | Optional |
*/
export interface trending {
kind: "OutputField",
name: "trending",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Media}.
*
* The amount of user's who have favourited the media
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Media} |
* | **Path** | `Media.favourites` |
* | **Nullability** | Optional |
*/
export interface favourites {
kind: "OutputField",
name: "favourites",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Media}.
*
* List of tags that describes elements and themes of the media
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaTag}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Media} |
* | **Path** | `Media.tags` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface tags {
kind: "OutputField",
name: "tags",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.MediaTag
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Media}.
*
* Other media in the same or connecting franchise
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaConnection} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Media} |
* | **Path** | `Media.relations` |
* | **Nullability** | Optional |
*/
export interface relations {
kind: "OutputField",
name: "relations",
arguments: {},
inlineType: [0, ],
namedType: $Schema.MediaConnection
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Media}.
*
* The characters in the media
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.CharacterConnection} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Media} |
* | **Path** | `Media.characters` |
* | **Nullability** | Optional |
* | **Arguments** | 4 |
*/
export interface characters {
kind: "OutputField",
name: "characters",
arguments: {
sort: {
kind: "InputField",
name: "sort",
inlineType: [0, [0, ]],
namedType: $Schema.CharacterSort
},
role: {
kind: "InputField",
name: "role",
inlineType: [0, ],
namedType: $Schema.CharacterRole
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
namedType: $Schema.CharacterConnection
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Media}.
*
* The staff who produced the media
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.StaffConnection} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Media} |
* | **Path** | `Media.staff` |
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
namedType: $Schema.StaffSort
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
namedType: $Schema.StaffConnection
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Media}.
*
* The companies who produced the media
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.StudioConnection} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Media} |
* | **Path** | `Media.studios` |
* | **Nullability** | Optional |
* | **Arguments** | 2 |
*/
export interface studios {
kind: "OutputField",
name: "studios",
arguments: {
sort: {
kind: "InputField",
name: "sort",
inlineType: [0, [0, ]],
namedType: $Schema.StudioSort
},
isMain: {
kind: "InputField",
name: "isMain",
inlineType: [0, ],
namedType: $Schema.Boolean
}
},
inlineType: [0, ],
namedType: $Schema.StudioConnection
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Media}.
*
* If the media is marked as favourite by the current authenticated user
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Boolean}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Media} |
* | **Path** | `Media.isFavourite` |
* | **Nullability** | Required |
*/
export interface isFavourite {
kind: "OutputField",
name: "isFavourite",
arguments: {},
inlineType: [1, ],
namedType: $Schema.Boolean
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Media}.
*
* If the media is blocked from being added to favourites
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Boolean}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Media} |
* | **Path** | `Media.isFavouriteBlocked` |
* | **Nullability** | Required |
*/
export interface isFavouriteBlocked {
kind: "OutputField",
name: "isFavouriteBlocked",
arguments: {},
inlineType: [1, ],
namedType: $Schema.Boolean
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Media}.
*
* If the media is intended only for 18+ adult audiences
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Media} |
* | **Path** | `Media.isAdult` |
* | **Nullability** | Optional |
*/
export interface isAdult {
kind: "OutputField",
name: "isAdult",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Boolean
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Media}.
*
* The media's next episode airing schedule
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.AiringSchedule} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Media} |
* | **Path** | `Media.nextAiringEpisode` |
* | **Nullability** | Optional |
*/
export interface nextAiringEpisode {
kind: "OutputField",
name: "nextAiringEpisode",
arguments: {},
inlineType: [0, ],
namedType: $Schema.AiringSchedule
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Media}.
*
* The media's entire airing schedule
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.AiringScheduleConnection} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Media} |
* | **Path** | `Media.airingSchedule` |
* | **Nullability** | Optional |
* | **Arguments** | 3 |
*/
export interface airingSchedule {
kind: "OutputField",
name: "airingSchedule",
arguments: {
/**
* Filter to episodes that have not yet aired
*/
notYetAired: {
kind: "InputField",
name: "notYetAired",
inlineType: [0, ],
namedType: $Schema.Boolean
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
namedType: $Schema.AiringScheduleConnection
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Media}.
*
* The media's daily trend stats
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaTrendConnection} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Media} |
* | **Path** | `Media.trends` |
* | **Nullability** | Optional |
* | **Arguments** | 4 |
*/
export interface trends {
kind: "OutputField",
name: "trends",
arguments: {
sort: {
kind: "InputField",
name: "sort",
inlineType: [0, [0, ]],
namedType: $Schema.MediaTrendSort
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
namedType: $Schema.MediaTrendConnection
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Media}.
*
* External links to another site related to the media
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaExternalLink}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Media} |
* | **Path** | `Media.externalLinks` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface externalLinks {
kind: "OutputField",
name: "externalLinks",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.MediaExternalLink
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Media}.
*
* Data and links to legal streaming episodes on external sites
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaStreamingEpisode}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Media} |
* | **Path** | `Media.streamingEpisodes` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface streamingEpisodes {
kind: "OutputField",
name: "streamingEpisodes",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.MediaStreamingEpisode
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Media}.
*
* The ranking of the media in a particular time span and format compared to other media
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaRank}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Media} |
* | **Path** | `Media.rankings` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface rankings {
kind: "OutputField",
name: "rankings",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.MediaRank
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Media}.
*
* The authenticated user's media list entry for the media
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaList} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Media} |
* | **Path** | `Media.mediaListEntry` |
* | **Nullability** | Optional |
*/
export interface mediaListEntry {
kind: "OutputField",
name: "mediaListEntry",
arguments: {},
inlineType: [0, ],
namedType: $Schema.MediaList
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Media}.
*
* User reviews of the media
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.ReviewConnection} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Media} |
* | **Path** | `Media.reviews` |
* | **Nullability** | Optional |
* | **Arguments** | 4 |
*/
export interface reviews {
kind: "OutputField",
name: "reviews",
arguments: {
limit: {
kind: "InputField",
name: "limit",
inlineType: [0, ],
namedType: $Schema.Int
},
sort: {
kind: "InputField",
name: "sort",
inlineType: [0, [0, ]],
namedType: $Schema.ReviewSort
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
namedType: $Schema.ReviewConnection
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Media}.
*
* User recommendations for similar media
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.RecommendationConnection} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Media} |
* | **Path** | `Media.recommendations` |
* | **Nullability** | Optional |
* | **Arguments** | 3 |
*/
export interface recommendations {
kind: "OutputField",
name: "recommendations",
arguments: {
sort: {
kind: "InputField",
name: "sort",
inlineType: [0, [0, ]],
namedType: $Schema.RecommendationSort
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
namedType: $Schema.RecommendationConnection
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Media}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaStats} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Media} |
* | **Path** | `Media.stats` |
* | **Nullability** | Optional |
*/
export interface stats {
kind: "OutputField",
name: "stats",
arguments: {},
inlineType: [0, ],
namedType: $Schema.MediaStats
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Media}.
*
* The url for the media page on the AniList website
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Media} |
* | **Path** | `Media.siteUrl` |
* | **Nullability** | Optional |
*/
export interface siteUrl {
kind: "OutputField",
name: "siteUrl",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Media}.
*
* If the media should have forum thread automatically created for it on airing episode release
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Media} |
* | **Path** | `Media.autoCreateForumThread` |
* | **Nullability** | Optional |
*/
export interface autoCreateForumThread {
kind: "OutputField",
name: "autoCreateForumThread",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Boolean
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Media}.
*
* If the media is blocked from being recommended to/from
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Media} |
* | **Path** | `Media.isRecommendationBlocked` |
* | **Nullability** | Optional |
*/
export interface isRecommendationBlocked {
kind: "OutputField",
name: "isRecommendationBlocked",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Boolean
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Media}.
*
* If the media is blocked from being reviewed
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Boolean} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Media} |
* | **Path** | `Media.isReviewBlocked` |
* | **Nullability** | Optional |
*/
export interface isReviewBlocked {
kind: "OutputField",
name: "isReviewBlocked",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Boolean
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Media}.
*
* Notes for site moderators
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Media} |
* | **Path** | `Media.modNotes` |
* | **Nullability** | Optional |
*/
export interface modNotes {
kind: "OutputField",
name: "modNotes",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}
