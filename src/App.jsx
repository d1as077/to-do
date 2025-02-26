import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@mui/material'

import Progress from './components/progress'
import EditModal from './components/modal'
import TodoItem from './components/todo-item'
import { addTodo, removeTodo, toggleTodo } from './redux/todoSlice/index'

import { FaPlus } from 'react-icons/fa'
import { BiSearch } from 'react-icons/bi'

const App = () => {
	const [searchQuery, setSearchQuery] = useState('')
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [currentTodo, setCurrentTodo] = useState(null)
	const [editedText, setEditedText] = useState('')



	const { data } = useSelector(state => state.todoReducer)
	const dispatch = useDispatch()
	const inputRef = useRef()

	const completedTodos = data.filter(todo => todo.completed).length
	const progress = data.length > 0 ? (completedTodos / data.length) * 100 : 0

	const filteredTodo = data.filter(todo =>
		todo.text.toLowerCase().includes(searchQuery.toLowerCase())
	)

	const handleEdit = todo => {
		setCurrentTodo(todo)
		setEditedText(todo.text)
		setIsModalOpen(true)
	}

	const handleSaveEdit = () => {
		if (editedText.trim()) {
			dispatch({
				type: 'todos/editTodo',
				payload: {
					...currentTodo,
					text: editedText,
				},
			})
			setIsModalOpen(false)
			setCurrentTodo(null)
			setEditedText('')
		}
	}

	const handleCancel = () => {
		setIsModalOpen(false)
		setCurrentTodo(null)
		setEditedText('')
	}

	return (
		<div
			className={` min-h-screen flex flex-col items-center justify-center p-10`}
		>
			<div
				className={`w-full max-w-2xl p-6 rounded-2xl shadow-lg flex flex-col gap-4`}
			>
					<div
						className={`flex justify-between items-center rounded-md gap-3 `}
					>
						<input
							type='text'
							placeholder='Search tasks...'
							value={searchQuery}
							onChange={e => setSearchQuery(e.target.value)}
							className='flex-18 outline-none px-3 py-2'
						/>

						<BiSearch className='text-gray-400 flex-1 flex justify-center items-center h-full px-2' />
					</div>

				<div className='flex gap-3'>
					<input
						type='text'
						ref={inputRef}
						placeholder='Add a new task...'
						maxLength={40}
						className={`flex-1 px-3 py-2 rounded-md border  focus:outline-none focus:ring-1 focus:ring-blue-400`}
					/>
					<Button     
						variant='contained'
						className='!rounded-md'
						onClick={() => {
							if (inputRef.current.value.trim()) {
								dispatch(
									addTodo({
										id: Date.now(),
										text: inputRef.current.value,
										completed: false,
									})
								)
								inputRef.current.value = ''
							}
						}}
					>
						<FaPlus /> 
					</Button>
				</div>

				<div className='space-y-3 overflow-y-scroll max-h-[245px] pr-2'>
					{filteredTodo.map(todo => (
						<TodoItem
							key={todo.id}
							todo={todo}
							toggleTodo={id => dispatch(toggleTodo(id))}
							handleEdit={handleEdit}
							removeTodo={id => dispatch(removeTodo(id))}
						/>
					))}
				</div>

				{data.length > 0 && <Progress value={progress} />}
			</div>

			<EditModal
				isModalOpen={isModalOpen}
				editedText={editedText} 
				setEditedText={setEditedText}
				handleSaveEdit={handleSaveEdit}
				handleCancel={handleCancel}
			/>
		</div>
	)
}

export default App
