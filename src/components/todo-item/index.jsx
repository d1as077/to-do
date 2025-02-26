import React from "react"
import {Button} from "@mui/material"
import {FaCheck, FaTrash, FaUndo, FaRegEdit} from "react-icons/fa"

const TodoItem = ({todo, toggleTodo, handleEdit, removeTodo}) => {
    return (
			<div
				className={`flex justify-between items-center  p-2 rounded-md shadow-sm`}
			>
				<div className='flex justify-start items-center gap-[10px]'>
					<span
						className={`text-lg ${
							todo.completed ? 'line-through text-gray-400' : ''
						}`}
					>
						{todo.text}
					</span>
				</div>

				<div className='flex gap-2'>
					<Button
						variant='outlined'
						className=' !w-[35px] !h-[35px]'
						onClick={() => handleEdit(todo)}
					>
						<FaRegEdit />
					</Button>

					<Button
						variant='contained'
						onClick={() => removeTodo(todo.id)}
						className=' !w-[35px] !h-[35px]'
					>
						<FaTrash />
					</Button>
					<button
						onClick={() => toggleTodo(todo.id)}
						className={`flex justify-center items-center p-[8px] rounded-md border border-[#1677ff] text-[#1677ff]`}
					>
						{todo.completed ? <FaUndo /> : <FaCheck />}
					</button>
				</div>
			</div>
		)
}

export default TodoItem
