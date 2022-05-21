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

function root(state = 0, action: any): void {
    console.log(state, action)
}

export type AppStateType = ReturnType<typeof root>

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer,composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)

// @ts-ignore
window.store = store