import * as express from 'express';
import { Request, Response } from 'express';
import withdrawController from './controllers/WithdrawController';
import depositController from './controllers/DepositController';


const routes = express.Router();

routes.get("/", (request: Request, response: Response) => {
    return response.status(200).json({
        message: 'O servidor do Cyber Bank está em execução. Agora você pode fazer transações com nossa moeda biteris',
    });
})


routes.put('/withdraw/:account_number', withdrawController.withdraw);
routes.put('/deposit/:account_number', depositController.deposit);



export { routes };