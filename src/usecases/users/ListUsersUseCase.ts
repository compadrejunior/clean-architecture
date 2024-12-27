import UserRepositoryGateway from '../../interfaces/gateways/UserRepositoryGateway';
import UseCase from '../UseCase';

export type ListUsersInputDTO = void;

export type ListUsersOutputDTO = {
  id: string;
  name: string;
  email: string;
  role: string;
}[];

export default class ListUsersUseCase
  implements UseCase<ListUsersInputDTO, ListUsersOutputDTO>
{
  /**
   * Private constructyor for CreateUserUseCase
   * @param userRepository Interface for User persistence implementation
   */
  private constructor(private readonly userRepository: UserRepositoryGateway) {}

  /**
   * Public constructor for CreateUserUseCase
   * @param userRepository Interface for User persistence implementation
   * @returns a list of users
   */
  public static create(
    userRepository: UserRepositoryGateway
  ): ListUsersUseCase {
    return new ListUsersUseCase(userRepository);
  }

  /**
   * Return all users
   * @returns a list of users
   */
  public async execute(): Promise<ListUsersOutputDTO> {
    const users = await this.userRepository.list();

    return users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    }));
  }
}
