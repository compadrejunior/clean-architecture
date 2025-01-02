import { Request, Response } from 'express';
import CreateUserUseCase, {
  CreateUserInput,
} from '../../../usecases/users/CreateUserUseCase';
import Route, { HttpMethod } from './Route';
import CreateUserValidator from '../validator/CreateUserValidator';
import { Validator } from '../validator/Validator';

/**
 * Create user response DTO
 */
export type CreateUserResponseDTO = {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: Date;
};

/**
 * Create user route
 */
export default class CreateUserRoute implements Route {
  /**
   * Create user route private constructor
   * @param path - The path for the route
   * @param method - The HTTP method for the route
   * @param createUserService - The create user service
   */
  private constructor(
    private readonly path: string,
    private readonly method: HttpMethod,
    private readonly createUserService: CreateUserUseCase,
    private readonly validator: Validator
  ) {}

  /**
   * Create user route public constructor
   * @param createUserService - The create user service
   * @returns The create user route
   */
  public static create(createUserService: CreateUserUseCase) {
    const validator = new CreateUserValidator();
    return new CreateUserRoute(
      '/user',
      HttpMethod.POST,
      createUserService,
      validator
    );
  }

  /**
   * Get handler for the route
   * @returns The handler for the route
   */
  public getHandler() {
    return async (request: Request, response: Response) => {
      const errors = this.validator.validate(request.body);
      if (errors && errors.length > 0) {
        response.status(400).json({ message: errors }).send();
        return;
      }
      const { name, email, password, role } = request.body;
      const input: CreateUserInput = {
        name,
        email,
        password,
        role,
      };

      try {
        const output: CreateUserResponseDTO =
          await this.createUserService.execute(input);

        const body = this.present(output);
        response.status(201).json(body).send();
      } catch (error) {
        if (error instanceof Error) {
          response.status(400).json({ message: error.message }).send();
        } else {
          response.status(500).json({ message: 'Server error' }).send();
        }
      }
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
  private present(input: CreateUserResponseDTO): CreateUserResponseDTO {
    const response = {
      id: input.id,
      name: input.name,
      email: input.email,
      role: input.role,
      createdAt: input.createdAt,
    };
    return response;
  }
}
