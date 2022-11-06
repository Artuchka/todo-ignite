import { useState } from "react"
import "./main.scss"

function App() {
	const [tasks, setTasks] = useState([])
	const [doneTasks, setDoneTasks] = useState([])

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
					/>
					<button className="btn btn--full">
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

				{tasks.length == 0 ? (
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
					<div className="todo-list">
						{" "}
						{tasks.map((task) => task.text)}
					</div>
				)}
			</main>
		</div>
	)
}

export default App
