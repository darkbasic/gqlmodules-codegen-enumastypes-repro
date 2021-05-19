/* eslint-disable */
import * as Types from "../../../types/graphql";
import * as gm from "graphql-modules";
export namespace AModule {
  interface DefinedFields {
    Query: 'dummy';
  };
  
  interface DefinedEnumValues {
    Sex: 'MALE' | 'FEMALE';
  };
  
  export type Sex = DefinedEnumValues['Sex'];
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  
  export interface Resolvers {
    Query?: QueryResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      dummy?: gm.Middleware[];
    };
  };
}