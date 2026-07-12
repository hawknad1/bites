import express from "express"
import restaurantRouter from "./routes/restaurants.js"
import cusinesRouter from "./routes/cusines.js"
import { errorHandler } from "./middlewares/errorHandler.js"

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())

app.use("/cusines", cusinesRouter)
app.use("/restaurants", restaurantRouter)

app.use(errorHandler)

app
  .listen(PORT, () => {
    console.log(`App listening on Port ${PORT}`)
  })
  .on("error", (error) => {
    throw new Error(error.message)
  })
