import { Result } from "domain/result";
import { UniqueEntityID } from "domain/unique-entity-id";


export interface IRepo<TInput, TOutput>
{
  collectionName: string;

  existsAsync(item: TOutput): Promise<boolean>;
  saveAsync(item: TInput): Promise<Result<TOutput>>;
  getByIdAsync(id: UniqueEntityID): Promise<TOutput>;
}
