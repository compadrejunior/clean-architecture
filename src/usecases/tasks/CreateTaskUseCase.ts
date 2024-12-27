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
export class CreateTaskUseCase
  implements UseCase<CreateTaskInputDTO, CreateTaskOutputDTO>
{
  private constructor(private readonly taskRepository: TaskRepositoryGateway) {}

  public static create(
    taskRepository: TaskRepositoryGateway
  ): CreateTaskUseCase {
    return new CreateTaskUseCase(taskRepository);
  }

  public async execute(
    input: CreateTaskInputDTO
  ): Promise<CreateTaskOutputDTO> {
    const task = new Task({
      title: input.title,
      description: input.description,
      status: 'TODO',
      ownerId: input.ownerId,
    });

    return {
      id: task.id,
      title: task.title,
      description: task.description,
      status: task.status,
      ownerId: task.ownerId,
    };
  }
}
