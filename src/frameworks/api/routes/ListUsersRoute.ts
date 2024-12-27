import { Request, Response } from 'express';
import ListUsersUseCase, {
  ListUsersOutputDTO,
} from '../../../usecases/users/ListUsersUseCase';
import Route, { HttpMethod } from './Route';

/**
 * Output for list users endpoint
 */
export type ListUsersResponseDTO = {
  users: {
    id: string;
    name: string;
    email: string;
    role: string;
    createdAt: Date;
    updatedAt: Date | null;
  }[];
};

export default class ListUsersRoute implements Route {
  /**
   * List users route private constructor
   * @param path path to the users resource
   * @param method HTTP method for the users resource
   * @param listUsersService list users service
   * @returns ListUsersRoute instance
   */
  private constructor(
    private readonly path: string,
    private readonly method: HttpMethod,
    private readonly listUsersService: ListUsersUseCase
  ) {}

  /**
   * List users route public constructor
   * @param listUsersService list users use case interface
   * @returns ListUsersRoute instance
   */
  public static create(listUsersService: ListUsersUseCase): ListUsersRoute {
    return new ListUsersRoute('/user', HttpMethod.GET, listUsersService);
  }

  /**
   * Get handler for the route
   * @returns The handler for the route
   */
  public getHandler() {
    return async (request: Request, response: Response): Promise<void> => {
      const output = await this.listUsersService.execute();
      const body = this.present(output);
      response.status(200).json(body).send();
    };
  }

  /**
   * Get path for the route
   * @returns The path for the route
   */
  public getPath(): string {
    return this.path;
  }

  /**
   * Get HTTP method for the route
   * @returns The HTTP method for the route
   */
  public getMethod(): HttpMethod {
    return this.method;
  }

  /**
   * Present the output
   * @param input - The input
   * @returns The output
   */
  private present(input: ListUsersOutputDTO): ListUsersResponseDTO {
    const response: ListUsersResponseDTO = {
      users: input.map((user) => {
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        };
      }),
    };
    return response;
  }
}
