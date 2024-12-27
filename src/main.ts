import config from './frameworks/config/Config';
import ListUsersUseCase from './usecases/users/ListUsersUseCase';
import MongoDB from './frameworks/database/MongoDB';
import UserRepository from './frameworks/repository/UserRepository';
import Database from './frameworks/database/Database';
import CreateUserRoute from './frameworks/api/routes/CreateUserRoute';
import { CreateUserUseCase } from './usecases/users/CreateUserUseCase';
import ListUsersRoute from './frameworks/api/routes/ListUsersRoute';
import APIExpress from './frameworks/api/APIExpress';

async function main() {
  // Load and connect to database
  const database: Database = MongoDB.create(config.MONGO_URI);
  await database.connect();
  console.log('Loaded database.');

  console.log('*** FEATURES *** ');
  console.log('[User Management]');

  const userRepository = new UserRepository();
  console.log('UserRepository loaded.');

  const createUserUserCase = CreateUserUseCase.create(userRepository);
  console.log('CreateUserUseCase loaded.');

  const listUsersUseCase = ListUsersUseCase.create(userRepository);
  console.log('ListUsersUseCase loaded.');

  const createUserRoute = CreateUserRoute.create(createUserUserCase);
  console.log('CreateUserRoute loaded.');

  const listUsersRoute = ListUsersRoute.create(listUsersUseCase);
  console.log('ListUsersRoute loaded.');

  // API
  const api = APIExpress.create([createUserRoute, listUsersRoute]);
  api.start(parseInt(config.SERVER_PORT));
}

main();
