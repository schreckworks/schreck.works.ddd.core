import { Identifier } from './identifier';
export declare class UniqueEntityID extends Identifier<string | number> {
    private constructor();
    static create(id?: string | number): UniqueEntityID;
    private static idOrDefaultId;
    private static isNewIdGenerated;
}
//# sourceMappingURL=unique-entity-id.d.ts.map