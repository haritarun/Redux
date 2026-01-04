import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../Features/Counter/CounterSlice';
import userReducer from '../Features/User/UserSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        user : userReducer,
    },
});

export default store;

