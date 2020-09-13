export interface IHandler<T>
{
  handle(input: T): void;
}
