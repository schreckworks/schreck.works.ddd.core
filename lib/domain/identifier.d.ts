export declare class Identifier<T> {
    private value;
    private _isNewIdentifier;
    get isNewIdentifier(): boolean;
    constructor(value: T, isNewIdentifier: boolean);
    equals(id?: Identifier<T>): boolean;
    toString(): string;
    /**
     * Return raw value of identifier
     */
    toValue(): T;
}
//# sourceMappingURL=identifier.d.ts.map