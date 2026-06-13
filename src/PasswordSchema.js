const digits = '0123456789';
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const hasCharFrom = (value, chars) => Array.from(value)
  .some((char) => chars.includes(char));

export default class PasswordSchema {
  constructor() {
    this.minPasswordLength = 8;
    this.requiredSubstring = null;
  }

  minLength(length) {
    this.minPasswordLength = length;
    return this;
  }

  contains(substring) {
    this.requiredSubstring = substring;
    return this;
  }

  isValid(value) {
    if (typeof value !== 'string') {
      return false;
    }

    if (value.length < this.minPasswordLength) {
      return false;
    }

    if (!hasCharFrom(value, digits)) {
      return false;
    }

    if (!hasCharFrom(value, lowercaseLetters)) {
      return false;
    }

    if (!hasCharFrom(value, uppercaseLetters)) {
      return false;
    }

    if (this.requiredSubstring !== null && !value.includes(this.requiredSubstring)) {
      return false;
    }

    return true;
  }
}
