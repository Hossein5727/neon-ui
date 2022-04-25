import { configureStore } from '@reduxjs/toolkit'
import counterReduser from './counter/counterReduser'
import todoReduser from './todo/todoReduser'

export const store = configureStore({
    reducer: {
        counter: counterReduser,
        todo: todoReduser
    },
})