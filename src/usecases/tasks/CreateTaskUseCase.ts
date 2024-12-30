import Task from '../../entities/Task';
import TaskRepositoryGateway from '../../interfaces/gateways/TaskRepositoryGateway';
import UseCase from '../../usecases/UseCase';

export type CreateTaskInputDTO = {
  title: string;
  description: string;
  ownerId: string;
};
export type CreateTaskOutputDTO = {
  id: string;
  title: string;
  description: string;
  status: string;
  ownerId: string;
};
/**
 * Create task use case
 */
export class CreateTaskUseCase
  implements UseCase<CreateTaskInputDTO, CreateTaskOutputDTO>
{
  /**
   * Constructor for CreateTaskUseCase
   * @param taskRepository Interface for Task persistence implementation
   */
  constructor(private readonly taskRepository: TaskRepositoryGateway) {}

  /**
   * Create a new task
   * @param input CreateTaskInputDTO
   * @returns CreateTaskOutputDTO
   */
  public async execute(
    input: CreateTaskInputDTO
  ): Promise<CreateTaskOutputDTO> {
    const task = new Task({
      title: input.title,
      description: input.description,
      status: 'TODO',
      ownerId: input.ownerId,
    });

    await this.taskRepository.save(task);

    return {
      id: task.id,
      title: task.title,
      description: task.description,
      status: task.status,
      ownerId: task.ownerId,
    };
  }
}
