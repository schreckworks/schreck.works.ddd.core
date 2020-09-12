export interface IUseCaseError
{
  message: string;
  error: Error;
}

export abstract class UseCaseError implements IUseCaseError
{
  public readonly message: string;
  public readonly error: Error;

  constructor(message: string, error?: Error)
  {
    this.message = message;
    this.error = error || new Error();
  }
}
