/**
 * Properties required to create a new task
 * @interface CreateTaskProps
 */
export type CreateTaskProps = {
  /** Title of the task */
  title: string;
  /** Detailed description of the task */
  description: string;
  /** Current status of the task */
  status: string;
  /** Start date of the task */
  startDate?: Date | null;
  /** End date of the task */
  endDate?: Date | null;
  /** User who created the task */
  ownerId: string;
  /**  User assigned to complete the task */
  assigneeId?: string | null;
};

/**
 * Task entity class
 */
export default class Task {
  private _id: string;
  private _title: string;
  private _description: string;
  private _status: string;
  private _startDate: Date | undefined;
  private _endDate: Date | undefined;
  private _created: Date;
  private _updated: Date | null = null;
  private _ownerId: string;
  private _assigneeId: string | undefined;

  /**
   * Creates a new Task instance.
   * @param props
   * @throws {Error} If any of the parameters are invalid
   */
  constructor(props: CreateTaskProps) {
    const {
      title,
      description,
      status,
      startDate,
      endDate,
      ownerId,
      assigneeId,
    } = props;
    if (!Task.isValidTitle(title)) {
      throw new Error('Invalid title');
    }
    if (!Task.isValidDescription(description)) {
      throw new Error('Invalid description');
    }
    if (!Task.isValidStatus(status)) {
      throw new Error('Invalid status');
    }
    this._id = crypto.randomUUID.toString();
    this._title = title;
    this._description = description;
    this._status = status;
    this._created = new Date();
    this._ownerId = ownerId;
    if (assigneeId) this._assigneeId = assigneeId;
    if (startDate) this._startDate = startDate;
    if (endDate) this._endDate = endDate;
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
  public get id(): string {
    return this._id;
  }

  /**
   * Gets the task's title.
   * @returns The task's title
   */
  public get title(): string {
    return this._title;
  }

  /**
   * Gets the task's description.
   * @returns The task's detailed description
   */
  public get description(): string {
    return this._description;
  }

  /**
   * Gets the task's current status.
   * @returns The task's status
   */
  public get status(): string {
    return this._status;
  }

  /**
   * Gets the task's creation timestamp.
   * @returns The date when the task was created
   */
  public get created(): Date {
    return this._created;
  }

  /**
   * Gets the task's last update timestamp.
   * @returns The date when the task was last updated, or null if never updated
   */
  public get updated(): Date | null {
    return this._updated;
  }

  /**
   * Gets the task's owner.
   * @returns The User who created the task
   */
  public get ownerId(): string {
    return this._ownerId;
  }

  /**
   * Gets the task's assignee.
   * @returns The User assigned to the task
   */
  public get assigneeId(): string | null {
    return this._assigneeId ? this._assigneeId : null;
  }

  /**
   * Gets the task's start date.
   * @returns The task's start date
   */
  public get startDate(): Date | null {
    return this._startDate ? this._startDate : null;
  }

  /**
   * Gets the task's end date.
   * @returns The task's end date
   */
  public get endDate(): Date | null {
    return this._endDate ? this._endDate : null;
  }
}
