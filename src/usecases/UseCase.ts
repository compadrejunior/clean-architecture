export interface Input {}
export interface Output {}

/**
 * UseCase interface
 */
export default interface UseCase<I extends Input, O extends Output> {
  execute(inpurt: I): Promise<O> | O;
}
