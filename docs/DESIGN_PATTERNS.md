# Design Patterns — ts103: Task Automator Engine

## Patterns Used

### 1. Template Method Pattern

```typescript
abstract class Task {
  async run(): Promise<void> {
    Logger.info(`Starting: ${this.name}`);
    const start = Date.now();
    await this.execute();              // ← subclass implements
    Logger.info(`Finished in ${Date.now() - start}ms`);
  }
  protected abstract execute(): Promise<void>;
}
```

The `run()` method defines the algorithm skeleton (log start → execute → log finish). Subclasses override only the `execute()` step.

### 2. Abstract Base Class

`Task` is declared `abstract` — cannot be instantiated directly. The abstract `execute()` method forces all subclasses to implement the core behavior.

### 3. Polymorphism

```typescript
const queue: Task[] = [emailTask, reportTask, cleanupTask];
for (const task of queue) {
  await task.run();  // polymorphic call
}
```

`TaskScheduler` treats all tasks uniformly through the `Task` interface, regardless of concrete implementation.

### 4. Encapsulation

- `protected name` — accessible in subclasses but not externally
- `private recipient` / `private reportType` — internal to each task
- Logger is static — simplifies audit trail without DI

### 5. Sequential Iterator

```typescript
async run(): Promise<void> {
  Logger.info('Starting Task Scheduler...');
  for (const task of this.queue) {
    await task.run();
  }
  Logger.info('All tasks completed!');
}
```

## Evolution Path

- Template Method → Strategy pattern for pluggable execution (ts105 cache strategies)
- Abstract classes → Generic constraints (ts104)
- Static Logger → Injectable Logger interface (ts104+, ts107)
- Sequential → Concurrent with error handling (ts105 retry logic)
