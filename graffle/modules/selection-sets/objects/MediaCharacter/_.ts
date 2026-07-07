import type * as $$Utilities from 'graffle/utilities-for-generated'
import type { GraphqlKit } from 'graffle/utilities-for-generated'
import type * as $Fields from './fields.js'
import type { $DefaultSelectionContext } from '../../_context.js'
import type { $FragmentInline } from './fragment.js'

export type * as MediaCharacter from './__.js'

/**
* Selection set for {@link https://graphql.org/learn/schema/#object-types | Object} type.
*
* Internal - Media characters separated
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
* | **Fields** | 7 |
*/
export interface MediaCharacter<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> extends GraphqlKit.Document.Object.Select.Bases.ObjectLike {

      /**
* The id of the connection
*
* ```graphql
* id: Int
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Int} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$MediaCharacter} |
* | **Path** | `MediaCharacter.id` |
* | **Nullability** | Optional |
*/
id?: $Fields.id.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.id<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The characters role in the media
*
* ```graphql
* role: CharacterRole
*
* enum CharacterRole {
* MAIN
* SUPPORTING
* BACKGROUND
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$CharacterRole} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
* | **Parent** | {@link $NamedTypes.$MediaCharacter} |
* | **Path** | `MediaCharacter.role` |
* | **Nullability** | Optional |
*/
role?: $Fields.role.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.role<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* ```graphql
* roleNotes: String
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$MediaCharacter} |
* | **Path** | `MediaCharacter.roleNotes` |
* | **Nullability** | Optional |
*/
roleNotes?: $Fields.roleNotes.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.roleNotes<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* ```graphql
* dubGroup: String
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$MediaCharacter} |
* | **Path** | `MediaCharacter.dubGroup` |
* | **Nullability** | Optional |
*/
dubGroup?: $Fields.dubGroup.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.dubGroup<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* Media specific character name
*
* ```graphql
* characterName: String
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$String} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
* | **Parent** | {@link $NamedTypes.$MediaCharacter} |
* | **Path** | `MediaCharacter.characterName` |
* | **Nullability** | Optional |
*/
characterName?: $Fields.characterName.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.characterName<_$Context>> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
/**
* The characters in the media voiced by the parent actor
*
* ```graphql
* character: Character
*
* type Character {
* id: Int!
* name: CharacterName
* image: CharacterImage
* description(asHtml: Boolean): String
* gender: String
* dateOfBirth: FuzzyDate
* age: String
* bloodType: String
* isFavourite: Boolean!
* isFavouriteBlocked: Boolean!
* siteUrl: String
* media(sort: [MediaSort], type: MediaType, onList: Boolean, page: Int, perPage: Int): MediaConnection
* updatedAt: Int @deprecated(reason: "No data available")
* favourites: Int
* modNotes: String
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Character} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$MediaCharacter} |
* | **Path** | `MediaCharacter.character` |
* | **Nullability** | Optional |
*/
character?: $Fields.character.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.character<_$Context>>
/**
* The voice actor of the character
*
* ```graphql
* voiceActor: Staff
*
* type Staff {
* id: Int!
* name: StaffName
* language: StaffLanguage @deprecated(reason: "Replaced with languageV2")
* languageV2: String
* image: StaffImage
* description(asHtml: Boolean): String
* primaryOccupations: [String]
* gender: String
* dateOfBirth: FuzzyDate
* dateOfDeath: FuzzyDate
* age: Int
* yearsActive: [Int]
* homeTown: String
* bloodType: String
* isFavourite: Boolean!
* isFavouriteBlocked: Boolean!
* siteUrl: String
* staffMedia(sort: [MediaSort], type: MediaType, onList: Boolean, page: Int, perPage: Int): MediaConnection
* characters(sort: [CharacterSort], page: Int, perPage: Int): CharacterConnection
* characterMedia(sort: [MediaSort], onList: Boolean, page: Int, perPage: Int): MediaConnection
* updatedAt: Int @deprecated(reason: "No data available")
* staff: Staff
* submitter: User
* submissionStatus: Int
* submissionNotes: String
* favourites: Int
* modNotes: String
* }
* ```
*
* # Info
*
* | | |
* | - | - |
* | **Type** | {@link $NamedTypes.$Staff} |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
* | **Parent** | {@link $NamedTypes.$MediaCharacter} |
* | **Path** | `MediaCharacter.voiceActor` |
* | **Nullability** | Optional |
*/
voiceActor?: $Fields.voiceActor.$Expanded<_$Context>| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<$Fields.voiceActor<_$Context>>
      
      /**
* Inline fragments for field groups.
*
* Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
* selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
*
* @see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments}
*/
___?: $FragmentInline<_$Context> | $FragmentInline<_$Context>[]
      /**
* A meta field. Is the name of the type being selected.
*
* @see {@link https://graphql.org/learn/queries/#meta-fields | Meta Fields}
*/
__typename?: GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator| GraphqlKit.Document.Object.Select.SelectAlias.SelectAlias<GraphqlKit.Document.Object.Select.Indicator.NoArgsIndicator> | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasShort | GraphqlKit.Document.Object.Select.SelectAlias.SelectAliasString
    
}