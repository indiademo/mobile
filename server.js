import {dbConfig} from './config/env/development';
import { default as express} from './config/express';

const app = express();
app.listen( dbConfig.port, ()=>{
    console.log("Server listening to port:", dbConfig.port);
})

export {app};