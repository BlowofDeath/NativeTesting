import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './Reducers/main.reducer';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));
    let persistor = persistStore(store)
    return { store, persistor }
}

