"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const module_alias_1 = __importDefault(require("module-alias"));
const path_1 = __importDefault(require("path"));
const rootPath = path_1.default.resolve(__dirname, '..', '..', 'dist');
module_alias_1.default.addAliases({
    '@src': rootPath,
});
//# sourceMappingURL=aliases.js.map