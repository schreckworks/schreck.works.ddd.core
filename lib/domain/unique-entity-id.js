"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniqueEntityID = void 0;
const uuid_1 = require("uuid");
const identifier_1 = require("./identifier");
class UniqueEntityID extends identifier_1.Identifier {
    constructor(id) {
        super(UniqueEntityID.idOrDefaultId(id), UniqueEntityID.isNewIdGenerated(id));
    }
    static create(id) {
        return new UniqueEntityID(id);
    }
    static idOrDefaultId(id) {
        return (id) ? id : uuid_1.v4();
    }
    static isNewIdGenerated(id) {
        const _isNewIdentifier = ((id === undefined) || (id === null));
        // console.log('bubbles', id, _isNewIdentifier);
        return _isNewIdentifier;
    }
}
exports.UniqueEntityID = UniqueEntityID;
//# sourceMappingURL=unique-entity-id.js.map