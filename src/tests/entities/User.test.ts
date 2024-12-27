import User from '../../entities/User';

describe('User', () => {
  describe('Create user', () => {
    it('should be able to create a user', () => {
      const user = new User({
        name: 'John Doe',
        email: 'email@test.com',
        password: '12345678',
        role: 'admin',
      });
      expect(user).toBeInstanceOf(User);
      expect(user).toHaveProperty('id');
    });
    it('should throw an error if email is invalid', () => {
      try {
        new User({
          name: 'John Doe',
          email: 'email@test',
          password: '12345678',
          role: 'admin',
        });
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Invalid email');
      }
    });
    it('should throw an error if password is invalid', () => {
      try {
        const user = new User({
          name: 'John Doe',
          email: 'email@test.com',
          password: '123',
          role: 'admin',
        });
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Invalid password');
      }
    });
    it('should throw an error if role is invalid', () => {
      try {
        const user = new User({
          name: 'John Doe',
          email: 'email@test.com',
          password: '12345678',
          role: 'invalid',
        });
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Invalid role');
      }
    });
    it('should throw an error if name is invalid', () => {
      try {
        const user = new User({
          name: 'Jo',
          email: 'email@test.com',
          password: '12345678',
          role: 'admin',
        });
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Invalid name');
      }
    });
  });
  describe('Getters and setters', () => {
    it('should be able to set a new name', () => {
      const user = new User({
        name: 'John Doe',
        email: 'email@test.com',
        password: '12345678',
        role: 'admin',
      });
      user.name = 'Jane Doe';
      expect(user.name).toBe('Jane Doe');
    });
    it('should throw an error when setting invalid name', () => {
      const user = new User({
        name: 'John Doe',
        email: 'email@test.com',
        password: '12345678',
        role: 'admin',
      });
      try {
        user.name = 'Jo';
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Invalid name');
      }
    });
    it('should set a new email', () => {
      const user = new User({
        name: 'John Doe',
        email: 'email@test.com',
        password: '12345678',
        role: 'admin',
      });
      user.email = 'newemail@test.com';
      expect(user.email).toBe('newemail@test.com');
    });
    it('should throw an error when setting invalid email', () => {
      const user = new User({
        name: 'John Doe',
        email: 'email@test.com',
        password: '12345678',
        role: 'admin',
      });
      try {
        user.email = 'newemail@test';
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Invalid email');
      }
    });
    it('should set a new password', () => {
      const user = new User({
        name: 'John Doe',
        email: 'email@test.com',
        password: '12345678',
        role: 'admin',
      });
      user.password = 'newpassword';
      expect(user.password).toBe('newpassword');
    });
    it('should throw an error when setting invalid password', () => {
      const user = new User({
        name: 'John Doe',
        email: 'email@test.com',
        password: '12345678',
        role: 'admin',
      });
      try {
        user.password = 'new';
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Invalid password');
      }
    });
    it('should set a new role', () => {
      const user = new User({
        name: 'John Doe',
        email: 'email@test.com',
        password: '12345678',
        role: 'admin',
      });
      user.role = 'user';
      expect(user.role).toBe('user');
    });
    it('should throw an error when setting invalid role', () => {
      const user = new User({
        name: 'John Doe',
        email: 'email@test.com',
        password: '12345678',
        role: 'admin',
      });
      try {
        user.role = 'invalid';
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Invalid role');
      }
    });
    it('should get a user id', () => {
      const user = new User({
        name: 'John Doe',
        email: 'email@test.com',
        password: '12345678',
        role: 'admin',
      });
      expect(user.id).toBeDefined();
    });
    it('should get the user created date', () => {
      const user = new User({
        name: 'John Doe',
        email: 'email@test.com',
        password: '12345678',
        role: 'admin',
      });
      expect(user.created).toBeInstanceOf(Date);
    });
    it('should get the user updated date', () => {
      const user = new User({
        name: 'John Doe',
        email: 'email@test.com',
        password: '12345678',
        role: 'admin',
      });
      user.name = 'Jane Doe';
      expect(user.updated).toBeInstanceOf(Date);
    });
  });
});
