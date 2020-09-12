"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRoot = void 0;
const entity_1 = require("./entity");
class AggregateRoot extends entity_1.Entity {
    get id() {
        return this._id;
    }
}
exports.AggregateRoot = AggregateRoot;
//# sourceMappingURL=aggregate-root.js.map