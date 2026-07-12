import type { Response, Request, NextFunction } from "express"
import { errorResponses } from "../utils/responses.js"

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.error(err)
  errorResponses(res, 500, err)
}
