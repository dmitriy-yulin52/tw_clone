import {compose, createStore,applyMiddleware} from "redux";
import {rootReducer} from "./rootReducer";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas";



declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }
}

export const composeEnhancers =
    (typeof window !== 'undefined' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;


export type RootState = ReturnType<typeof rootReducer>

// export type  RootState = {
//     tweets:TweetsState
// }

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer,composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)

// @ts-ignore
window.store = store