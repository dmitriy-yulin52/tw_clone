import { compose, createStore} from "redux";


declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }
}

const composeEnhancers =
    (typeof window !== 'undefined' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

// export let root = combineReducers({})

function root(state = 0, action: any): void {
    console.log(state, action)
}

export type AppStateType = ReturnType<typeof root>

// @ts-ignore
export let store = createStore(root)

// @ts-ignore
window.store = store