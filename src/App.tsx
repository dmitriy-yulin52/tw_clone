import React from 'react';
import {SignIn} from "./component/pages/SignIn/SignIn";
import {Route, Routes} from "react-router-dom";
import {Home} from "./component/pages/home/Home";


function App() {
    return (
        <div className={'App'}>
            {/*<Routes>*/}
            {/*    <Route path={'/'} element={<Content/>}>*/}
            {/*        <Route path={'home'} element={<HomeTest/>}/>*/}
            {/*        /!*<Route path={'tweet'}>*!/*/}
            {/*        /!*    <Route index  element={<TweetsContent/>}/>*!/*/}
            {/*        /!*    <Route path={':id'}  element={<TweetsContent/>}/>*!/*/}
            {/*        /!*</Route>*!/*/}
            {/*    </Route>*/}
            {/*</Routes>*/}
            <Routes>
                <Route path={'signin'} element={<SignIn/>}/>
                    <Route path={'/*'} element={<Home/>}/>
                    <Route path={'*'} element={<div>not found</div>}/>
            </Routes>
        </div>
    );
}

export default App;
