export interface Input {}
export interface Output {}

/**
 * UseCase interface
 */
export default interface UseCase {
  execute(input: Input): Promise<Output>;
}
