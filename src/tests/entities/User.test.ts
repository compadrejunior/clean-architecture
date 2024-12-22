import { User } from '@entities/User';

describe('User', () => {
  describe('Create user', () => {
    it('should be able to create a user', () => {
      const user = new User(
        1,
        'John Doe',
        'email@test.com',
        '12345678',
        'admin'
      );
      expect(user).toBeInstanceOf(User);
      expect(user).toHaveProperty('id', 1);
    });
    it('should throw an error if email is invalid', () => {
      try {
        const user = new User(1, 'John Doe', 'email@test', '12345678', 'admin');
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Invalid email');
      }
    });
    it('should throw an error if password is invalid', () => {
      try {
        const user = new User(1, 'John Doe', 'email@test.com', '123', 'admin');
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Invalid password');
      }
    });
    it('should throw an error if role is invalid', () => {
      try {
        const user = new User(
          1,
          'John Doe',
          'email@test.com',
          '12345678',
          'invalid'
        );
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Invalid role');
      }
    });
    it('should throw an error if name is invalid', () => {
      try {
        const user = new User(1, 'Jo', 'email@test.com', '12345678', 'admin');
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Invalid name');
      }
    });
    it('should throw an error if id is invalid', () => {
      try {
        const user = new User(
          0,
          'John Doe',
          'email@test.com',
          '12345678',
          'admin'
        );
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Invalid id');
      }
    });
    it('should be able to set a new name', () => {
      const user = new User(
        1,
        'John Doe',
        'email@test.com',
        '12345678',
        'admin'
      );
      user.setName('Jane Doe');
      expect(user.getName()).toBe('Jane Doe');
    });
    it('should throw an error when setting invalid name', () => {
      const user = new User(
        1,
        'John Doe',
        'email@test.com',
        '12345678',
        'admin'
      );
      try {
        user.setName('Jo');
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Invalid name');
      }
    });
    it('should set a new email', () => {
      const user = new User(
        1,
        'John Doe',
        'email@test.com',
        '12345678',
        'admin'
      );
      user.setEmail('newemail@test.com');
      expect(user.getEmail()).toBe('newemail@test.com');
    });
    it('should throw an error when setting invalid email', () => {
      const user = new User(
        1,
        'John Doe',
        'email@test.com',
        '12345678',
        'admin'
      );
      try {
        user.setEmail('newemail@test');
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Invalid email');
      }
    });
    it('should set a new password', () => {
      const user = new User(
        1,
        'John Doe',
        'email@test.com',
        '12345678',
        'admin'
      );
      user.setPassword('newpassword');
      expect(user.getPassword()).toBe('newpassword');
    });
    it('should throw an error when setting invalid password', () => {
      const user = new User(
        1,
        'John Doe',
        'email@test.com',
        '12345678',
        'admin'
      );
      try {
        user.setPassword('new');
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Invalid password');
      }
    });
    it('should set a new role', () => {
      const user = new User(
        1,
        'John Doe',
        'email@test.com',
        '12345678',
        'admin'
      );
      user.setRole('user');
      expect(user.getRole()).toBe('user');
    });
    it('should throw an error when setting invalid role', () => {
      const user = new User(
        1,
        'John Doe',
        'email@test.com',
        '12345678',
        'admin'
      );
      try {
        user.setRole('invalid');
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Invalid role');
      }
    });
    it('should get a user id', () => {
      const user = new User(
        1,
        'John Doe',
        'email@test.com',
        '12345678',
        'admin'
      );
      expect(user.getId()).toBe(1);
    });
    it('should get the user created date', () => {
      const user = new User(
        1,
        'John Doe',
        'email@test.com',
        '12345678',
        'admin'
      );
      expect(user.getCreated()).toBeInstanceOf(Date);
    });
    it('should get the user updated date', () => {
      const user = new User(
        1,
        'John Doe',
        'email@test.com',
        '12345678',
        'admin'
      );
      user.setName('Jane Doe');
      expect(user.getUpdated()).toBeInstanceOf(Date);
    });
  });
});
