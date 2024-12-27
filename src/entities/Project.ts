import Task from './Task';

/**
 * Project entity class
 */
export class Project {
  private _id: string;
  private _name: string;
  private _description: string;
  private _ownerId: string;
  private _startDate: Date;
  private _endDate: Date;
  private _created: Date;
  private _updated: Date | null = null;
  private _tasks: Task[] = [];

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
    name: string,
    description: string,
    ownerId: string,
    startDate: Date,
    endDate: Date
  ) {
    if (!Project.isValidName(name)) {
      throw new Error('Invalid name');
    }
    if (!Project.isValidDescription(description)) {
      throw new Error('Invalid description');
    }
    this._id = crypto.randomUUID.toString();
    this._name = name;
    this._description = description;
    this._ownerId = ownerId;
    this._created = new Date();
    this._startDate = startDate;
    this._endDate = endDate;
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
  public get id(): string {
    return this._id;
  }

  /**
   * Gets the project's name.
   * @returns The project's name
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Gets the project's description.
   * @returns The project's description
   */
  public get description(): string {
    return this._description;
  }

  /**
   * Gets the project's owner.
   * @returns The project's owner
   */
  public get ownerId(): string {
    return this._ownerId;
  }

  /**
   * Gets the project's start date.
   * @returns The project's start date
   */
  public get startDate(): Date {
    return this._startDate;
  }

  /**
   * Gets the project's end date.
   * @returns The project's end date
   */
  public get endDate(): Date {
    return this._endDate;
  }

  /**
   * Gets the project's creation date.
   * @returns The project's creation date
   */
  public get created(): Date {
    return this._created;
  }

  /**
   * Gets the project's last update date.
   * @returns The project's last update date
   */
  public get updated(): Date | null {
    return this._updated;
  }

  /**
   * Gets the project's tasks.
   * @returns The project's tasks
   */
  public get tasks(): Task[] {
    return this._tasks;
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
    ownerId: string,
    startDate: Date,
    endDate: Date
  ): void {
    if (Project.isValidName(name)) {
      this._name = name;
    }
    if (Project.isValidDescription(description)) {
      this._description = description;
    }
    if (ownerId) {
      this._ownerId = ownerId;
    }
    if (startDate) {
      this._startDate = startDate;
    }
    if (endDate) {
      this._endDate = endDate;
    }
    this._updated = new Date();
  }

  /**
   * Adds a task to the project.
   * @param task - The task to add
   */
  public addTask(task: Task): void {
    this._tasks.push(task);
    this._updated = new Date();
  }
  /**
   * Removes a task from the project.
   * @param task - The task to remove
   */
  public removeTask(task: Task): void {
    this._tasks = this.tasks.filter((t) => t !== task);
    this._updated = new Date();
  }

  /**
   * Updates a task in the project.
   * @param task - The task to update
   */
  public updateTask(task: Task): void {
    const index = this.tasks.findIndex((t) => t.id === task.id);
    if (index !== -1) {
      this._tasks[index] = task;
      this._updated = new Date();
    }
  }

  /**
   * Gets a task by its ID.
   * @param id - The ID of the task to get
   * @returns The task with the given ID, or undefined if not found
   */
  public geTaskById(id: string): Task | undefined {
    return this._tasks.find((task) => task.id === id);
  }

  /**
   * Gets tasks by status.
   * @param status The status of the tasks to get
   * @returns The tasks with the given status
   */
  public getTasksByStatus(status: string): Task[] {
    return this._tasks.filter((task) => task.status === status);
  }

  /**
   * Gets tasks by assignee.
   * @param assignee The assignee of the tasks to get
   * @returns The tasks with the given assignee
   */
  public getTasksByAssignee(assigneeId: string): Task[] {
    return this._tasks.filter((task) => task.assigneeId === assigneeId);
  }

  /**
   * Gets tasks by owner.
   * @param ownerId The owner of the tasks to get
   * @returns The tasks with the given owner
   */
  public getTasksByOwner(ownerId: string): Task[] {
    return this._tasks.filter((task) => task.ownerId === ownerId);
  }

  /**
   * Updates the project name
   * @param name New name for the project
   */
  public set name(name: string) {
    if (Project.isValidName(name)) {
      this._name = name;
    }
    this._updated = new Date();
  }

  /**
   * Update the project description
   * @param description New description for the project
   */
  public set description(description: string) {
    if (Project.isValidDescription(description)) {
      this._description = description;
    }
    this._updated = new Date();
  }

  /**
   * Updates the project owner
   * @param owner New owner for the project
   */
  public set owner(ownerId: string) {
    if (ownerId) {
      this._ownerId = ownerId;
    }
    this._updated = new Date();
  }

  /**
   * Updates project start date
   * @param startDate New start date for the project
   */
  public set startDate(startDate: Date) {
    if (startDate) {
      this._startDate = startDate;
    }
    this._updated = new Date();
  }

  /**
   * Updates project end date
   * @param endDate New end date for the project
   */
  public set endDate(endDate: Date) {
    if (endDate) {
      this._endDate = endDate;
    }
    this._updated = new Date();
  }
}
