export enum LogLevel {
  INFO = "INFO",
  WARN = "WARN",
  ERROR = "ERROR",
}

export class Logger {
  static log(level: LogLevel, message: string): void {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level}] ${message}`);
  }

  static info(message: string): void {
    this.log(LogLevel.INFO, message);
  }

  static warn(message: string): void {
    this.log(LogLevel.WARN, message);
  }

  static error(message: string): void {
    this.log(LogLevel.ERROR, message);
  }
}
