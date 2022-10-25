import { it, describe, expect } from 'vitest';
import { generateToken, generateTokenPromise } from './async-example';

describe('generateToken()', () => {
  // Test asynchronous task with call back function
  it('should generate a token value', (done) => {
    const testUserEmail = 'test@test.com';
    // ✅ generateToken is an asynchronous function
    generateToken(testUserEmail, (err, token) => {
      try {
        //   expect(token).toBeDefined();
        expect(token).toBe(2);
      } catch (err) {
        done(err);
      }
    });
  });

  //   ✅ Test Promise task
  it('should generate a token value', () => {
    const testUserEmail = 'test@test.com';

    expect(generateTokenPromise(testUserEmail)).resolves.toBe(2);
  });
  it('should generate a token value', async () => {
    const testUserEmail = 'test@test.com';

    const token = await generateTokenPromise(testUserEmail);

    expect(token).toBe(2);
  });
});
