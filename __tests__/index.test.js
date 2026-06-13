import { test } from 'node:test';
import assert from 'assert/strict';
import Validator from '../index.js';

test('step1', () => {
  const v = new Validator();
  const passwordSchema = v.password();

  assert.equal(passwordSchema.isValid('Hello123'), true);
  assert.equal(passwordSchema.isValid('Password1'), true);
  assert.equal(passwordSchema.isValid('Hi123'), false);
  assert.equal(passwordSchema.isValid(''), false);
  assert.equal(passwordSchema.isValid(12345678), false);
});

test('step2', () => {
  const v = new Validator();
  const passwordSchema = v.password();

  assert.equal(passwordSchema.isValid('hello123'), false);
  assert.equal(passwordSchema.isValid('HELLO123'), false);
  assert.equal(passwordSchema.isValid('Helloabc'), false);
});

test('step3', () => {
  const v = new Validator();

  const passwordSchema = v.password().minLength(10);

  assert.equal(passwordSchema.isValid('Hello123'), false);
  assert.equal(passwordSchema.isValid('Hello12345'), true);
});

test('step4', () => {
  const v = new Validator();

  const passwordSchema = v.password().contains('!');

  assert.equal(passwordSchema.isValid('Hello123'), false);
  assert.equal(passwordSchema.isValid('Hello123!'), true);
});
