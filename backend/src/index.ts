import express, { RequestHandler, Application } from 'express'
import cors from 'cors';
import userRouter from './routes/userRoutes';

const app: Application = express();
const port: number = 8080;

app.use(cors() as RequestHandler);
app.use(express.json());

app.use('/api/v1', userRouter)

app.listen(port, () => {
    console.log('listing on 8080')
})