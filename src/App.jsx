import { useState } from 'react'
import NewProject from './components/NewProject.jsx'
import ProjectsSidebar from './components/ProjectsSidebar.jsx'
import NoProjectSelected from './components/noProjectSelected.jsx'

function App() {
	const [projectsState, setProjectsState] = useState({
		selectedProjectId: undefined,
		projects: [],
	})

	const handleStartAddProject = () => {
		setProjectsState(prevState => {
			return { ...prevState, selectedProjectId: null }
		})
	}
	let content

	if (projectsState.selectedProjectId === null) {
		content = <NewProject />
	} else if (projectsState.selectedProjectId === undefined) {
		content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
	}

	return (
		<main className='h-screen py-8 flex gap-8  '>
			<ProjectsSidebar onStartAddProject={handleStartAddProject} />
			{content}
		</main>
	)
}

export default App
