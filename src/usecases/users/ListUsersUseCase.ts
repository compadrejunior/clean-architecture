import UserRepositoryGateway from '../../interfaces/gateways/UserRepositoryGateway';
import UseCase from '../UseCase';

export type ListUsersInputDTO = {};

export type ListUsersOutputDTO = {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: Date;
  updatedAt: Date | null;
}[];

/**
 * List users use case
 */
export default class ListUsersUseCase
  implements UseCase<ListUsersInputDTO, ListUsersOutputDTO>
{
  /**
   * Constructyor for CreateUserUseCase
   * @param userRepository Interface for User persistence implementation
   */
  constructor(private readonly userRepository: UserRepositoryGateway) {}

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
      createdAt: user.created,
      updatedAt: user.updated,
    }));
  }
}
