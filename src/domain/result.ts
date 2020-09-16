import { IUseCaseError } from './use-case-error';


export class Result<T>
{

  private constructor(isSuccess: boolean, error?: IUseCaseError | string, value?: T)
  {
    if (isSuccess && error)
    {
      throw new Error('InvalidOperation: A result cannot be successful and contain an error');
    }
    if (!isSuccess && !error)
    {
      throw new Error('InvalidOperation: A failing result needs to contain an error message');
    }

    this.isSuccess = isSuccess;
    this.isFailure = !isSuccess;
    this._error = error as IUseCaseError | string;
    this._value = value as T;

    Object.freeze(this);
  }

  private _error: IUseCaseError | string;
  private _value: T;

  isSuccess: boolean;
  isFailure: boolean;


  // CREATE SUCCESS RESULT
  public static success<U>(value?: U): Result<U>
  {
    return new Result<U>(true, undefined, value);
  }

  // CREATE FAILURE RESULT
  public static failure<U>(error: IUseCaseError | string): Result<U>
  {
    return new Result<U>(false, error, undefined);
  }

  getValue(): T
  {
    if (!this.isSuccess)
    {
      throw new Error('Can\'t get the value of an error result. Use \'errorValue\' instead.');
    }

    return this._value;
  }

  getError(): IUseCaseError | string
  {
    return this._error;
  }
}
