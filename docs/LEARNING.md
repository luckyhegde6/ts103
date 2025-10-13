# 🎓 TypeScript OOP Concepts Explained

## 1. Classes
A class in TypeScript defines a blueprint for creating objects with properties and methods.

Example:
```ts
class Car {
  constructor(public brand: string) {}
  drive() { console.log(`${this.brand} is moving`); }
}
```

## 2. Access Modifiers

- public – accessible everywhere (default)

- private – accessible only inside the class

- protected – accessible inside the class and subclasses

## 3. Inheritance

Classes can extend others to reuse behavior:

```ts
class ElectricCar extends Car {
  constructor(brand: string, private battery: number) {
    super(brand);
  }
  charge() { console.log(`Charging battery: ${this.battery}%`); }
}
```

## 4. Abstract Classes
Used to define a contract for derived classes.
```ts
abstract class Task {
  abstract execute(): void;
  log() { console.log("Task executed."); }
}
```

## 5. Applying to “Task Automator Engine”

- Base abstract class → Task

- Derived tasks → EmailTask, ReportTask

- Scheduler → uses polymorphism to execute all tasks with a shared interface

## 6. Lessons Learned

- Abstraction simplifies complexity

- Encapsulation improves safety

- Polymorphism improves flexibility

- Composition beats inheritance when logic becomes large