import ValidationError from './ValidationError';
import { Validator } from './Validator';

export default class CreateUserValidator implements Validator {
  validate(input: {
    name: string;
    password: string;
    role: string;
    email: string;
  }): Array<ValidationError> {
    const { name, password, role, email } = input;
    const errors: Array<ValidationError> = [];
    if (!name) {
      errors.push({ path: 'name', message: 'Name must be specified' });
    }
    if (!password) {
      errors.push({ path: 'password', message: 'Password must be specified' });
    }
    if (password) {
      if (password.length < 8) {
        errors.push({
          path: 'password',
          message: 'Password must have at least 8 characters',
        });
      }
    }
    if (!role) {
      errors.push({ path: 'role', message: 'Role must be specified' });
    }
    if (role && ['Admin', 'User'].indexOf(role) < 0) {
      errors.push({ path: 'role', message: 'Role must be Admin or User.' });
    }
    return errors;
  }
}
