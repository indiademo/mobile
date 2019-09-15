import jwtstrategy from 'passport-jwt';
import extractJwt from "passport-jwt";
import {dbConfig} from '../config/env/development';
import { default as Users } from '../app/users/users.model';

const jwtStrategy = jwtstrategy.Strategy;
const extractjwt = extractJwt.ExtractJwt;
const secretKey = dbConfig.secret;

const opt = {
    jwtFromRequest: extractjwt.fromAuthHeaderAsBearerToken(), //it'll look for the bearer token from the auth header
    secretOrKey: secretKey
};

var passportStrategies = {};

passportStrategies.user = (passport) => {
    passport.use('userJwt', new jwtStrategy(opt, (jwt_payload, done) => {
            console.log('userJwt', jwt_payload);
            //user_data= jwt_payload;
            Users.findOne({email: jwt_payload.email}).then((user) => {
                if(user) {
                    //req.body.user_data = jwt_payload;
                    return done(null, user);
                } else {
                    return done(null, false);
                    
                }
            }).catch((err) => {
                if(err) {
                    throw err;
                }
            })
    }));
}

export default passportStrategies;