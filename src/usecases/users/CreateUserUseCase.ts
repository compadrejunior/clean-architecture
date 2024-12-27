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
export type CreateUserInputDTO = {
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
export type CreateUserOutputDTO = {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: Date;
};

export class CreateUserUseCase
  implements UseCase<CreateUserInputDTO, CreateUserOutputDTO>
{
  private constructor(private readonly userRepository: UserRepositoryGateway) {}

  public static create(
    userRepository: UserRepositoryGateway
  ): CreateUserUseCase {
    return new CreateUserUseCase(userRepository);
  }

  public async execute(
    input: CreateUserInputDTO
  ): Promise<CreateUserOutputDTO> {
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
