import type { Request, Response, NextFunction } from "express"
import { errorResponses } from "../utils/responses.js"
import { initializeRedisClient } from "../utils/client.js"
import { restaurantKeyById } from "../utils/keys.js"

export const checkRestaurantExists = async (
  req: Request<{ restaurantId: string }>,
  res: Response,
  next: NextFunction,
) => {
  const { restaurantId } = req.params

  if (!restaurantId) {
    return errorResponses(res, 400, "Restaurant ID not found")
  }

  const client = await initializeRedisClient()
  const restaurantKey = restaurantKeyById(restaurantId)
  const exists = await client.exists(restaurantKey)
  if (!exists) {
    return errorResponses(res, 404, "Restaurant not found")
  }
  next()
}
