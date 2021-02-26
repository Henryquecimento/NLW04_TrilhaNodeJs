export class AppError {
  public readonly message: string;
  public readonly statusCode: number;

  //if you didn't especified the error's number in the AppError it'll be:
  //constructor(message: string, statusCode: number)
  constructor(message: string, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}
