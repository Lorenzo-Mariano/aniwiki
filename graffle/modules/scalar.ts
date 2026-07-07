import * as $$Utilities from 'graffle/utilities-for-generated'
export * from 'graffle/generator-helpers/standard-scalar-types'

//
    //
    //
    //
    // CUSTOM SCALAR TYPE
    // COUNTRYCODE
    // --------------------------------------------------------------------------------------------------
    //                                            CountryCode
    // --------------------------------------------------------------------------------------------------
    //
    //

export const CountryCode = { kind: 'Scalar', name: 'CountryCode', codec: $$Utilities.Codec.create({ encode: (value: any) => String(value), decode: (value: any) => String(value) }) } as $$Utilities.GraphqlKit.Schema.Type.Scalar<'CountryCode', string, string>
export type CountryCode = $$Utilities.GraphqlKit.Schema.Type.Scalar<'CountryCode', string, string>
//
    //
    //
    //
    // CUSTOM SCALAR TYPE
    // FUZZYDATEINT
    // --------------------------------------------------------------------------------------------------
    //                                            FuzzyDateInt
    // --------------------------------------------------------------------------------------------------
    //
    //

export const FuzzyDateInt = { kind: 'Scalar', name: 'FuzzyDateInt', codec: $$Utilities.Codec.create({ encode: (value: any) => String(value), decode: (value: any) => String(value) }) } as $$Utilities.GraphqlKit.Schema.Type.Scalar<'FuzzyDateInt', string, string>
export type FuzzyDateInt = $$Utilities.GraphqlKit.Schema.Type.Scalar<'FuzzyDateInt', string, string>
//
    //
    //
    //
    // CUSTOM SCALAR TYPE
    // JSON
    // --------------------------------------------------------------------------------------------------
    //                                                Json
    // --------------------------------------------------------------------------------------------------
    //
    //

export const Json = { kind: 'Scalar', name: 'Json', codec: $$Utilities.Codec.create({ encode: (value: any) => String(value), decode: (value: any) => String(value) }) } as $$Utilities.GraphqlKit.Schema.Type.Scalar<'Json', string, string>
export type Json = $$Utilities.GraphqlKit.Schema.Type.Scalar<'Json', string, string>


    //
    //
    //
    //
    //
    //
    // ==================================================================================================
    //                                              Registry
    // ==================================================================================================
    //
    //
    //
    //
    //
    //


/**
* Runtime registry of custom scalar codecs.
*
* Maps scalar type names to their codec implementations for encoding/decoding.
*/

      export const $registry = {
        map: {},
      } as $Registry


/**
* Type-level registry of custom scalars.
*
* Provides type information about custom scalars for the type system.
*/
export type $Registry = $$Utilities.Schema.Scalars.Registry.Empty