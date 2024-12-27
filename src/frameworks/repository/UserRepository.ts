import User from '../../entities/User';
import UserRepositoryGateway from '../../interfaces/gateways/UserRepositoryGateway';
import UserModel from './UserModel';

export default class UserRepository implements UserRepositoryGateway {
  public async save(input: any): Promise<void> {
    const user = new UserModel({
      id: input.id,
      name: input.name,
      email: input.email,
      password: input.password,
      role: input.role,
    });
    user.save();
    console.log(
      `Saved user ${user.email} to the database with primary key ${user._id}`
    );
  }
  public async list(): Promise<User[]> {
    return (await UserModel.find({})).map((user) => {
      return new User({
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
        role: user.role,
      });
    });
  }
}
