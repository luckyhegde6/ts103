import { TaskScheduler } from "../src/tasks/TaskScheduler";
import { Task } from "../src/base/Task";

class QuickTask extends Task {
  executed = false;
  protected async execute(): Promise<void> {
    this.executed = true;
  }
}

describe("TaskScheduler", () => {
  it("should execute all added tasks", async () => {
    const scheduler = new TaskScheduler();
    const task1 = new QuickTask("Task 1");
    const task2 = new QuickTask("Task 2");

    scheduler.addTask(task1);
    scheduler.addTask(task2);

    await scheduler.run();

    expect(task1.executed).toBe(true);
    expect(task2.executed).toBe(true);
  });
});
