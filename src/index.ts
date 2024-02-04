import express, {Express} from "express"
import 'dotenv/config'
import { router } from "./routes/routes"
import { runMongo } from "./database/mongo-connect"

const PORT: string = process.env.PORT ?? '3000'

const app: Express = express()
app.use(express.json())
app.use('/', router);

runMongo()

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})