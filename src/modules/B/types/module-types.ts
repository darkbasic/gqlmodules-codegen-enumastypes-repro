/* eslint-disable */
import * as Types from "../../../types/graphql";
import * as gm from "graphql-modules";
export namespace BModule {
  interface DefinedEnumValues {
    Status: 'PENDING' | 'ACCEPTED' | 'DECLINED' | 'BLOCKED';
  };
  
  export type Status = DefinedEnumValues['Status'];
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
  };
}