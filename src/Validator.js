import PasswordSchema from './PasswordSchema.js';

export default class Validator {
  password() {
    return new PasswordSchema();
  }
}
