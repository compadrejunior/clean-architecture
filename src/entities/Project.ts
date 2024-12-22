import { Task } from '@entities/Task';
import { User } from '@entities/User';

/**
 * Project entity class
 */
export class Project {
  private id: number;
  private name: string;
  private description: string;
  private owner: User;
  private startDate: Date;
  private endDate: Date;
  private created: Date;
  private updated: Date | null = null;
  private tasks: Task[] = [];

  /**
   * Creates a new Project instance.
   * @param id Unique identifier for the project
   * @param name Name of the project
   * @param description Detailed description of the project
   * @param owner User who owns the project
   * @param startDate Start date of the project
   * @param endDate End date of the project
   */
  constructor(
    id: number,
    name: string,
    description: string,
    owner: User,
    startDate: Date,
    endDate: Date
  ) {
    if (!Project.isValidId(id.toString())) {
      throw new Error('Invalid id');
    }
    if (!Project.isValidName(name)) {
      throw new Error('Invalid name');
    }
    if (!Project.isValidDescription(description)) {
      throw new Error('Invalid description');
    }
    this.id = id;
    this.name = name;
    this.description = description;
    this.owner = owner;
    this.created = new Date();
    this.startDate = startDate;
    this.endDate = endDate;
  }

  /**
   * Validates a project ID.
   * @param id - The ID to validate
   * @returns True if the ID is not empty, false otherwise
   */
  public static isValidId(id: string): boolean {
    return id.length > 0;
  }

  /**
   * Validates a project name.
   * @param name - The name to validate
   * @returns True if the name is not empty, false otherwise
   */
  public static isValidName(name: string): boolean {
    return name.length > 0;
  }

  /**
   * Validates a project description.
   * @param description - The description to validate
   * @returns True if the description is not empty, false otherwise
   */
  public static isValidDescription(description: string): boolean {
    return description.length > 0;
  }

  /**
   * Gets the project's ID.
   * @returns The project's ID
   */
  public getId(): number {
    return this.id;
  }

  /**
   * Gets the project's name.
   * @returns The project's name
   */
  public getName(): string {
    return this.name;
  }

  /**
   * Gets the project's description.
   * @returns The project's description
   */
  public getDescription(): string {
    return this.description;
  }

  /**
   * Gets the project's owner.
   * @returns The project's owner
   */
  public getOwner(): User {
    return this.owner;
  }

  /**
   * Gets the project's start date.
   * @returns The project's start date
   */
  public getStartDate(): Date {
    return this.startDate;
  }

  /**
   * Gets the project's end date.
   * @returns The project's end date
   */
  public getEndDate(): Date {
    return this.endDate;
  }

  /**
   * Gets the project's creation date.
   * @returns The project's creation date
   */
  public getCreated(): Date {
    return this.created;
  }

  /**
   * Gets the project's last update date.
   * @returns The project's last update date
   */
  public getUpdated(): Date | null {
    return this.updated;
  }

  /**
   * Gets the project's tasks.
   * @returns The project's tasks
   */
  public getTasks(): Task[] {
    return this.tasks;
  }

  /**
   * Updates multiple project properties at once.
   * @param name - New name for the project
   * @param description - New description for the project
   * @param owner - New owner for the project
   * Updates the 'updated' timestamp when any property is changed
   */
  public update(
    name: string,
    description: string,
    owner: User,
    startDate: Date,
    endDate: Date
  ): void {
    if (Project.isValidName(name)) {
      this.name = name;
    }
    if (Project.isValidDescription(description)) {
      this.description = description;
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
   * Adds a task to the project.
   * @param task - The task to add
   */
  public addTask(task: Task): void {
    this.tasks.push(task);
    this.updated = new Date();
  }
  /**
   * Removes a task from the project.
   * @param task - The task to remove
   */
  public removeTask(task: Task): void {
    this.tasks = this.tasks.filter((t) => t !== task);
    this.updated = new Date();
  }

  /**
   * Updates a task in the project.
   * @param task - The task to update
   */
  public updateTask(task: Task): void {
    const index = this.tasks.findIndex((t) => t.getId() === task.getId());
    if (index !== -1) {
      this.tasks[index] = task;
      this.updated = new Date();
    }
  }

  /**
   * Gets a task by its ID.
   * @param id - The ID of the task to get
   * @returns The task with the given ID, or undefined if not found
   */
  public getTaskById(id: number): Task | undefined {
    return this.tasks.find((task) => task.getId() === id);
  }

  /**
   * Gets tasks by status.
   * @param status The status of the tasks to get
   * @returns The tasks with the given status
   */
  public getTasksByStatus(status: string): Task[] {
    return this.tasks.filter((task) => task.getStatus() === status);
  }

  /**
   * Gets tasks by assignee.
   * @param assignee The assignee of the tasks to get
   * @returns The tasks with the given assignee
   */
  public getTasksByAssignee(assignee: User): Task[] {
    return this.tasks.filter((task) => task.getAssignee() === assignee);
  }

  /**
   * Gets tasks by owner.
   * @param owner The owner of the tasks to get
   * @returns The tasks with the given owner
   */
  public getTasksByOwner(owner: User): Task[] {
    return this.tasks.filter((task) => task.getOwner() === owner);
  }

  /**
   * Updates the project name
   * @param name New name for the project
   */
  public setName(name: string): void {
    if (Project.isValidName(name)) {
      this.name = name;
    }
    this.updated = new Date();
  }

  /**
   * Update the project description
   * @param description New description for the project
   */
  public setDescription(description: string): void {
    if (Project.isValidDescription(description)) {
      this.description = description;
    }
    this.updated = new Date();
  }

  /**
   * Updates the project owner
   * @param owner New owner for the project
   */
  public setOwner(owner: User): void {
    if (owner) {
      this.owner = owner;
    }
    this.updated = new Date();
  }

  /**
   * Updates project start date
   * @param startDate New start date for the project
   */
  public setStartDate(startDate: Date): void {
    if (startDate) {
      this.startDate = startDate;
    }
    this.updated = new Date();
  }

  /**
   * Updates project end date
   * @param endDate New end date for the project
   */
  public setEndDate(endDate: Date): void {
    if (endDate) {
      this.endDate = endDate;
    }
    this.updated = new Date();
  }
}
