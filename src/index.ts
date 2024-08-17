import express from "express"
import "dotenv/config"
import { chatController } from "./shared/kernel"

const app = express()
app.use(express.json())

app.post("/chat", (req, res) => chatController.handle(req, res))

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
