export interface IUseCaseError {
    message: string;
    error: Error;
}
export declare abstract class UseCaseError implements IUseCaseError {
    readonly message: string;
    readonly error: Error;
    constructor(message: string, error?: Error);
}
//# sourceMappingURL=use-case-error.d.ts.map