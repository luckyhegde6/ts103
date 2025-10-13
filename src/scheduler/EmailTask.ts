import { Task } from "../base/Task";

export class EmailTask extends Task {
  private recipient: string;

  constructor(name: string, recipient: string) {
    super(name);
    this.recipient = recipient;
  }

  protected async execute(): Promise<void> {
    // Simulate async email sending
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(`📨 Email sent to ${this.recipient}`);
  }
}
