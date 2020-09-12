export interface IGuardResult {
    succeeded: boolean;
    message?: string;
}
export interface IGuardArgument {
    argument: any;
    argumentName: string;
}
export declare type GuardArgumentCollection = IGuardArgument[];
export declare class Guard {
    static combine(guardResults: IGuardResult[]): IGuardResult;
    static againstNullOrUndefined(argument: any, argumentName: string): IGuardResult;
    static againstNullOrUndefinedBulk(args: GuardArgumentCollection): IGuardResult;
    static isOneOf(value: any, validValues: any[], argumentName: string): IGuardResult;
    static inRange(num: number, min: number, max: number, argumentName: string): IGuardResult;
    static allInRange(numbers: number[], min: number, max: number, argumentName: string): IGuardResult;
}
//# sourceMappingURL=guard.d.ts.map