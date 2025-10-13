import { Logger } from "../utils/Logger";

export abstract class Task {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  protected abstract execute(): Promise<void>;

  public async run(): Promise<void> {
    const start = Date.now();
    Logger.info(`Starting task: ${this.name}`);
    try {
      await this.execute();
      const duration = Date.now() - start;
      Logger.info(`Completed task: ${this.name} in ${duration}ms`);
    } catch (error) {
      Logger.error(`Task "${this.name}" failed: ${(error as Error).message}`);
      throw error;
    }
  }
}
