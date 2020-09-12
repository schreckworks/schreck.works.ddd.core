import { Result } from "./result";
import { IUseCaseError } from "./use-case-error";
export declare class UnexpectedError {
    errorResult: Result<IUseCaseError>;
    private constructor();
    static create(err: any): UnexpectedError;
}
//# sourceMappingURL=app-error.d.ts.map