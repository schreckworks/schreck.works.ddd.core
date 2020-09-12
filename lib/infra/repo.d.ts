import { UniqueEntityID } from "domain/unique-entity-id";
export interface IRepo<T> {
    collectionName: string;
    existsAsync(item: T): Promise<boolean>;
    saveAsync(item: T): Promise<T>;
    getByIdAsync(id: UniqueEntityID): Promise<T>;
}
//# sourceMappingURL=repo.d.ts.map