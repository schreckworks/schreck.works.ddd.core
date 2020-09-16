import { Result } from '../domain';


export interface Mapper<TDomain, TDto>
{
  toDTO(input: TDomain): TDto;
  toDomain(input: TDto): Result<TDomain>;
  // toPersistence (t: T): any;
}
