export interface IDomainEvent<T>
{
  publish(input: T): void;
}
