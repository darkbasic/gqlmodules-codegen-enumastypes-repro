import {createModule} from 'graphql-modules';
import resolvers from './resolvers';
import 'graphql-import-node';
import typeDefs from './typeDefs/a.graphql';

export const ModuleA = createModule({
  id: 'a',
  typeDefs,
  resolvers,
});
