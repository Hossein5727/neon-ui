import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAsyncTodos = createAsyncThunk('getTodo', async (_, { rejectWithValue }) => {
    try {
        const { data } = await axios.get("http://localhost:3001/todos/");
        return data
    } catch (error) {
        return rejectWithValue([], error)
    }
}
)

export const addAsyncTodos = createAsyncThunk('addTodo', async (payload, { rejectWithValue }) => {
    try {
        const { data } = await axios.post("http://localhost:3001/todos/", {
            id: Math.random(),
            todo: payload,
            compeleted: false
        });
        return data
    } catch (error) {
        return rejectWithValue([], error)
    }
}
)

export const editAsyncTodos = createAsyncThunk('editTodo', async (payload, { rejectWithValue }) => {
    try {
        const { data } = await axios.put(`http://localhost:3001/todos/${payload.id}`, {
            compeleted: payload.compeleted,
            todo: payload.todo
        })
        return data
    } catch (error) {
        return rejectWithValue([], error)
    }
}
)

export const deleteAsyncTodos = createAsyncThunk('deleteTodo', async (payload, { rejectWithValue }) => {
    try {
        await axios.delete(`http://localhost:3001/todos/${payload.id}`)
        return { id: payload.id }
    } catch (error) {
        return rejectWithValue([], error)
    }
}
)

const initialState = {
    todos: [],
    loading: false,
    error: null
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    extraReducers: {
        [getAsyncTodos.rejected]: (state, action) => {
            return { ...state, todos: [], loading: false, error: action.error.message }
        }, [getAsyncTodos.pending]: (state, action) => {
            return { ...state, todos: [], loading: true, error: null }
        },
        [getAsyncTodos.fulfilled]: (state, action) => {
            return { ...state, todos: action.payload, loading: false, error: null }
        },
        [addAsyncTodos.fulfilled]: (state, action) => {
            state.todos.push(action.payload)
        },
        [editAsyncTodos.fulfilled]: (state, action) => {
            const selected = state.todos.find(item => item.id === action.payload.id)
            selected.compeleted = action.payload.compeleted
        }, [deleteAsyncTodos.fulfilled]: (state, action) => {
            const filterTodo = state.todos.filter(item => item.id !== action.payload.id)
            state.todos = filterTodo
        },
    }
})

// export const { getAsyncTodos } = todoSlice.actions
export default todoSlice.reducer;