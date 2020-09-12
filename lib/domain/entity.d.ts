import { UniqueEntityID } from "./unique-entity-id";
export declare abstract class Entity<T> {
    protected readonly _id: UniqueEntityID;
    readonly props: T;
    constructor(props: T, id?: UniqueEntityID);
    equals(object?: Entity<T>): boolean;
}
//# sourceMappingURL=entity.d.ts.map