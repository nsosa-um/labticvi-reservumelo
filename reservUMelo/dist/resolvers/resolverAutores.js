"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const autoresDAO_1 = __importDefault(require("../daos/autoresDAO"));
const autoresResolver = {
    Query: {
        getAutorByID: (_, { id }) => {
            return autoresDAO_1.default(id);
        }
    }
};
exports.default = autoresResolver;
//# sourceMappingURL=resolverAutores.js.map