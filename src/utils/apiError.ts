export class ApiError extends Error {
  code: number;
  details?: unknown;
  constructor(statusCode: number, message: string, details?: string) {
    super(message);
    this.code = statusCode;
    this.details = details
  };
}