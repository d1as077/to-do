import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    data: JSON.parse(localStorage.getItem("todo")) || [],
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, {payload}) => {
            state.data.unshift(payload)
            localStorage.setItem("todo", JSON.stringify(state.data))
        },
        removeTodo: (state, {payload}) => {
            state.data = state.data.filter((todo) => todo.id !== payload)
            localStorage.setItem("todo", JSON.stringify(state.data))
        },
        toggleTodo: (state, {payload}) => {
            state.data = state.data.map((todo) => {
                if (todo.id === payload) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                }
                return todo
            })
            localStorage.setItem("todo", JSON.stringify(state.data))
        },
        editTodo: (state, {payload}) => {
            state.data = state.data.map((todo) => {
                if (todo.id === payload.id) {
                    return {
                        ...todo,
                        text: payload.text,
                    }
                }
                return todo
            })
            localStorage.setItem("todo", JSON.stringify(state.data))
        },
    },
})

export const {addTodo, removeTodo, toggleTodo, editTodo} = todoSlice.actions
export default todoSlice.reducer
