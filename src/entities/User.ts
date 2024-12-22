/**
 * User entity class
 */
export class User {
  private id: number;
  private name: string;
  private email: string;
  private password: string;
  private role: string;
  private created: Date;
  private updated: Date | null = null;
  /**
   * Creates a new User instance.
   * @param id - Unique identifier for the user, must be greater than 0
   * @param name - User's name, minimum 3 characters
   * @param email - Valid email address
   * @param password - Password with minimum 8 characters
   * @param role - User role, must be either 'admin' or 'user'
   * @throws {Error} If any of the parameters are invalid
   */
  constructor(
    id: number,
    name: string,
    email: string,
    password: string,
    role: string
  ) {
    if (!User.isValidId(id)) {
      throw new Error('Invalid id');
    }
    if (!User.isValidName(name)) {
      throw new Error('Invalid name');
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
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role;
    this.created = new Date();
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
    const validRoles = ['admin', 'user'];
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
   * Validates a user ID.
   * @param id - The ID to validate
   * @returns True if ID is greater than 0, false otherwise
   */
  public static isValidId(id: number): boolean {
    return id > 0;
  }
  /**
   * Gets the user's ID.
   * @returns The user's ID
   */
  public getId(): number {
    return this.id;
  }
  /**
   * Gets the user's name.
   * @returns The user's name
   */
  public getName(): string {
    return this.name;
  }
  /**
   * Gets the user's email address.
   * @returns The user's email address
   */
  public getEmail(): string {
    return this.email;
  }
  /**
   * Gets the user's password.
   * @returns The user's password
   */
  public getPassword(): string {
    return this.password;
  }
  /**
   * Gets the user's role.
   * @returns The user's role ('admin' or 'user')
   */
  public getRole(): string {
    return this.role;
  }
  /**
   * Gets the user's creation timestamp.
   * @returns The date when the user was created
   */
  public getCreated(): Date {
    return this.created;
  }
  /**
   * Gets the user's last update timestamp.
   * @returns The date when the user was last updated, or null if never updated
   */
  public getUpdated(): Date | null {
    return this.updated;
  }
  /**
   * Updates the user's name.
   * @param name - The new name to set
   * @throws {Error} If the name is invalid
   */
  public setName(name: string): void {
    if (!User.isValidName(name)) {
      throw new Error('Invalid name');
    }
    this.name = name;
    this.updated = new Date();
  }
  /**
   * Updates the user's email address.
   * @param email - The new email to set
   * @throws {Error} If the email is invalid
   */
  public setEmail(email: string): void {
    if (!User.isValidEmail(email)) {
      throw new Error('Invalid email');
    }
    this.email = email;
    this.updated = new Date();
  }
  /**
   * Updates the user's password.
   * @param password - The new password to set
   * @throws {Error} If the password is invalid
   */
  public setPassword(password: string): void {
    if (!User.isValidPassword(password)) {
      throw new Error('Invalid password');
    }
    this.password = password;
    this.updated = new Date();
  }
  /**
   * Updates the user's role.
   * @param role - The new role to set ('admin' or 'user')
   * @throws {Error} If the role is invalid
   */
  public setRole(role: string): void {
    if (!User.isValidRole(role)) {
      throw new Error('Invalid role');
    }
    this.role = role;
    this.updated = new Date();
  }
}
