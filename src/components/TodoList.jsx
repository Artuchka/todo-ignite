import React from "react"

export function TodoList(props) {
	const { tasks, doneTasks, handleDone, handleDelete, handleEdit, filter } =
		props
	console.log(tasks.map(({ text }) => text))
	return (
		<ul className="todo-list">
			{tasks
				.filter(({ id }) => {
					if (filter == "all") return true
					if (filter == "done" && doneTasks.includes(id)) return true
					if (filter == "active" && !doneTasks.includes(id))
						return true
					return false
				})
				.map((task) => (
					<li key={task.id} className="todo-item">
						<button
							className={`btn btn--circle ${
								doneTasks.includes(task.id) ? "done" : ""
							}`}
							onClick={() => handleDone(task.id)}
						></button>
						<div onDoubleClick={(e) => (e.target.disabled = false)}>
							<input
								onBlur={(e) => (e.target.disabled = true)}
								className="text"
								disabled
								defaultValue={task.text}
								onChange={(e) => handleEdit(e, task.id)}
							/>
						</div>
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
	)
}
