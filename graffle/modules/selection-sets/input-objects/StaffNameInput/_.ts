import type * as $$Utilities from 'graffle/utilities-for-generated'
import type { GraphqlKit } from 'graffle/utilities-for-generated'
import type { $DefaultSelectionContext } from '../../_context.js'
import type * as $Scalars from '../../scalars/_.js'

export type * as StaffNameInput from './fields.js'

/**
* Input for {@link https://graphql.org/learn/schema/#input-types | InputObject}.
*
* The names of the staff member
*
* # Info
*
* | | |
* | - | - |
* | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinputobjecttype | InputObject ↗} |
* | **Fields** | 5 |
* | **All Fields Nullable** | Yes |
*/
export interface StaffNameInput<_$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> {
/**
* The person's given name
*/
first?: $Scalars.String<_$Context>,
/**
* The person's middle name
*/
middle?: $Scalars.String<_$Context>,
/**
* The person's surname
*/
last?: $Scalars.String<_$Context>,
/**
* The person's full name in their native language
*/
native?: $Scalars.String<_$Context>,
/**
* Other names the character might be referred by
*/
alternative?: GraphqlKit.Document.Object.Var.MaybeSchemaful<Array<$Scalars.String<_$Context>> | null | undefined>
}