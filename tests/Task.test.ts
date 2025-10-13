import { Task } from "../src/base/Task";

class MockTask extends Task {
  executed = false;
  protected async execute(): Promise<void> {
    this.executed = true;
  }
}

describe("Task Base Class", () => {
  it("should run execute() when run() is called", async () => {
    const task = new MockTask("Mock Task");
    await task.run();
    expect(task.executed).toBe(true);
  });

  it("should throw error if execute() fails", async () => {
    class FailingTask extends Task {
      protected async execute(): Promise<void> {
        throw new Error("Boom!");
      }
    }
    const failingTask = new FailingTask("Fail Task");
    await expect(failingTask.run()).rejects.toThrow("Boom!");
  });
});
