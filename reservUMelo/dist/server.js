"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const resolvers_1 = __importDefault(require("./resolvers/resolvers"));
const graphql_tools_1 = require("graphql-tools");
const schemas_1 = __importDefault(require("./schemas"));
const schema = graphql_tools_1.mergeSchemas({
    schemas: schemas_1.default,
    resolvers: resolvers_1.default
});
// GraphQL
const server = new apollo_server_1.ApolloServer({
    schema,
});
server.listen(3001).then(({ url }) => {
    console.log(`Servidor corriendo en ${url}`);
});
//# sourceMappingURL=server.js.map