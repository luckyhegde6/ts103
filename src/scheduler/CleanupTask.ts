import { Task } from "../base/Task";

export class CleanupTask extends Task {
  protected async execute(): Promise<void> {
    console.log("🧹 Cleaning temporary files...");
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log("🧼 Cleanup completed.");
  }
}
