import * as express from 'express';
import * as cors from 'cors';
import * as dotenv from 'dotenv';
import { routes } from './routes';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(routes);

app.set('port', process.env.APP_PORT || 3000);

export { app }