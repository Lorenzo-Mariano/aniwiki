import type * as $$Utilities from 'graffle/utilities-for-generated'
import type { GraphqlKit } from 'graffle/utilities-for-generated'
import type { $DefaultSelectionContext } from '../../_context.js'
import type * as $Scalars from '../../scalars/_.js'

export type * as CharacterNameInput from './fields.js'

/**
* Input for {@link https://graphql.org/learn/schema/#input-types | InputObject}.
*
* The names of the character
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinputobjecttype | InputObject ↗} |
* | **Fields** | 6 |
* | **All Fields Nullable** | Yes |
*/
export interface CharacterNameInput<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* The character's given name
*/
first?: $Scalars.String<_$Context>,
/**
* The character's middle name
*/
middle?: $Scalars.String<_$Context>,
/**
* The character's surname
*/
last?: $Scalars.String<_$Context>,
/**
* The character's full name in their native language
*/
native?: $Scalars.String<_$Context>,
/**
* Other names the character might be referred by
*/
alternative?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.String<_$Context>> | null | undefined>,
/**
* Other names the character might be referred to as but are spoilers
*/
alternativeSpoiler?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.String<_$Context>> | null | undefined>
}