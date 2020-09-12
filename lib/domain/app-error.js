"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnexpectedError = void 0;
const result_1 = require("./result");
class UnexpectedError {
    constructor(err) {
        const error = {
            message: `An unexpected error occurred.`,
            error: err
        };
        this.errorResult = result_1.Result.failure(error);
    }
    static create(err) {
        return new UnexpectedError(err);
    }
}
exports.UnexpectedError = UnexpectedError;
//# sourceMappingURL=app-error.js.map