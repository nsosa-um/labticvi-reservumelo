"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const resolverAutores_1 = __importDefault(require("./resolverAutores"));
const resolverLibros_1 = __importDefault(require("./resolverLibros"));
const resolverEditoriales_1 = __importDefault(require("./resolverEditoriales"));
const resolvers = [resolverAutores_1.default, resolverLibros_1.default, resolverEditoriales_1.default];
exports.default = resolvers;
//# sourceMappingURL=resolvers.js.map