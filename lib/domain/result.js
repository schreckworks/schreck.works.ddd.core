"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Result = void 0;
class Result {
    constructor(isSuccess, error, value) {
        if (isSuccess && error) {
            throw new Error("InvalidOperation: A result cannot be successful and contain an error");
        }
        if (!isSuccess && !error) {
            throw new Error("InvalidOperation: A failing result needs to contain an error message");
        }
        this.isSuccess = isSuccess;
        this.isFailure = !isSuccess;
        this._error = error;
        this._value = value;
        Object.freeze(this);
    }
    getValue() {
        if (!this.isSuccess) {
            throw new Error("Can't get the value of an error result. Use 'errorValue' instead.");
        }
        return this._value;
    }
    getError() {
        return this._error;
    }
    // CREATE SUCCESS RESULT
    static success(value) {
        return new Result(true, undefined, value);
    }
    // CREATE FAILURE RESULT
    static failure(error) {
        return new Result(false, error, undefined);
    }
}
exports.Result = Result;
//# sourceMappingURL=result.js.map