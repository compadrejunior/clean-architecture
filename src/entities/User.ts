/**
 * Properties required to create a new User instance.
 * @typedef {Object} CreateUserProps
 * @property {string} name - User's name, minimum 3 characters
 * @property {string} email - Valid email address
 * @property {string} password - Password with minimum 8 characters
 * @property {string} role - User role, must be either 'admin' or 'user'
 */
export type CreateUserProps = {
  id?: string;
  name: string;
  email: string;
  password: string;
  role: string;
};

/**
 * User entity class
 */
export default class User {
  private _id: string;
  private _name: string;
  private _email: string;
  private _password: string;
  private _role: string;
  private _created: Date;
  private _updated: Date | null = null;

  /**
   * Creates a new User instance.
   * @param props - The properties for the new user
   * @returns A new User instance
   * @throws {Error} If any of the parameters are invalid
   */
  constructor(props: CreateUserProps) {
    const { id, name, email, password, role } = props;
    if (id) {
      if (!User.isValidId(id)) {
        throw new Error('Invalid ID');
      }
      this._id = id;
    } else {
      this._id = crypto.randomUUID().toString();
    }

    if (!User.isValidEmail(email)) {
      throw new Error('Invalid email');
    }
    if (!User.isValidPassword(password)) {
      throw new Error('Invalid password');
    }
    if (!User.isValidRole(role)) {
      throw new Error('Invalid role');
    }
    this._name = name;
    this._email = email;
    this._password = password;
    this._role = role;
    this._created = new Date();
  }

  /**
   * Validates a user ID.
   * @param id - The ID to validate
   * @returns True if the ID is not empty, false otherwise
   */
  public static isValidId(id: string): boolean {
    return id.length > 0;
  }

  /**
   * Validates an email address format.
   * @param email - The email address to validate
   * @returns True if the email format is valid, false otherwise
   */
  public static isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  /**
   * Validates a password string.
   * @param password - The password to validate
   * @returns True if password is at least 8 characters long, false otherwise
   */
  public static isValidPassword(password: string): boolean {
    return password.length >= 8;
  }
  /**
   * Validates a user role.
   * @param role - The role to validate
   * @returns True if role is either 'admin' or 'user', false otherwise
   */
  public static isValidRole(role: string): boolean {
    const validRoles = ['Admin', 'User'];
    return validRoles.includes(role);
  }
  /**
   * Validates a user name.
   * @param name - The name to validate
   * @returns True if name is at least 3 characters long, false otherwise
   */
  public static isValidName(name: string): boolean {
    return name.length >= 3;
  }

  /**
   * Gets the user's ID.
   * @returns The user's ID
   */
  public get id(): string {
    return this._id;
  }
  /**
   * Gets the user's name.
   * @returns The user's name
   */
  public get name(): string {
    return this._name;
  }
  /**
   * Gets the user's email address.
   * @returns The user's email address
   */
  public get email(): string {
    return this._email;
  }
  /**
   * Gets the user's password.
   * @returns The user's password
   */
  public get password(): string | undefined {
    return this._password;
  }
  /**
   * Gets the user's role.
   * @returns The user's role ('admin' or 'user')
   */
  public get role(): string {
    return this._role;
  }
  /**
   * Gets the user's creation timestamp.
   * @returns The date when the user was created
   */
  public get created(): Date {
    return this._created;
  }
  /**
   * Gets the user's last update timestamp.
   * @returns The date when the user was last updated, or null if never updated
   */
  public get updated(): Date | null {
    return this._updated;
  }
  /**
   * Updates the user's name.
   * @param name - The new name to set
   * @throws {Error} If the name is invalid
   */
  public set name(name: string) {
    if (!User.isValidName(name)) {
      throw new Error('Invalid name');
    }
    this._name = name;
    this._updated = new Date();
  }
  /**
   * Updates the user's email address.
   * @param email - The new email to set
   * @throws {Error} If the email is invalid
   */
  public set email(email: string) {
    if (!User.isValidEmail(email)) {
      throw new Error('Invalid email');
    }
    this._email = email;
    this._updated = new Date();
  }
  /**
   * Updates the user's password.
   * @param password - The new password to set
   * @throws {Error} If the password is invalid
   */
  public set password(password: string) {
    if (!User.isValidPassword(password)) {
      throw new Error('Invalid password');
    }
    this._password = password;
    this._updated = new Date();
  }
  /**
   * Updates the user's role.
   * @param role - The new role to set ('admin' or 'user')
   * @throws {Error} If the role is invalid
   */
  public set role(role: string) {
    if (!User.isValidRole(role)) {
      throw new Error('Invalid role');
    }
    this._role = role;
    this._updated = new Date();
  }
}
