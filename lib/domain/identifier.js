"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Identifier = void 0;
class Identifier {
    constructor(value, isNewIdentifier) {
        this.value = value;
        this._isNewIdentifier = false;
        this.value = value;
        this._isNewIdentifier = isNewIdentifier;
    }
    get isNewIdentifier() {
        return this._isNewIdentifier;
    }
    equals(id) {
        if (id === null || id === undefined) {
            return false;
        }
        if (!(id instanceof this.constructor)) {
            return false;
        }
        return (id.toValue() === this.value);
    }
    toString() {
        return String(this.value);
    }
    /**
     * Return raw value of identifier
     */
    toValue() {
        return this.value;
    }
}
exports.Identifier = Identifier;
//# sourceMappingURL=identifier.js.map