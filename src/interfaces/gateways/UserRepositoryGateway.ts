import User from '../../entities/User';

export default interface UserRepositoryGateway {
  save(user: User): Promise<void>;
  list(): Promise<User[]>;
}
