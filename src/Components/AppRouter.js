import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Modal from "./Modals/Modal";
import FindId from './Modals/Side Components/FindId';
import FindPw from './Modals/Side Components/FindPw';
import SignUp from './Modals/Side Components/SignUp';
import BodyParts from "./Not Modal Parts/Body Parts/BodyParts";
import Calculator from "./Not Modal Parts/FunctionContainer/Functions/Calculator";
import Calendar from "./Not Modal Parts/FunctionContainer/Functions/Calendar";

const AppRouter = ({isLoggedIn}) => {

    console.log(isLoggedIn);

    return(
        <Router>
            <Switch>
                {isLoggedIn ?
                (   
                    <Route exact path="/">
                        <BodyParts />
                        <Modal />
                        <Calculator />
                        <Calendar />
                    </Route>
                ) :
                (
                    <>
                        <Route exact path="/">
                            <BodyParts />
                            <Modal />
                            <Calculator />
                            <Calendar /> 
                        </Route>
                        <Route exact path="/회원가입">
                            <SignUp />
                        </Route>
                        <Route exact path="/아이디찾기">
                            <FindId />
                        </Route>  
                        <Route exact path="/비밀번호찾기">
                            <FindPw />
                        </Route>                      
                    </>
                )}
            </Switch>
        </Router>
    )
};

export default AppRouter;