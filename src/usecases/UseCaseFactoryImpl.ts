import UseCase, { Input, Output } from './UseCase';
import { UseCaseFactory } from './UseCaseFactory';

/**
 * Factory for creating UseCase instances
 * @param createUseCase Function that creates a UseCase instance
 * @returns UseCaseFactory instance
 */
export class UseCaseFactoryImpl<I extends Input, O extends Output>
  implements UseCaseFactory<I, O>
{
  /**
   * Create a new UseCaseFactoryImpl
   * @param createUseCase Function that creates a UseCase instance
   */
  private constructor(private readonly createUseCase: () => UseCase<I, O>) {}

  /**
   * Create a new UseCaseFactoryImpl
   * @returns UseCaseFactoryImpl instance
   */
  create(): UseCase<I, O> {
    return this.createUseCase();
  }
}
