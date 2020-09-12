import { Result } from "domain/result";
export interface Mapper<TDomain, TDto> {
    toDTO(input: TDomain): TDto;
    toDomain(input: TDto): TDomain;
}
export interface MapperResults<TDomain, TDto> {
    toDTO(input: TDomain): Result<TDto>;
    toDomain(input: TDto): Result<TDomain>;
}
//# sourceMappingURL=mapper.d.ts.map