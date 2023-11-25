import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { StudentRoutes } from './app/Modules/student/student.route'
const app: Application = express()

//parsers
app.use(express.json())
app.use(cors())

//application route
app.use('/api/v1/students', StudentRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World')
})

export default app
