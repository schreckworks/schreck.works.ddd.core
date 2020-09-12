import { Entity } from "./entity";
import { UniqueEntityID } from ".";
export declare abstract class AggregateRoot<T> extends Entity<T> {
    get id(): UniqueEntityID;
}
//# sourceMappingURL=aggregate-root.d.ts.map