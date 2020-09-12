"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseCaseError = void 0;
class UseCaseError {
    constructor(message, error) {
        this.message = message;
        this.error = error || new Error();
    }
}
exports.UseCaseError = UseCaseError;
//# sourceMappingURL=use-case-error.js.map