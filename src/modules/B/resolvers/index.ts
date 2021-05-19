//import {Resolvers} from '../../../types/graphql';
import {BModule} from '../types/module-types';

const resolvers: BModule.Resolvers = {
  Status: {
    PENDING: 0,
    ACCEPTED: 1,
    DECLINED: 2,
    BLOCKED: 3,
  },
};

export default resolvers;
