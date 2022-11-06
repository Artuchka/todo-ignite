import { useState } from "react"
import "./main.scss"
import { v4 as uuidv4 } from "uuid"

function App() {
	const [inputValue, setInputValue] = useState("")
	const [tasks, setTasks] = useState([])
	const [doneTasks, setDoneTasks] = useState([])

	function handleAdd() {
		const newTodo = { text: inputValue, id: uuidv4() }
		setTasks((prev) => [...prev, newTodo])
		setInputValue("")
	}
	function handleDelete(deleteId) {
		setTasks((prev) => prev.filter(({ id }) => deleteId != id))
		setDoneTasks((prev) => prev.filter((id) => deleteId != id))
	}
	function handleDone(doneId) {
		if (doneTasks.includes(doneId)) {
			setDoneTasks((prev) => prev.filter((id) => doneId != id))
		} else {
			setDoneTasks((prev) => [...prev, doneId])
		}
	}
	function handleEnterInput(e) {
		if (e.code == "Enter") {
			handleAdd()
		}
	}

	return (
		<div className="App">
			<header className="header">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
					/>
				</svg>

				<span>to</span>
				<span>do</span>
			</header>
			<main className="main">
				<>
					<input
						type="text"
						className="input-add"
						placeholder="Add a new task"
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						onKeyDown={handleEnterInput}
					/>
					<button className="btn btn--full" onClick={handleAdd}>
						Create
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</button>
				</>
				<div className="statuses-container">
					<div className="status-box">
						<span className="prop main-color">Created tasks</span>
						<span className="value">{tasks.length}</span>
					</div>
					<div className="status-box">
						<span className="prop secondary-color">Done tasks</span>
						<span className="value">
							{doneTasks.length} of {tasks.length}
						</span>
					</div>
				</div>

				{tasks.length === 0 ? (
					<div className="empty-case">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
							/>
						</svg>
						<div>You don't have any tasks registered yet.</div>
						<div>Create tasks and organize your to-do items</div>
					</div>
				) : (
					<ul className="todo-list">
						{tasks.map((task) => (
							<li key={task.id} className="todo-item">
								<button
									className={`btn btn--circle ${
										doneTasks.includes(task.id)
											? "done"
											: ""
									}`}
									onClick={() => handleDone(task.id)}
								></button>
								<span className="text">{task.text}</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6 trash"
									onClick={() => handleDelete(task.id)}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
									/>
								</svg>
							</li>
						))}
					</ul>
				)}
			</main>
		</div>
	)
}

export default App
