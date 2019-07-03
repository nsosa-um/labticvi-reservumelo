"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const editorialesDAO_1 = __importDefault(require("../daos/editorialesDAO"));
const editorialesResolver = {
    Query: {
        getEditorial: (_, { id, nombre }) => {
            return editorialesDAO_1.default(id, nombre);
        }
    }
};
exports.default = editorialesResolver;
//# sourceMappingURL=resolverEditoriales.js.map