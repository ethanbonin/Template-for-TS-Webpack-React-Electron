import { createHashHistory } from 'history';
import { applyMiddleware, compose, createStore, StoreEnhancerStoreCreator } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import createRootReducer from '@/renderer/redux/reducers/index';
import { routerMiddleware } from 'connected-react-router';
import { AllActions } from '@rendererredux/actions/';
import { ThunkExtraArguments } from '@/renderer/types/thunkExtraArguments';
// import monitorReducersEnhancer from './enhancers/monitorReducers'
// import loggerMiddleware from './middleware/logger'
// import rootReducer from './reducers'

export const history = createHashHistory();

const rootReducer = createRootReducer(history);
export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore(preloadedState?: AppState) {
    const middlewares = [routerMiddleware(history)];

    middlewares.push(thunk.withExtraArgument({ extraAddedArgumentExample: 'Example Argument!' }));

    const middlewareEnhancer = applyMiddleware(...middlewares);

    const enhancers = [middlewareEnhancer];

    const composedEnhancers = compose<StoreEnhancerStoreCreator<unknown, unknown>>(...enhancers);

    return createStore(rootReducer, preloadedState, composedEnhancers);
}
