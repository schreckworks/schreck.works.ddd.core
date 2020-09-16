import { Result, UniqueEntityID } from '../domain';

export interface IRepo<TInput, TOutput>
{
  collectionName: string;

  existsAsync(item: TOutput): Promise<boolean>;
  saveAsync(item: TInput): Promise<Result<TOutput>>;
  getByIdAsync(id: UniqueEntityID): Promise<TOutput>;
}
