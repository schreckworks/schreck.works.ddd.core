"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
const unique_entity_id_1 = require("./unique-entity-id");
const isEntity = (v) => {
    return v instanceof Entity;
};
class Entity {
    constructor(props, id) {
        this._id = id ? id : unique_entity_id_1.UniqueEntityID.create();
        this.props = props;
    }
    equals(object) {
        if (object == null || object == undefined) {
            return false;
        }
        if (this === object) {
            return true;
        }
        if (!isEntity(object)) {
            return false;
        }
        return this._id.equals(object._id);
    }
}
exports.Entity = Entity;
//# sourceMappingURL=entity.js.map