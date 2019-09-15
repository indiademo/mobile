let authCtrl={};
authCtrl.checkAuthenticationForEmployer = (req,res,next)=>{
    if(req.user){
        if(req.user.role == 'Employer'){
        next();
        }
        else{
            res.json({
                Error:"Authentication error",
                Message:"Please provide employer token"
            })
        }
    }
    else{
        res.json({
            Error:"Authentication error",
            Message:"Token required"
        })
    }
}

authCtrl.checkAuthenticationForJobseeker = (req,res,next)=>{
    if(req.user){
        if(req.user.role == 'Jobseeker'){
        next();
        }
        else{
            res.json({
                Error:"Authorisation error",
                Message:"Please provide jobseeker token"
            })
        }
    }
    else{
        res.json({
            Error:"Authorisation error",
            Message:"Token required"
        })
    }
}

export {authCtrl}
