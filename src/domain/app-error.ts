import { Result } from "./result";
import { IUseCaseError } from "./use-case-error";

export class UnexpectedError
{
  errorResult: Result<IUseCaseError>;

  private constructor(err: any)
  {
    const error: IUseCaseError =
    {
      message: `An unexpected error occurred.`,
      error: err
    };

    this.errorResult = Result.failure(error);
  }

  static create(err: any): UnexpectedError
  {
    return new UnexpectedError(err);
  }

}
