import { ApolloServer } from "apollo-server";
import resolvers from "./resolvers/resolvers";
import { GraphQLSchema } from "graphql";
import { mergeSchemas } from "graphql-tools";
import schemas from "./schemas";

const schema: GraphQLSchema = mergeSchemas({
	schemas,
	resolvers
});

// GraphQL
const server = new ApolloServer({
	schema,
	
});

server.listen(3001).then(({ url }) => {
	console.log(`Servidor corriendo en ${url}`);
});

