import UseCase, { Input, Output } from './UseCase';

/**
 * Factory for creating UseCase instances
 * @param createUseCase Function that creates a UseCase instance
 * @returns UseCaseFactory instance
 */
export interface UseCaseFactory<I extends Input, O extends Output> {
  /**
   * Create a new UseCaseFactoryImpl
   * @returns UseCaseFactoryImpl instance
   */
  create(): UseCase<I, O>;
}
