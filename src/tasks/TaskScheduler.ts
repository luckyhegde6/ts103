import { Task } from "../base/Task";
import { Logger } from "../utils/Logger";

export class TaskScheduler {
  private queue: Task[] = [];

  addTask(task: Task): void {
    Logger.info(`Task added: ${task.constructor.name}`);
    this.queue.push(task);
  }

  async run(): Promise<void> {
    Logger.info("Task Scheduler started...");
    for (const task of this.queue) {
      await task.run();
    }
    Logger.info("All tasks completed successfully!");
  }
}
