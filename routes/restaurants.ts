import express from "express"
import { RestaurantSchema, type Restaurant } from "../schemas/restaurant.js"
import { validate } from "../middlewares/validate.js"

const router = express.Router()

router.post("/", validate(RestaurantSchema), async (req, res) => {
  const restaurant = req.body as Restaurant
  res.send(`Hi Restaurants: ${restaurant.name} - ${restaurant.location}`)
})

export default router
