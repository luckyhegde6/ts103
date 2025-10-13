// src/index.ts
import { TaskScheduler } from "./tasks/TaskScheduler";
import { EmailTask } from "./scheduler/EmailTask";
import { ReportTask } from "./scheduler/ReportTask";
import { CleanupTask } from "./scheduler/CleanupTask";

async function main() {
  const scheduler = new TaskScheduler();

  scheduler.addTask(new EmailTask("Send Welcome Email", "user@example.com"));
  scheduler.addTask(new ReportTask("Generate Sales Report", "Sales"));
  scheduler.addTask(new CleanupTask("Cleanup Temp Files"));

  await scheduler.run();
}

main();
