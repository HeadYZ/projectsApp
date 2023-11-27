import { useState } from 'react'
import NewProject from './components/NewProject.jsx'
import ProjectsSidebar from './components/ProjectsSidebar.jsx'
import NoProjectSelected from './components/noProjectSelected.jsx'
import SelectedProject from './components/SelectedProject.jsx'

function App() {
	const [projectsState, setProjectsState] = useState({
		selectedProjectId: undefined,
		projects: [],
		tasks: [],
	})

	const handleAddTask = text => {
		setProjectsState(prevState => {
			const newTask = {
				text: text,
				projectId: prevState.selectedProjectId,
				id: Math.random() * 100,
			}
			return { ...prevState, tasks: [newTask, ...prevState.tasks] }
		})
	}
	const handleDeleteTask = id => {
		setProjectsState(prevState => {
			return {
				...prevState,
				tasks: prevState.tasks.filter(task => task.id !== id),
			}
		})
	}
	const handleAddProject = projectData => {
		const newProject = {
			...projectData,
			id: Math.random() * 100,
		}
		setProjectsState(prevState => {
			return { ...prevState, projects: [...prevState.projects, newProject], selectedProjectId: undefined }
		})
	}

	const handleStartAddProject = () => {
		setProjectsState(prevState => {
			return { ...prevState, selectedProjectId: null }
		})
	}

	const handleCancelAddProject = () => {
		setProjectsState(prevState => {
			return { ...prevState, selectedProjectId: undefined }
		})
	}

	const handleSelectProject = id => {
		setProjectsState(prevState => {
			return { ...prevState, selectedProjectId: id }
		})
	}

	const handleDeleteProject = () => {
		setProjectsState(prevState => {
			return {
				...prevState,
				selectedProjectId: undefined,
				projects: prevState.projects.filter(project => project.id !== prevState.selectedProjectId),
			}
		})
	}

	const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId)

	let content = (
		<SelectedProject
			project={selectedProject}
			onDelete={handleDeleteProject}
			onAddTask={handleAddTask}
			onDeleteTask={handleDeleteTask}
			tasks={projectsState.tasks}
		/>
	)

	if (projectsState.selectedProjectId === null) {
		content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
	} else if (projectsState.selectedProjectId === undefined) {
		content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
	}

	return (
		<main className='h-screen py-8 flex gap-8  '>
			<ProjectsSidebar
				onStartAddProject={handleStartAddProject}
				projects={projectsState.projects}
				onSelectProject={handleSelectProject}
				selectedProjectId={projectsState.selectedProject}
			/>
			{content}
		</main>
	)
}

export default App
