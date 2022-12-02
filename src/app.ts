import express, { Application, NextFunction, Request, Response } from 'express';
// import { Server } from 'http';

const PORT = 3000;
// const HOST = '0.0.0.0'
const app: Application = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send("Hello from TS app");
})

// const server: Server = app.listen(PORT, HOST, () => console.log(`Running on http://${HOST}:${PORT}`));
app.listen(PORT, () => console.log(`Running on port ${PORT}`));
