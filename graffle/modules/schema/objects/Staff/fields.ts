import type { Schema as $Schema } from '../../_.js'

/**
* GraphQL `__typename` meta-field. The name of the object type currently being queried.
*
* Type: `"Staff"`
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
value: "Staff"
}
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Staff}.
*
* The id of the staff member
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Staff} |
* | **Path** | `Staff.id` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Staff}.
*
* The names of the staff member
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.StaffName} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Staff} |
* | **Path** | `Staff.name` |
* | **Nullability** | Optional |
*/
export interface name {
kind: "OutputField",
name: "name",
arguments: {},
inlineType: [0, ],
namedType: $Schema.StaffName
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Staff}.
*
* The primary language the staff member dub's in
*
* @deprecated Replaced with languageV2
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.StaffLanguage} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Parent** | {@link $Schema.Staff} |
* | **Path** | `Staff.language` |
* | **⚠ Deprecated** | Replaced with languageV2 |
* | **Nullability** | Optional |
*/
export interface language {
kind: "OutputField",
name: "language",
arguments: {},
inlineType: [0, ],
namedType: $Schema.StaffLanguage
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Staff}.
*
* The primary language of the staff member. Current values: Japanese, English,
* Korean, Italian, Spanish, Portuguese, French, German, Hebrew, Hungarian,
* Chinese, Arabic, Filipino, Catalan, Finnish, Turkish, Dutch, Swedish, Thai,
* Tagalog, Malaysian, Indonesian, Vietnamese, Nepali, Hindi, Urdu
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Staff} |
* | **Path** | `Staff.languageV2` |
* | **Nullability** | Optional |
*/
export interface languageV2 {
kind: "OutputField",
name: "languageV2",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Staff}.
*
* The staff images
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.StaffImage} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Staff} |
* | **Path** | `Staff.image` |
* | **Nullability** | Optional |
*/
export interface image {
kind: "OutputField",
name: "image",
arguments: {},
inlineType: [0, ],
namedType: $Schema.StaffImage
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Staff}.
*
* A general description of the staff member
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Staff} |
* | **Path** | `Staff.description` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Staff}.
*
* The person's primary occupations
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Staff} |
* | **Path** | `Staff.primaryOccupations` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface primaryOccupations {
kind: "OutputField",
name: "primaryOccupations",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Staff}.
*
* The staff's gender. Usually Male, Female, or Non-binary but can be any string.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Staff} |
* | **Path** | `Staff.gender` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Staff}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.FuzzyDate} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Staff} |
* | **Path** | `Staff.dateOfBirth` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Staff}.
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.FuzzyDate} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Staff} |
* | **Path** | `Staff.dateOfDeath` |
* | **Nullability** | Optional |
*/
export interface dateOfDeath {
kind: "OutputField",
name: "dateOfDeath",
arguments: {},
inlineType: [0, ],
namedType: $Schema.FuzzyDate
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Staff}.
*
* The person's age in years
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Staff} |
* | **Path** | `Staff.age` |
* | **Nullability** | Optional |
*/
export interface age {
kind: "OutputField",
name: "age",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Staff}.
*
* [startYear, endYear] (If the 2nd value is not present staff is still active)
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int}[] |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Staff} |
* | **Path** | `Staff.yearsActive` |
* | **Nullability** | Optional |
* | **List** | Yes |
*/
export interface yearsActive {
kind: "OutputField",
name: "yearsActive",
arguments: {},
inlineType: [0, [0, ]],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Staff}.
*
* The persons birthplace or hometown
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Staff} |
* | **Path** | `Staff.homeTown` |
* | **Nullability** | Optional |
*/
export interface homeTown {
kind: "OutputField",
name: "homeTown",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Staff}.
*
* The persons blood type
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Staff} |
* | **Path** | `Staff.bloodType` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Staff}.
*
* If the staff member is marked as favourite by the currently authenticated user
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Boolean}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Staff} |
* | **Path** | `Staff.isFavourite` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Staff}.
*
* If the staff member is blocked from being added to favourites
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Boolean}! |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Staff} |
* | **Path** | `Staff.isFavouriteBlocked` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Staff}.
*
* The url for the staff page on the AniList website
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Staff} |
* | **Path** | `Staff.siteUrl` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Staff}.
*
* Media where the staff member has a production role
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaConnection} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Staff} |
* | **Path** | `Staff.staffMedia` |
* | **Nullability** | Optional |
* | **Arguments** | 5 |
*/
export interface staffMedia {
kind: "OutputField",
name: "staffMedia",
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Staff}.
*
* Characters voiced by the actor
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.CharacterConnection} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Staff} |
* | **Path** | `Staff.characters` |
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
namedType: $Schema.CharacterSort
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Staff}.
*
* Media the actor voiced characters in. (Same data as characters with media as node instead of characters)
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.MediaConnection} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Staff} |
* | **Path** | `Staff.characterMedia` |
* | **Nullability** | Optional |
* | **Arguments** | 4 |
*/
export interface characterMedia {
kind: "OutputField",
name: "characterMedia",
arguments: {
sort: {
kind: "InputField",
name: "sort",
inlineType: [0, [0, ]],
namedType: $Schema.MediaSort
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Staff}.
*
* @deprecated No data available
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Staff} |
* | **Path** | `Staff.updatedAt` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Staff}.
*
* Staff member that the submission is referencing
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Staff} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Staff} |
* | **Path** | `Staff.staff` |
* | **Nullability** | Optional |
*/
export interface staff {
kind: "OutputField",
name: "staff",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Staff
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Staff}.
*
* Submitter for the submission
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.User} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $Schema.Staff} |
* | **Path** | `Staff.submitter` |
* | **Nullability** | Optional |
*/
export interface submitter {
kind: "OutputField",
name: "submitter",
arguments: {},
inlineType: [0, ],
namedType: $Schema.User
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Staff}.
*
* Status of the submission
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Staff} |
* | **Path** | `Staff.submissionStatus` |
* | **Nullability** | Optional |
*/
export interface submissionStatus {
kind: "OutputField",
name: "submissionStatus",
arguments: {},
inlineType: [0, ],
namedType: $Schema.Int
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Staff}.
*
* Inner details of submission status
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Staff} |
* | **Path** | `Staff.submissionNotes` |
* | **Nullability** | Optional |
*/
export interface submissionNotes {
kind: "OutputField",
name: "submissionNotes",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}

/**
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Staff}.
*
* The amount of user's who have favourited the staff member
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Staff} |
* | **Path** | `Staff.favourites` |
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
* GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Staff}.
*
* Notes for site moderators
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $Schema.String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $Schema.Staff} |
* | **Path** | `Staff.modNotes` |
* | **Nullability** | Optional |
*/
export interface modNotes {
kind: "OutputField",
name: "modNotes",
arguments: {},
inlineType: [0, ],
namedType: $Schema.String
}
