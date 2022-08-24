import { Request, Response, NextFunction } from "express";
import { AppError } from "./../errors/AppError";

const handleErrorMiddleware = async (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      message: error.message,
      error: error.name,
    });
  }
  return res.status(500).json({
    message: "Internal Server Error! (500)",
  });

};
export { handleErrorMiddleware };
