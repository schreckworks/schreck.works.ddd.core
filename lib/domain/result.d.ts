import { IUseCaseError } from "./use-case-error";
export declare class Result<T> {
    private _error;
    private _value;
    isSuccess: boolean;
    isFailure: boolean;
    private constructor();
    getValue(): T;
    getError(): IUseCaseError | string;
    static success<U>(value?: U): Result<U>;
    static failure<U>(error: IUseCaseError | string): Result<U>;
}
//# sourceMappingURL=result.d.ts.map