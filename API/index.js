import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import  typeDefs   from "./Schema/TypeDefs.js"
import resolvers from "./Schema/Resolvers.js"



  // The ApolloServer constructor requires two parameters: your schema
  // definition and your set of resolvers.
  const server = new ApolloServer({
      typeDefs,
      resolvers,
    });
    
  const PORT = 3000

  // Passing an ApolloServer instance to the `startStandaloneServer` function:
  //  1. creates an Express app
  //  2. installs your ApolloServer instance as middleware
  //  3. prepares your app to handle incoming requests
  const { url } = await startStandaloneServer(server, {
    listen: { port: PORT },
  });
  
  console.log(`🚀  Server ready at: ${url}`);