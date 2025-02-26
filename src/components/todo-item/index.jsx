import React from "react"
import {Button} from "@mui/material"
import {FaCheck, FaTrash, FaUndo, FaRegEdit} from "react-icons/fa"

const TodoItem = ({todo, darkMode, toggleTodo, handleEdit, removeTodo}) => {
    return (
        <div
            className={`flex justify-between items-center ${
                darkMode ? "bg-gray-700" : "bg-blue-50"
            } p-2 rounded-md shadow-sm`}>
            <div className="flex justify-start items-center gap-[10px]">
                <button
                    onClick={() => toggleTodo(todo.id)}
                    className={`flex justify-center items-center p-[8px] rounded-md border ${
                        todo.completed ? "text-yellow-500" : "text-green-500"
                    }`}>
                    {todo.completed ? <FaUndo /> : <FaCheck />}
                </button>
                <span
                    className={`text-lg ${
                        todo.completed ? "line-through text-gray-400" : ""
                    }`}>
                    {todo.text}
                </span>
            </div>

            <div className="flex gap-2">
                <Button
                    variant="contained"
                    className="!bg-blue-500 !w-[35px] !h-[35px]"
                    onClick={() => handleEdit(todo)}>
                    <FaRegEdit />
                </Button>

                <Button
                    variant="contained"
                    onClick={() => removeTodo(todo.id)}
                    className="!bg-red-500 !w-[35px] !h-[35px]">
                    <FaTrash />
                </Button>
            </div>
        </div>
    )
}

export default TodoItem
