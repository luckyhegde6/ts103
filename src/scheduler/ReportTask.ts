import { Task } from "../base/Task";

export class ReportTask extends Task {
  private reportType: string;

  constructor(name: string, reportType: string) {
    super(name);
    this.reportType = reportType;
  }

  protected async execute(): Promise<void> {
    console.log(`📈 Generating ${this.reportType} report...`);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(`📊 ${this.reportType} report generated successfully.`);
  }
}
