import express from 'express';
import bodyParser from 'body-parser';
import {default as userRoutes} from '../app/user/routes';

var cors = require('cors')
export default ()=>{
    let app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cors());
    // app.use( express.static('uploads') );
    // app.set('view engine','ejs');
    app.use('/', userRoutes);
    return app;
}
