# 🧠 Task Automator Engine

A lightweight, object-oriented job scheduler built in **TypeScript**.  
It demonstrates **Classes, Inheritance, and Abstraction** using a clean design — perfect for learning TypeScript’s OOP system.

---

## 🚀 Features
- Extendable `Task` base class with start/finish logging
- Concrete implementations (`EmailTask`, `ReportTask`, etc.)
- Scheduler that queues and executes tasks sequentially
- Type-safe, strongly-typed event logs

---

## 🏗️ Architecture
- **BaseTask (Abstract)** → defines the contract (run, log)
- **ConcreteTask** → implements custom logic
- **TaskScheduler** → manages timing, queue, and execution

```ts
abstract class Task {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }

  abstract execute(): Promise<void>;

  async run(): Promise<void> {
    console.log(`🕒 Starting: ${this.name}`);
    const start = Date.now();
    await this.execute();
    console.log(`✅ Finished: ${this.name} in ${Date.now() - start}ms`);
  }
}
```

## 🧩 Example Usage
```ts
# Install dependencies
npm install
# Run
npx ts-node src/index.ts

```

# ▶️ How to Run
```
npm install
npm test
npm run start
``` 

```plaintext    
🚀 Starting Task Scheduler...
🕒 Starting: Send Welcome Email
📨 Email sent to user@example.com
✅ Finished: Send Welcome Email in 1004ms
🕒 Starting: Generate Sales Report
📈 Generating Sales report...
📊 Sales report generated successfully.
✅ Finished: Generate Sales Report in 1502ms
🕒 Starting: Cleanup Temp Files
🧹 Cleaning temporary files...
🧼 Cleanup completed.
✅ Finished: Cleanup Temp Files in 802ms
🎉 All tasks completed!

```
