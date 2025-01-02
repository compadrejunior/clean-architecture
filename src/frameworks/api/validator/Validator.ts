import ValidationError from './ValidationError';

export interface Validator {
  validate(input: any): ValidationError[];
}
