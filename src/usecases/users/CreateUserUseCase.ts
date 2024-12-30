import User from '../../entities/User';
import UserRepositoryGateway from '../../interfaces/gateways/UserRepositoryGateway';
import UseCase from '../UseCase';

/**
 * Create user input object
 * @param name
 * @param email
 * @param password
 * @param role
 */
export type CreateUserInput = {
  name: string;
  email: string;
  password: string;
  role: string;
};

/**
 * Create user output object
 * @param id
 * @param name
 * @param email
 * @param password
 * @param role
 */
export type CreateUserOutput = {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: Date;
};

/**
 * Create user use case
 */
export default class CreateUserUseCase implements UseCase {
  /**
   * Constructor for CreateUserUseCase
   * @param userRepository Interface for User persistence implementation
   */
  private constructor(private readonly userRepository: UserRepositoryGateway) {}

  public static create(userRepository: UserRepositoryGateway) {
    return new CreateUserUseCase(userRepository);
  }

  /**
   * Create a new user
   * @param input CreateUserInput
   * @returns CreateUserOutput
   */
  public async execute(input: CreateUserInput): Promise<CreateUserOutput> {
    const user = new User({
      name: input.name,
      email: input.email,
      password: input.password,
      role: input.role,
    });

    await this.userRepository.save(user);

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      createdAt: user.created,
    };
  }
}
