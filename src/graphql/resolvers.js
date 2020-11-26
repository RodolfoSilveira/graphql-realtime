import { fileLoader, mergeResolvers } from 'merge-graphql-schemas'
import path from 'path'

const resolverssArray = fileLoader(path.join(__dirname, 'modules', '**', 'resolvers.js'))
const resolvers = mergeResolvers(resolverssArray)

export default resolvers
