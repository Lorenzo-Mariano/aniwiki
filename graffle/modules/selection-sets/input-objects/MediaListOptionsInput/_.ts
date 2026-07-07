import type * as $$Utilities from 'graffle/utilities-for-generated'
import type { GraphqlKit } from 'graffle/utilities-for-generated'
import type { $DefaultSelectionContext } from '../../_context.js'
import type * as $Scalars from '../../scalars/_.js'

export type * as MediaListOptionsInput from './fields.js'

/**
* Input for {@link https://graphql.org/learn/schema/#input-types | InputObject}.
*
* A user's list options for anime or manga lists
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinputobjecttype | InputObject ↗} |
* | **Fields** | 6 |
* | **All Fields Nullable** | Yes |
*/
export interface MediaListOptionsInput<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* The order each list should be displayed in
*/
sectionOrder?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.String<_$Context>> | null | undefined>,
/**
* If the completed sections of the list should be separated by format
*/
splitCompletedSectionByFormat?: $Scalars.Boolean<_$Context>,
/**
* The names of the user's custom lists
*/
customLists?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.String<_$Context>> | null | undefined>,
/**
* The names of the user's advanced scoring sections
*/
advancedScoring?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.String<_$Context>> | null | undefined>,
/**
* If advanced scoring is enabled
*/
advancedScoringEnabled?: $Scalars.Boolean<_$Context>,
/**
* list theme
*/
theme?: $Scalars.String<_$Context>
}