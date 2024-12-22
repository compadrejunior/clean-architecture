import { User } from '@entities/User';

/**
 * Task entity class
 */
export class Task {
  private id: number;
  private title: string;
  private description: string;
  private status: string;
  private startDate: Date;
  private endDate: Date;
  private created: Date;
  private updated: Date | null = null;
  private owner: User;
  private assignee: User;

  /**
   * Creates a new Task instance.
   * @param id - Unique identifier for the task
   * @param title - Title of the task
   * @param description - Detailed description of the task
   * @param status - Current status of the task
   * @param owner - User who created the task
   * @param assignee - User assigned to complete the task
   * @throws {Error} If any of the parameters are invalid
   */
  constructor(
    id: number,
    title: string,
    description: string,
    status: string,
    startDate: Date,
    endDate: Date,
    owner: User,
    assignee: User
  ) {
    if (!Task.isValidId(id.toString())) {
      throw new Error('Invalid id');
    }
    if (!Task.isValidTitle(title)) {
      throw new Error('Invalid title');
    }
    if (!Task.isValidDescription(description)) {
      throw new Error('Invalid description');
    }
    if (!Task.isValidStatus(status)) {
      throw new Error('Invalid status');
    }
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
    this.created = new Date();
    this.owner = owner;
    this.assignee = assignee;
    this.startDate = startDate;
    this.endDate = endDate;
  }

  /**
   * Validates a task ID.
   * @param id - The ID to validate
   * @returns True if the ID is not empty, false otherwise
   */
  public static isValidId(id: string): boolean {
    return id.length > 0;
  }

  /**
   * Validates a task title.
   * @param title - The title to validate
   * @returns True if the title is not empty, false otherwise
   */
  public static isValidTitle(title: string): boolean {
    return title.length > 0;
  }

  /**
   * Validates a task description.
   * @param description - The description to validate
   * @returns True if the description is not empty, false otherwise
   */
  public static isValidDescription(description: string): boolean {
    return description.length > 0;
  }

  /**
   * Validates a task status.
   * @param status - The status to validate
   * @returns True if the status is not empty, false otherwise
   */
  public static isValidStatus(status: string): boolean {
    return status.length > 0;
  }

  /**
   * Gets the task's ID.
   * @returns The task's unique identifier
   */
  public getId(): number {
    return this.id;
  }

  /**
   * Gets the task's title.
   * @returns The task's title
   */
  public getTitle(): string {
    return this.title;
  }

  /**
   * Gets the task's description.
   * @returns The task's detailed description
   */
  public getDescription(): string {
    return this.description;
  }

  /**
   * Gets the task's current status.
   * @returns The task's status
   */
  public getStatus(): string {
    return this.status;
  }

  /**
   * Gets the task's creation timestamp.
   * @returns The date when the task was created
   */
  public getCreated(): Date {
    return this.created;
  }

  /**
   * Gets the task's last update timestamp.
   * @returns The date when the task was last updated, or null if never updated
   */
  public getUpdated(): Date | null {
    return this.updated;
  }

  /**
   * Gets the task's owner.
   * @returns The User who created the task
   */
  public getOwner(): User {
    return this.owner;
  }

  /**
   * Gets the task's assignee.
   * @returns The User assigned to the task
   */
  public getAssignee(): User {
    return this.assignee;
  }

  /**
   * Gets the task's start date.
   * @returns The task's start date
   */
  public getStartDate(): Date {
    return this.startDate;
  }

  /**
   * Gets the task's end date.
   * @returns The task's end date
   */
  public getEndDate(): Date {
    return this.endDate;
  }

  /**
   * Updates multiple task properties at once.
   * @param title - New title for the task
   * @param description - New description for the task
   * @param status - New status for the task
   * @param assignee - New assignee for the task
   * Updates the 'updated' timestamp when any property is changed
   */
  public update(
    title: string,
    description: string,
    status: string,
    assignee: User,
    owner: User,
    startDate: Date,
    endDate: Date
  ): void {
    if (Task.isValidTitle(title)) {
      this.title = title;
    }
    if (Task.isValidDescription(description)) {
      this.description = description;
    }
    if (Task.isValidStatus(status)) {
      this.status = status;
    }
    if (assignee) {
      this.assignee = assignee;
    }
    if (owner) {
      this.owner = owner;
    }
    if (startDate) {
      this.startDate = startDate;
    }
    if (endDate) {
      this.endDate = endDate;
    }
    this.updated = new Date();
  }

  /**
   * Updates the task's ID.
   * @param id - The new ID to set
   * Updates the 'updated' timestamp if the ID is valid
   */
  public setId(id: number): void {
    if (Task.isValidId(id.toString())) {
      this.id = id;
    }
    this.updated = new Date();
  }

  /**
   * Updates the task's title.
   * @param title - The new title to set
   * Updates the 'updated' timestamp if the title is valid
   */
  public setTitle(title: string): void {
    if (Task.isValidTitle(title)) {
      this.title = title;
    }
    this.updated = new Date();
  }

  /**
   * Updates the task's description.
   * @param description - The new description to set
   * Updates the 'updated' timestamp if the description is valid
   */
  public setDescription(description: string): void {
    if (Task.isValidDescription(description)) {
      this.description = description;
    }
    this.updated = new Date();
  }

  /**
   * Updates the task's status.
   * @param status - The new status to set
   * Updates the 'updated' timestamp if the status is valid
   */
  public setStatus(status: string): void {
    if (Task.isValidStatus(status)) {
      this.status = status;
    }
    this.updated = new Date();
  }

  /**
   * Updates the task's assignee.
   * @param assignee - The new assignee to set
   * Updates the 'updated' timestamp if the assignee is valid
   */
  public setAssignee(assignee: User): void {
    if (assignee) {
      this.assignee = assignee;
    }
    this.updated = new Date();
  }

  /**
   * Updates the task's owner.
   * @param owner - The new owner to set
   * Updates the 'updated' timestamp if the owner is valid
   */
  public setOwner(owner: User): void {
    if (owner) {
      this.owner = owner;
    }
    this.updated = new Date();
  }
  /**
   * Updates the task's start date.
   * @param startDate - The new start date to set
   * Updates the 'updated' timestamp if the start date is valid
   */
  public setStartDate(startDate: Date): void {
    if (startDate) {
      this.startDate = startDate;
    }
    this.updated = new Date();
  }

  /**
   * Updates the task's end date.
   * @param endDate - The new end date to set
   * Updates the 'updated' timestamp if the end date is valid
   */
  public setEndDate(endDate: Date): void {
    if (endDate) {
      this.endDate = endDate;
    }
    this.updated = new Date();
  }
}
