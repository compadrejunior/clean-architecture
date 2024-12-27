import config from './frameworks/config/Config';
import ListUsersUseCase from './usecases/users/ListUsersUseCase';
import MongoDB from './frameworks/database/MongoDB';
import UserRepository from './frameworks/repository/UserRepository';
import Database from './frameworks/database/Database';

async function main() {
  // Load and connect to database
  const database: Database = MongoDB.create(config.MONGO_URI);
  await database.connect();

  // USE CASES:
  // Manage Users
  const userRepository = new UserRepository();
  const createUserUserCase = ListUsersUseCase.create(userRepository);
  const listUsersUseCase = ListUsersUseCase.create(userRepository);

  // APIs:
}
main();
