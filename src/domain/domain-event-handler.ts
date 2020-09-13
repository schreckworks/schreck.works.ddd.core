export interface IHandler<T>
{
  handleAsync(input: T): void;
}
