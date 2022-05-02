import React from 'react';
import {SignIn} from "./component/pages/SignIn/SignIn";
import {Footer} from "./component/footer/Footer";
import {Route, Routes} from "react-router-dom";
import {Home} from "./component/pages/home/Home";

function App() {
    return (
        <div className={'App'}>
            <Routes>
                <Route path={'/signin'} element={<SignIn/>}/>
                <Route path={'/'} element={<Home/>}/>
            </Routes>
        </div>
    );
}

export default App;
