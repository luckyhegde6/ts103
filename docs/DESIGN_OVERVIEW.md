# 🏗️ Design Overview

## High-Level Design (HLD)
Components:
- **TaskScheduler**: orchestrates execution of tasks
- **Task (Abstract)**: defines execution contract
- **Concrete Tasks**: implement actual logic (Email, Report, etc.)
- **Logger (Future)**: can be extracted for audit trail

Data Flow:
User adds → Scheduler queues → Executes sequentially → Logs execution

## Low-Level Design (LLD)
- `Task.run()` wraps each `execute()` with timing logs.
- `TaskScheduler` holds `Task[]` and executes with async/await.
- Extend with Promises to simulate delay or cron scheduling.

## Scalability Path
Later, this can evolve into:
- Distributed workers (AWS Lambda / GCP Cloud Functions)
- Persistent queues (Redis, SQS)
- Observability (Prometheus metrics)

## project layout:
```
task-automator-engine/
│
├── src/
│   ├── base/Task.ts
│   ├── scheduler/TaskScheduler.ts
│   ├── utils/Logger.ts
│   ├── tasks/
│   │   ├── EmailTask.ts
│   │   ├── ReportTask.ts
│   │   └── CleanupTask.ts
│   └── index.ts
│
├── tests/
│   ├── TaskScheduler.test.ts
│   └── Task.test.ts
│
├── tsconfig.json
├── jest.config.js
├── package.json
└── README.md
```
