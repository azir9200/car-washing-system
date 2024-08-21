// src/errors/NotFoundError.ts

export default class NotFoundError extends Error {
    statusCode: number;
    success: boolean;
    data: never[];
  
    constructor(message: string) {
      super(message);
      this.statusCode = 404;
      this.success = false;
      this.data = [];
      Object.setPrototypeOf(this, NotFoundError.prototype);
    }
  
    toJSON() {
      return {
        success: this.success,
        statusCode: this.statusCode,
        message: this.message,
        data: this.data,
      };
    }
  }
  