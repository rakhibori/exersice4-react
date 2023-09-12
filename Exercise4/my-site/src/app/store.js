import {configureStore} from '@reduxjs/toolkit';
import { studentsApi } from './services/studentsApi';
import { lessonsApi } from './services/lessonsApi';
import { teachersApi } from './services/teachersApi';

const store = configureStore({
    reducer:{
        [studentsApi.reducerPath]:studentsApi.reducer,
        [lessonsApi.reducerPath]:lessonsApi.reducer,
        [teachersApi.reducerPath]:teachersApi.reducer
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(studentsApi.middleware, lessonsApi.middleware, teachersApi.middleware),
})

export default store;


