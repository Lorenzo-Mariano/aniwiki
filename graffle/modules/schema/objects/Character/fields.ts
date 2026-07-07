import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"Character"`
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
value: "Character"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Character}.
*
* The id of the character
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Character} |
* | **Path** | `Character.id` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Character}.
*
* The names of the character
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.CharacterName} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Character} |
* | **Path** | `Character.name` |
* | **Nullability** | Optional |
*/
export interface name {
kind: "OutputField",
name: "name",
arguments: {},
inlineType: [0, ],
namedType: $Schema.CharacterName
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Character}.
*
* Character images
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.CharacterImage} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Character} |
* | **Path** | `Character.image` |
* | **Nullability** | Optional |
*/
export interface image {
kind: "OutputField",
name: "image",
arguments: {},
inlineType: [0, ],
namedType: $Schema.CharacterImage
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Character}.
*
* A general description of the character
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Character} |
* | **Path** | `Character.description` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Character}.
*
* The character's gender. Usually Male, Female, or Non-binary but can be any string.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Character} |
* | **Path** | `Character.gender` |
* | **Nullability** | Optional |
*/
export interface gender {
kind: "OutputField",
name: "gender",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Character}.
*
* The character's birth date
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.FuzzyDate} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Character} |
* | **Path** | `Character.dateOfBirth` |
* | **Nullability** | Optional |
*/
export interface dateOfBirth {
kind: "OutputField",
name: "dateOfBirth",
arguments: {},
inlineType: [0, ],
namedType: $Schema.FuzzyDate
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Character}.
*
* The character's age. Note this is a string, not an int, it may contain further text and additional ages.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Character} |
* | **Path** | `Character.age` |
* | **Nullability** | Optional |
*/
export interface age {
kind: "OutputField",
name: "age",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Character}.
*
* The characters blood type
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Character} |
* | **Path** | `Character.bloodType` |
* | **Nullability** | Optional |
*/
export interface bloodType {
kind: "OutputField",
name: "bloodType",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Character}.
*
* If the character is marked as favourite by the currently authenticated user
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Boolean}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Character} |
* | **Path** | `Character.isFavourite` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Character}.
*
* If the character is blocked from being added to favourites
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Boolean}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Character} |
* | **Path** | `Character.isFavouriteBlocked` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Character}.
*
* The url for the character page on the AniList website
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Character} |
* | **Path** | `Character.siteUrl` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Character}.
*
* Media that includes the character
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaConnection} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Character} |
* | **Path** | `Character.media` |
* | **Nullability** | Optional |
* | **Arguments** | 5 |
*/
export interface media {
kind: "OutputField",
name: "media",
arguments: {
sort: {
kind: "InputField",
name: "sort",
inlineType: [0, [0, ]],
namedType: $Schema.MediaSort
},
type: {
kind: "InputField",
name: "type",
inlineType: [0, ],
namedType: $Schema.MediaType
},
onList: {
kind: "InputField",
name: "onList",
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
namedType: $Schema.MediaConnection
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Character}.
*
* @deprecated No data available
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Character} |
* | **Path** | `Character.updatedAt` |
* | **⚠ Deprecated** | No data available |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Character}.
*
* The amount of user's who have favourited the character
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Character} |
* | **Path** | `Character.favourites` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Character}.
*
* Notes for site moderators
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Character} |
* | **Path** | `Character.modNotes` |
* | **Nullability** | Optional |
*/
export interface modNotes {
kind: "OutputField",
name: "modNotes",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}
