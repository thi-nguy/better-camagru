import express, { Application, NextFunction, Request, Response } from 'express';
import { Server } from 'http';


const app: Application = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send("Hello from TS app");
})

const server: Server = app.listen(4000, () => console.log("Server is on port 3000"));
