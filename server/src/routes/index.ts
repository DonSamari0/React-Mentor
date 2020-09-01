import { Router, Request, Response } from 'express';

const router = Router();

export default function () {
    router.get('/', (_req: Request, res: Response) => {
        res.send('Hello world');
    });

    return router;
}
