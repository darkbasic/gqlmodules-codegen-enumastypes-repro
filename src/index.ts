import {createApplication} from 'graphql-modules';
import {ModuleA} from './modules/A';
import {ModuleB} from './modules/B';

createApplication({
  modules: [ModuleA, ModuleB],
});
