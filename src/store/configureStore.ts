import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from "./rootReducer";
import initialState from "./initialState";


declare const window: any;

export const history = createBrowserHistory({
    basename: '/'
});

const middleware = [
    thunk,
    routerMiddleware(history),
];

if (process.env.NODE_ENV !== 'production') {
    middleware.push(
        createLogger({
            level: 'info',
            collapsed: true,
        })
    );
}

let preloadedState;
if (typeof window !== 'undefined') {
    preloadedState = window.__PRELOADED_STATE__;
}

const composedEnhancers = compose(applyMiddleware(...middleware));

const store = createStore(
    rootReducer(history),
    preloadedState || initialState,
    composedEnhancers
);

export type RootState = ReturnType<typeof store.getState>;
export default store;