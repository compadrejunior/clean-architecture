import Task from '../../entities/Task';
import User from '../../entities/User';

describe('Task', () => {
  describe('Create Taks', () => {
    it('should be able to create a task', () => {
      const startDate = new Date();
      let endDate = new Date();
      endDate.setDate(startDate.getDate() + 1);
      const owner = new User({
        name: 'John Doe',
        email: 'email@test.com',
        password: '12345678',
        role: 'admin',
      });
      const assignee = new User({
        name: 'Jane Doe',
        email: 'jane@test.com',
        password: '12345678',
        role: 'user',
      });
      const taskProps = {
        title: 'Task 1',
        description: 'Description 1',
        status: 'Todo',
        startDate,
        endDate,
        ownerId: owner.id,
        assigneeId: assignee.id,
      };
      const task = new Task(taskProps);
    });
  });
});
