import Task from '../../entities/Task';

export default interface TaskRepositoryGateway {
  save(task: Task): Promise<void>;
  list(): Promise<Task[]>;
}
