import {createModule} from 'graphql-modules';
import resolvers from './resolvers';
import 'graphql-import-node';
import typeDefs from './typeDefs/b.graphql';

export const ModuleB = createModule({
  id: 'b',
  typeDefs,
  resolvers,
});
