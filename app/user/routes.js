import express from 'express';
import {default as userApi} from './controller';

let router = express.Router();

router.get('/testdomain/api/test',userApi.test);


export default router;